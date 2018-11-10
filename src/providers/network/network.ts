import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, Events, ToastController } from 'ionic-angular';
import { Network } from "@ionic-native/network";
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class NetworkProvider {

	connected : Subscription;
	disconnected: Subscription;
	buttonDisabled: any = false;

	constructor(
		public http: HttpClient,
		public network: Network,
		public eventCtrl: Events,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController,
	) {

		this.networkState();
		// stop connect watch
		this.connected.unsubscribe();
		this.disconnected.unsubscribe();

	}



	displayNetworkUpdate(connectionState: String) {
		let networkType = this.network.type;
		if(this.network.type != 'none'){
			this.buttonDisabled = false;
			this.toastCtrl.create({
				message: `You are now ${connectionState} via ${networkType}`,
				duration: 3000
			}).present();
		}else{
			this.buttonDisabled = true;
			this.toastCtrl.create({
				message: 'no connection, please, turn on your connection internet',
				showCloseButton : true,
			}).present();
		}
		
		
	}

	
	networkState() {
		this.connected = this.network.onConnect().subscribe(data => {
			console.log('conectado', data);
			this.displayNetworkUpdate(data.type);
		}, error => console.error(error));



		this.disconnected = this.network.onDisconnect().subscribe(data => {
			console.log('no conectado', data);
			this.displayNetworkUpdate(data.type);
			setTimeout(() => {
				console.log('conexion')
			}, 3000);
		}, error => console.error(error));
	}

}
