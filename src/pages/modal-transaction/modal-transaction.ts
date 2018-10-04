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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              ) {
  }

  ionViewWillLoad(){
    
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
