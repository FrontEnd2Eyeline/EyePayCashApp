import { Component } from '@angular/core';
import { IonicPage, LoadingController, MenuController, NavController, ToastController } from "ionic-angular";
import { Api } from "../../providers/api";
import { AuthUserProvider } from "../../providers/auth-user/auth-user";
import { NetworkProvider } from '../../providers/network/network';

@IonicPage({
	name: "HomePage",
	segment: "app"
})

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

	buttonDisabbled: any;
	public count = 0;
	public result = [];

	constructor(public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public toastCtrl: ToastController,
		private api: Api,
		private userProvider: AuthUserProvider,
		public menuCtrl: MenuController,
		public networkProvider: NetworkProvider
	) {


	}
	ionViewWillEnter() {
		this.menuCtrl.enable(true);
		this.getInfo();
=======

  public count = 0;
  public result = [];

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private api: Api,
              private userProvider:AuthUserProvider,
              public menuCtrl : MenuController,
  ) {

  }
  ionViewWillEnter(){
    this.menuCtrl.enable(true);
    this.getInfo();
  }
  getInfo(){
    this.api.get('app/transactions',
      this.userProvider,{ 'status': 0 }).then((data:any)=>{
        this.count = data.items.length;
    }).catch(error=>{
    });
  }

  goPage(page) {
    if (page == 'profile')
      //this.navCtrl.push("ProfilePage");
      this.navCtrl.setPages([{page:'HomePage'},{page:'ProfilePage'}]);
    else if (page == 'history')
      //this.navCtrl.push("HistoryPage");
      this.navCtrl.setPages([{page:'HomePage'},{page:'HistoryPage'}]);
    else if(page=="maps")
      //this.navCtrl.push("MapPage");
      this.navCtrl.setPages([{page:'HomePage'}, {page:'MapPage'}]);
    else if(page =="contact")
      //this.navCtrl.push("ContactsPage");
      this.navCtrl.setPages([{page:'HomePage'}, {page:'ContactsPage'}]);
    else if(page =="precios")
      //this.navCtrl.push("CoinsPage")
      this.navCtrl.setPages([{page:'HomePage'}, {page:'CoinsPage'}]);
    else
      //this.navCtrl.push("TransactionPage");
      this.navCtrl.setPages([{page:'HomePage'}, {page: 'TransactionPage'}]);
      
  }

>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6

	}
	getInfo() {
		this.api.get('app/transactions',
			this.userProvider, { 'status': 0 }).then((data: any) => {
				this.count = data.items.length;
			}).catch(error => {
			});
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
}
