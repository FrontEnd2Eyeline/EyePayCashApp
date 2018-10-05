import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {RegNumberPhonePage} from "../reg-number-phone/reg-number-phone";
import {RecoveryPasswordPage} from "../recovery-password/recovery-password";
import {HomePage} from "../home/home";
import {ModalWelcomePage} from "../modal-welcome/modal-welcome";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public mail = null;
  public password = null;
  imagen = 'assets/backgrounds/Background1.png';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private userProvider: AuthUserProvider,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,) {
  }

  login() {
    let cargando = this.loadingCtrl.create({
      spinner: 'dots',
      duration: 3000,
    });
    cargando.present();
    if (this.mail != null && this.password != null) {
      this.userProvider.login(this.mail, this.password)
        .then((data: any) => {
          if (data.success == 'ok') {
            this.navCtrl.setRoot(HomePage);
            cargando.dismiss();
          } else {
            cargando.dismiss();
          }
        }).catch((data)=>{

      });
    } else {
      cargando.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Todos los datos son requeridos',
        duration: 3000,
      });
      toast.present();
    }
  }

  recuperarcontrasena() {
    const modal = this.modalCtrl.create(RecoveryPasswordPage);
    modal.present();
  }


  registro() {
    this.navCtrl.push(RegNumberPhonePage)
  }

}