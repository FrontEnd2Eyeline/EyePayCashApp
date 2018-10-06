import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {ModalTransactionPage} from "../modal-transaction/modal-transaction";

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  public countrys: any = [];
  public currency = null;
  public infoCountry:any = null;
  public monedas:any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private api:Api,
              private userProvider:AuthUserProvider,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {
    this.getInfo();
  }

  getInfo(){
    this.currency = this.userProvider.user_Country.currency;
    this.countrySelected();
    this.api.get('app/get-countries').then((data:any)=>{
      this.countrys = data;
    }).catch();
  }

  countrySelected(){
      this.api.get('app/get-prices',this.userProvider,{
        currency_code:this.currency,
      }).then((data:any)=>{
        this.infoCountry = data;
        console.log(this.infoCountry);
        this.monedas = this.infoCountry.coins;
        console.log(this.monedas);
      })
  }

  monedaSelect(moneda){
    let modalTransaction = this.modalCtrl.create(ModalTransactionPage,{
      'moneda':moneda,
      'userCountry':this.userProvider.user_Country,
    });
    modalTransaction.present();
    modalTransaction.onDidDismiss((data:any)=>{

    });
  }




}
