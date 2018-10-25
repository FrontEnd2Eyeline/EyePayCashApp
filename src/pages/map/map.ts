import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, LatLng} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {mapStyle} from "../../app/mapStyle";
import {MapProvider} from "../../providers/map/map";
import {HomePage} from "../home/home";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-map',
	templateUrl: 'map.html',
})
export class MapPage {

	map: GoogleMap;
	idsLoaded: any[];

	loading;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public geolocation: Geolocation,
		protected api: Api,
		protected user: AuthUserProvider,
		public mapProvider: MapProvider,
		public loadCtl: LoadingController,
		public toastCtrl: ToastController,
		public errorProvider: ModalErrorProvider) {
		this.idsLoaded = [];
	}

	ionViewDidLoad() {
		this.loading = this.loadCtl.create({
			spinner: 'dots'
		});
		this.loading.present();
		this.loadMap();
		this.loadMarkers();
	}

	loadMap() {
		let mapOptions: GoogleMapOptions = {
			camera: this.mapProvider.camera,
			styles: mapStyle
		};

		this.map = GoogleMaps.create('map', mapOptions);

		// Wait the MAP_READY before using any methods.
		this.map.one(GoogleMapsEvent.MAP_READY)
			.then(() => {
				this.getPosition();
			})
			.catch(error => {

			});
		this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(value => {
			let mapStop = value[0];
			this.mapProvider.setCamera({
				target: {
					lat: mapStop.target.lat,
					lng: mapStop.target.lng
				},
				zoom: mapStop.zoom,
				tilt: 0,
				bearing: 0
			});
			if (mapStop.zoom >= 10) {
				this.loadPoints(mapStop.target.lat, mapStop.target.lng);
			}
		})
	}

	loadMarkers() {
		this.mapProvider.markers.forEach((value => {
			if (this.idsLoaded.indexOf(value.id) == -1) {
				this.map.addMarker({
					title: value.company_name + " " + value.address,
					icon: 'blue',
					animation: 'DROP',
					position: new LatLng(value.lat, value.lng)
				}).then().catch(data => {
				});
				this.idsLoaded.push(value.id)
			}
		}))
	}

	loadPoints(lat, lng) {
		this.api.get('app/find-map', this.user, {
			lat: lat,
			lng: lng,
			rad: 20 //20 km a la redonda
		}).then((value: any[]) => {
			this.mapProvider.setMarkers(value);
			this.loadMarkers();
		})
	}

	getPosition(): void {
		if (this.mapProvider.userPosition == null) {
			this.map.getMyLocation()
				.then(response => {
					this.map.moveCamera({
						target: response.latLng,
						zoom: 14,
						bearing: 0,
						tilt: 0,
						duration: 1000,
					}).then(() => {
						this.loading.dismiss()
					});
					this.mapProvider.userPosition = response.latLng;
					this.map.addMarker({
						title: 'Mi ubicación.',
						icon: 'red',
						animation: 'DROP',
						position: response.latLng
					});

				})
				.catch(error => {
					this.loading.dismiss();
					this.navCtrl.setRoot("HomePage");
					this.errorProvider.obj.message = 'Por favor, permita el acceso a su ubicación';
					this.errorProvider.presentModal();
				});
		} else {
			this.map.addMarker({
				title: 'Mi ubicación.',
				icon: 'red',
				animation: 'DROP',
				position: this.mapProvider.userPosition
			});
			this.loading.dismiss()
		}
	}
}
