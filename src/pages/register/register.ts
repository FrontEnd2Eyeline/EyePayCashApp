import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

//  Alerta ragistro
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Registro',
      subTitle: 'Correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // Navegación
  navCancel() {
    this.navCtrl.pop();
  }

  navRegister() {
    this.navCtrl.pop();
  }
}
