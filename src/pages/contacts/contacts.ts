import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Contacts } from "@ionic-native/contacts";
import { SocialSharingProvider } from '../../providers/social-sharing/social-sharing';
import { request } from 'http';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-contacts',
	templateUrl: 'contacts.html',
})
export class ContactsPage {
	listaContactos: any[] = [];
	avatar: string = "./assets/icon/avatar.png";

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public contacts: Contacts,
		public loadingCtrl: LoadingController,
		public socialSharing: SocialSharingProvider) {
		this.cargarListaContactos();
	}

	cargarListaContactos() {
		let loading = this.loadingCtrl.create({
			spinner: 'hide',
			content: "<img src='assets/imgs/buho.png'>",
		});
		loading.present();
		this.contacts.find(["*"])
			.then(data => {
				let datosMostar: any[] = [];
				data.map((item) => {
					if (item.displayName != null && item.phoneNumbers != null) {
						let indicative = item.phoneNumbers[0].value.toString().substring(0, 1);
						console.log('indicativo', indicative)
						console.log('items', item)
						if (indicative == "+") {
							datosMostar.push({
								displayName: item.displayName,
								phoneNumbers: item.phoneNumbers,
							})
						}
					}
					loading.dismiss();
				});
				this.listaContactos = datosMostar;
			}, error => {
				console.log({ error: error });
				loading.dismiss();
			})
	}

	sharing() {
		this.socialSharing.socialShare();
	}

	whatsAppInvite(phoneNumbers){
		
		this.socialSharing.whatsAppShare(phoneNumbers);
	}

}
