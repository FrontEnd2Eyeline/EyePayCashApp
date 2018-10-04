import {Component} from '@angular/core';
import {LoadingController, NavController, ToastController} from "ionic-angular";
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {AccountPage} from "../account/account";
import {HistoryPage} from "../history/history";
import {TransactionPage} from "../transaction/transaction";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,
              private api: Api,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private userProvider: AuthUserProvider,
  ) {

  }

  goPage(page) {
    if (page == 'account')
      this.navCtrl.push(AccountPage);
    else if (page == 'history')
      this.navCtrl.push(HistoryPage);
    else
      this.navCtrl.push(TransactionPage);
  }


}
