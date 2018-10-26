import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ModalWelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-welcome',
  templateUrl: 'modal-welcome.html',
})
export class ModalWelcomePage {

  public name = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
  ) {
    this.getInfo();
  }

  public getInfo() {
    this.name = this.navParams.get('name');
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
