import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from "ionic-angular";
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";

@IonicPage({
	name: "HomePage",
	segment: "app"
})

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

  public count = 0;
  public result = [];

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private api: Api,
              private userProvider:AuthUserProvider,
  ) {

  }
  ionViewWillEnter(){
    this.getInfo();
  }
  getInfo(){
    this.api.get('app/transactions',
      this.userProvider,{ 'status': 0 }).then((data:any)=>{
        this.count = data.items.length;
    }).catch(error=>{
      console.log(error);
    });
  }

  goPage(page) {
    if (page == 'account')
      this.navCtrl.push("AccountPage");
    else if (page == 'history')
      this.navCtrl.push("HistoryPage");
    else if(page=="maps")
      this.navCtrl.push("MapPage");
    else if(page =="contact")
      this.navCtrl.push("ContactsPage");
    else
      this.navCtrl.push("TransactionPage");
  }


}
