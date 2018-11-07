import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
		) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfilePage');
	}

	goPage(page) {
		if (page == 'profile')
			//this.navCtrl.push("ProfilePage");
			this.navCtrl.setPages([{page: 'HomePage'}, {page: 'ProfilePage'}]);
		else if (page == 'history')
			//this.navCtrl.push("HistoryPage");
			this.navCtrl.setPages([{page: 'HomePage'}, {page: 'HistoryPage'}]);
		else if(page=="maps")
			//this.navCtrl.push("MapPage");
			this.navCtrl.setPages([{page:'HomePage'}, {page:'MapPage'}]);
		else if(page =="contact")
			//this.navCtrl.push("ContactsPage");
			this.navCtrl.setPages([{page:'HomePage'}, {page: 'ContactsPage'}]);
		else if (page =="security")
			//this.navCtrl.push("SecurityPage");
			this.navCtrl.setPages([{page: 'HomePage'}, {page: 'SecurityPage'}]);	
		else if (page == "account")
			//this.navCtrl.push("AccountPage");
			this.navCtrl.setPages([{page: 'HomePage'}, {page: 'AccountPage'}]);
		else if (page =="HomePage")
			this.navCtrl.setRoot('HomePage');
		else
			//this.navCtrl.push("TransactionPage");
			this.navCtrl.setPages([{page: 'HomePage'}, {page: 'TransactionPage'}]);
	  }

}
