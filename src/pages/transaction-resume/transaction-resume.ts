import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {getInjectDeepLinkConfigTypescriptTransform} from "@ionic/app-scripts/dist/deep-linking/util";

/**
 * Generated class for the TransactionResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-resume',
  templateUrl: 'transaction-resume.html',
})
export class TransactionResumePage {

  private result: any = null;
  private transaction: any = null;
  private coinhas: any = null;
  private coin:any=null;
  private country:any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
  ) {
    this.getIngfo();
  }

  getIngfo() {
    let parametros = this.navParams.data;
    this.result = parametros.result;
    this.transaction = parametros.transaction;
    this.coinhas = parametros.coinhas;
    this.coin = parametros.coin;
    this.country = parametros.country;
  }


}


// "coin": {
//   "id": 1,
//     "full_name": "Bitcoin",
//     "short_name": "BTC",
//     "usd_value": "6575.4200",
//     "date_update": "2018-10-05 11:31:14",
//     "is_active": 1
// },
// "transaction": {
//   "user_id": 4,
//     "phone_user_des": "320347659",
//     "country_id": "1",
//     "amount_local": 200000,
//     "coin_id": "1",
//     "key_eyecash": "6555",
//     "date_request": "2018-10-05 21:42:42",
//     "key_request": "8448465643098825",
//     "amount_usd": "65.95",
//     "amount_btc": "0.01010582"
// },
// "coinhash": {
//   "id": 1,
//     "coin_id": 1,
//     "country_id": null,
//     "eye_hash": "1JZ7D5sDEibvz7gA1qyu3gMtjXtef1B993"
// },
// "qrlink": "http://10.160.170.115/eyepaycash/frontend/web/qr/1.png"