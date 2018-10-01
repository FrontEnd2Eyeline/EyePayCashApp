import {Component} from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {Api} from "../../providers/api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mail = null;
  public password = null;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public userProvider: AuthUserProvider,
              public api: Api,
              public toastCtrl: ToastController) {

  }

  login() {
    let cargando = this.loadingCtrl.create({
      spinner: 'dots',
      duration: 3000,
      // dismissOnPageChange: true
    });
    cargando.present();
    if (this.mail != null && this.password != null) {
      this.userProvider.login(this.mail, this.password)
        .then((data: any) => {
          if (data.success == 'ok') {
            // aqui redirecciono si el login es correcto
            cargando.dismiss();
            let toast = this.toastCtrl.create({
              message: 'login success',
              duration: 3000,
            });
            toast.present();
          } else {
            cargando.dismiss();
          }
        });
    } else {
      let toast = this.toastCtrl.create({
        message: 'Todos los datos son requeridos',
        duration: 3000,
      });
      toast.present();
    }
  }

  recuperarcontrasena() {

  }


  registro() {
    this.navCtrl.push('RegisterPage')
  }

}
