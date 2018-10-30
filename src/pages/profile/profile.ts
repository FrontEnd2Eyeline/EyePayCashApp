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
		  this.navCtrl.push("ProfilePage");
		else if (page == 'history')
		  this.navCtrl.push("HistoryPage");
		else if(page=="maps")
		  this.navCtrl.push("MapPage");
		else if(page =="contact")
		  this.navCtrl.push("ContactsPage");
		  else if (page =="security")
		  this.navCtrl.push("SecurityPage");
		else
		  this.navCtrl.push("TransactionPage");
	  }

}
