import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from "ionic-angular";

@IonicPage({
  name: "HomePage",
  segment: "app"
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
  ) {

  }

  goPage(page) {
    if (page == 'account')
      this.navCtrl.push("AccountPage");
    else if (page == 'history')
      this.navCtrl.push("HistoryPage");
    else if(page=="maps")
      this.navCtrl.push("MapPage");
    else
      this.navCtrl.push("TransactionPage");
  }


}
