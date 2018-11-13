import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ModalController} from 'ionic-angular';

/*
  Generated class for the ModalErrorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalErrorProvider {
public cambiarFoto = false;
public obj: any = {field:null, icon:null, message:null};
  constructor(public http: HttpClient,
			  public modalCtrl: ModalController) {
  }


  presentModal(){
 (this.cambiarFoto == false)?this.obj.icon = '../assets/imgs/error.png':this.obj.icon = "../assets/img/ok.png";
	let modalPresent = this.modalCtrl.create('ModalErrorPage', {
		'Error':this.obj
	 });
   
	 modalPresent.present();
  }

}
