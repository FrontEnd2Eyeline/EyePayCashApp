import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegNumberPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg-number-phone',
  templateUrl: 'reg-number-phone.html',
})
export class RegNumberPhonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegNumberPhonePage');
  }
  navCancel2() {
    this.navCtrl.push('HomePage')
  }

  navPinLockPage(){
    this.navCtrl.push('PinlockPage')
  }

  navRegisterPage(){
    this.navCtrl.push('RegisterPage')
  }
}
