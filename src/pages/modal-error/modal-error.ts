import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { ModalErrorProvider } from '../../providers/modal-error/modal-error';

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
public cambiarfoto = false;
public obj : any = {field:null, icon:null, message:null};
  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams,
    public viewControll: ViewController,
    public modalError: ModalErrorProvider) {
  }

  ionViewDidLoad() {
	 this.obj = this.navParams.get('Error');
  }

  closeModal() {
    this.modalError.cambiarFoto = false;
	  this.viewControll.dismiss();
  }

}
