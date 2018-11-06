import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ToastOptions} from 'ionic-angular';
import {Clipboard} from "@ionic-native/clipboard";


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
  toastOp: ToastOptions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private clipboard: Clipboard,
    private toastCtrl: ToastController
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
    // this.navCtrl.push("MapPage");
    this.navCtrl.setPages([
      {page: 'HomePage'},
      {page: 'MapPage'},
     ]);
  }
  copiarToken(){
    this.clipboard.copy(this.coinhas.eye_hash);
    const toast = this.toastCtrl.create({
      message: 'Copiado',
      duration: 3000,
      position: 'middle'
      //showCloseButton: true,
      //closeButtonText: OK
    });
    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }

  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }

}