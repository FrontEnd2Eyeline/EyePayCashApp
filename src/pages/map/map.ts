import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, LatLng} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {mapStyle} from "../../app/mapStyle";

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
  markers: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public api: Api,
    public user: AuthUserProvider) {
    this.loadMap();
  }

  ionViewDidLoad() {
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 1.178720,
          lng: -77.313249
        },
        zoom: 5,
        tilt: 0,
        bearing: 0
      },
      styles: mapStyle
    };

    this.map = GoogleMaps.create('map', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.getPosition();
      })
      .catch(error => {
        console.log(error);
      });
    this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(value => {
      let mapStop = value[0];
      if (mapStop.zoom >= 5) {
        this.loadPoints(mapStop.target.lat, mapStop.target.lng);
      }
    })
  }

  loadPoints(lat, lng) {
    this.api.get('app/find-map', this.user, {
      lat: lat,
      lng: lng,
      rad: 20 //20 km a la redonda
    }).then((value: any[]) => {
      console.log(value);
      value.forEach((item: any) => {
        if (this.markers.indexOf(item.id) < 0)
          this.map.addMarker({
            title: item.company_name + " \n " + item.address,
            icon: 'blue',
            animation: 'DROP',
            position: new LatLng(item.lat, item.lng)
          }).catch((erro) => {
            console.log(erro)
          })
            .then(value1 => console.log(value1));
        this.markers.push(item.id);
      })
    })
  }

  getPosition(): void {
    this.map.getMyLocation()
      .then(response => {
        console.log(response);
        this.map.moveCamera({
          target: response.latLng,
          zoom: 14,
          bearing: 0,
          tilt: 0,
          duration: 1000,
        });
        this.map.addMarker({
          title: 'My Position',
          icon: 'red',
          animation: 'DROP',
          position: response.latLng
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
