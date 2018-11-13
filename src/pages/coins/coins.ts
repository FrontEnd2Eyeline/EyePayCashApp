import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadInformationProvider } from '../../providers/load-information/load-information';
import { AuthUserProvider } from '../../providers/auth-user/auth-user';
import { NetworkProvider } from '../../providers/network/network';

/**
 * Generated class for the CoinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-coins',
	templateUrl: 'coins.html',
})
export class CoinsPage {

	public coins: any = null;
	public currency = null;
	public infoCountry: any = null;
	public monedas: any = [];
	public countrys: any = [];
	buttonDisabbled: any ;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public loadInfo: LoadInformationProvider,
		private userProvider: AuthUserProvider,
		public toastCtrl: ToastController,
		public networkProvider: NetworkProvider
	) {
		this.loadInfo.getCriptos().then((data) => {
			this.coins = data;
		}).catch();

		this.currency = this.userProvider.user_Country.currency;
		this.countryLocal();
	}



	goPage(page) {
		this.buttonDisabbled = this.networkProvider.buttonDisabled;
		if (this.buttonDisabbled != true) {
			if (page == 'profile')
				//this.navCtrl.push("ProfilePage");
				this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
			else if (page == 'home')
				//this.navCtrl.push("HistoryPage");
				this.navCtrl.setPages([{ page: 'HomePage' }]);
			else if (page == "maps")
				//this.navCtrl.push("MapPage");
				this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'MapPage' }]);
			else if (page == "contact")
				//this.navCtrl.push("ContactsPage");
				this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ContactsPage' }]);
			else if (page == "precios")
				//this.navCtrl.push("CoinsPage")
				this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'CoinsPage' }]);
			else
				//this.navCtrl.push("TransactionPage");
				this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);

		} else {
			this.toastCtrl.create({
				message: 'no connection, please, turn on your connection internet',
				showCloseButton: true,
			}).present();
		}
	}

	countryLocal() {
		this.loadInfo.getCurrencies(this.currency).then((data: any) => {
			this.infoCountry = data;
			this.monedas = data.coins;
		}).catch(error => {
			console.log(error);
		});
	}

	getInfo() {
		this.loadInfo.getCountries()
			.then(value => {
				this.countrys = value;

			}).catch(error => {
				console.log(error);

			});

	}


}
