import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

<<<<<<< HEAD
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
    this.api.get('app/transactions?expand=country', this.userProvider, this.filtro).then((data: any) => {
      this.transactions = data.items;
      this.links = data.links;
      this.meta = data.meta;
      console.log(data);
    });
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
>>>>>>> 3189ca2b777b789f6f29af1862d9597644099d61
  }

}
