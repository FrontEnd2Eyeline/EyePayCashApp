import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-history',
	templateUrl: 'history.html',
})
export class HistoryPage {

	public transactions: any = null;
	public links: any = null;
	public meta: any = null;

	public filtro: any = {
		status: 0,
		page: 1,
		perpage: 50
	};

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		protected api: Api,
		protected userProvider: AuthUserProvider,
		public loadingCtrl: LoadingController,
		public toastCtrl: ToastController,
		public errorProvider: ModalErrorProvider
	) {

		this.getInfo();
	}

	getInfo() {
		let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: "<img src='assets/imgs/buho.png'>",
		});
		loading.present();
		this.api.get('app/transactions',
			this.userProvider,
			{
				'expand': 'country,coin,transactionCommission,coinHash',
				'status': this.filtro.status,
				'page': this.filtro.page,
				'per-page': this.filtro.perpage
			}).then((data: any) => {
				loading.dismiss();
				this.transactions = data.items;
				this.links = data.links;
				this.meta = data.meta;
			}).catch(error => {
				loading.dismiss();
				let mensaje = '';
				error.error.forEach(data => {
					mensaje += data.message + "\n";
				});
				this.errorProvider.obj.message = mensaje;
				this.errorProvider.presentModal();
			});
	}

	goDetalle(transaction) {
		this.navCtrl.push('HistoryResumePage', { 'transaction': transaction });
		//this.navCtrl.setPages([{page: 'HistoryResume'}, {page: 'Transaction'}]);
	}

	getDateLocale(tr) {
		let date = new Date(Date.parse(tr));
		date.setUTCDate(0);
		date.setUTCDate(date.getDate());
		return date
	}

	goPage(page) {
<<<<<<< HEAD
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
=======
		if (page == 'profile')
		  //this.navCtrl.push("ProfilePage");
		  this.navCtrl.setPages([{page: 'HomePage'}, {page: 'ProfilePage'}]);
		else if (page == 'history')
		  //this.navCtrl.push("HistoryPage");
		  this.navCtrl.setPages([{page: 'HomePage'}, {page: 'HistoryPage'}]);
		else if(page=="maps")
		  //this.navCtrl.push("MapPage");
		  this.navCtrl.setPages([{page: 'HomePage'}, {page: 'MapPage'}]);
		else if(page =="contact")
		  //this.navCtrl.push("ContactsPage");
		  this.navCtrl.setPages([{page: 'HomePage'}, {page: 'ContactsPage'}]);
		else
		  //this.navCtrl.push("TransactionPage");
		  this.navCtrl.setPages([{page: 'HomePage'}, {page: 'TransactionPage'}]);
	  }
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
}
