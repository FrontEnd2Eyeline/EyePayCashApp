import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {HistoryResumePage} from "../history-resume/history-resume";

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
    page: null,
    perpage: null
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              public userProvider: AuthUserProvider,
  ) {

    this.getInfo();
  }

  getInfo() {
    this.api.get('app/transactions',
      this.userProvider,
      {'expand':'country,coin,commissions','status':this.filtro.status,'page':this.filtro.page,'per-page':this.filtro.perpage}).then((data: any) => {
      this.transactions = data.items;
      this.links = data.links;
      this.meta = data.meta;
      console.log(data);
    });
  }

  goDetalle(transaction){
    console.log(transaction);
    this.navCtrl.push(HistoryResumePage);
  }
}
