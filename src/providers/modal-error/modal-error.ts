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
public obj: any = {field:null, message:null};
  constructor(public http: HttpClient,
			  public modalCtrl: ModalController) {
			
		
    
  }

 
 

  presentModal(){
	let modalPresent = this.modalCtrl.create('ModalErrorPage', {
		'Error':this.obj
	 });
   
	 modalPresent.present();
  }

}
