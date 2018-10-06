import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-transaction',
  templateUrl: 'modal-transaction.html',
})
export class ModalTransactionPage {

  public moneda:any = null;
  public userCountry:any = null;
  public transaction:any = {
    cantidad:null,
    telefono:null,
    clave:null,
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              ) {
  }

  ionViewWillLoad(){
    this.userCountry = this.navParams.get('userCountry');
    this.moneda  = this.navParams.get('moneda');
    console.log(this.moneda);
    console.log(this.userCountry);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }



}
