import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';

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
  private qrlink:any = null;

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
    this.coinhas = parametros.coinhash;
    this.coin = parametros.coin;
    this.country = parametros.country;
    this.qrlink = parametros.qrlink;
    console.log(this.coin);
    console.log(this.coinhas);

  }
}