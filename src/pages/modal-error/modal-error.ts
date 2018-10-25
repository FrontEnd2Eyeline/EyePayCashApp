import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-error',
  templateUrl: 'modal-error.html',
})
export class ModalErrorPage {
public obj : any = {field:null, message:null};
  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams,
	  public viewControll: ViewController) {
  }

  ionViewDidLoad() {
	 this.obj = this.navParams.get('Error');
    console.log(this.obj);
  }

  closeModal() {
	  this.viewControll.dismiss();
  }

}
