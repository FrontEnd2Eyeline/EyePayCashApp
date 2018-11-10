import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {LoadInformationProvider} from "../../providers/load-information/load-information";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';
import {isArray} from "ionic-angular/util/util";

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
    private userProvider: AuthUserProvider,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private informationProvider: LoadInformationProvider,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public errorProvider: ModalErrorProvider,
  ) {
    this.currency = this.userProvider.user_Country.currency;
    this.getInfo();
    this.countrySelected();
  }

  getInfo() {

    let loading = this.loadingCtrl.create({
        spinner: 'crescent',
		cssClass: 'my-loading',
      });
    loading.present();
    this.informationProvider.getCountries()
      .then(value => {
        this.countrys = value;
        loading.dismiss();
      }).catch(error => {
      console.log(error);
      loading.dismiss();
    });

  }

  countrySelected() {
    this.informationProvider.getCurrencies(this.currency)
      .then((value: any) => {
        this.infoCountry = value;
        this.monedas = value.coins;
      }).catch(error => {
      console.log(error);
    });
  }

  monedaSelect(moneda) {
    let info = this.informationProvider.getCountriesID(this.currency);
    this.navCtrl.push('ModalTransactionPage', {
      'moneda': moneda,
      'infoCountry': this.infoCountry,
      'currency': this.currency,
      'pais_id': info.id,
      'code_phohe': info.phone_code,
      country: info
    });
  }


}
