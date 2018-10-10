import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {LoadInformationProvider} from "../../providers/load-information/load-information";

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
  public infoCountry: any = null;
  public monedas: any = [];


  constructor(
    public navParams: NavParams,
    private api: Api,
    private userProvider: AuthUserProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private informationProvider: LoadInformationProvider) {
    this.currency = this.userProvider.user_Country.currency;
    this.getInfo();
    this.countrySelected();
  }

  getInfo() {
    this.informationProvider.getCountries()
      .then(value => {
        this.countrys = value;
      });

  }

  countrySelected() {
    this.informationProvider.getCurrencies(this.currency)
      .then((value: any) => {
        this.infoCountry = value;
        this.monedas = value.coins;
      })
  }

  monedaSelect(moneda) {
    let modalTransaction = this.modalCtrl.create('ModalTransactionPage', {
      'moneda': moneda,
      'infoCountry': this.infoCountry,
      'currency':this.currency,
       'pais_id':this.informationProvider.getCountriesID(this.currency)
    });
    modalTransaction.present();
    modalTransaction.onDidDismiss((data: any) => {

    });
  }


}
