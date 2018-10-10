import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-transaction-resume',
  templateUrl: 'transaction-resume.html',
})
export class TransactionResumePage {

  private result: any = null;
  private transaction: any = null;
  private coinhas: any = null;
  private coin: any = null;
  private country: any = null;
  private qrlink: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) {
    this.getIngfo();
  }

  getIngfo() {
    // Toda el response de la transacción
    let parametros = this.navParams.data;

    this.result = parametros.result;
    this.coin = parametros.coin;
    this.country = parametros.country;
    this.transaction = parametros.transaction;
    this.coinhas = parametros.coinhash;
    this.qrlink = parametros.qrlink;
  }

  goMaps(){
    this.navCtrl.push('MapPage');
  }

}