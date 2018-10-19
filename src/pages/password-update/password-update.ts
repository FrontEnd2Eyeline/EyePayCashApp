import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";

/**
 * Generated class for the PasswordUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-update',
  templateUrl: 'password-update.html',
})
export class PasswordUpdatePage {

  public infoRecovery: any = {
    new_password: null,
    new_password_conf: null,
    reset_id: null,
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private api: Api,
              public toastCtrl: ToastController,
              private userProvider: AuthUserProvider,
              public loadingCtrl: LoadingController,
  ) {
    this.infoRecovery.reset_id = navParams.get('reset_id');
  }

  recovery() {
    if (this.infoRecovery.new_password != null && this.infoRecovery.new_password_conf != null) {
      if (this.infoRecovery.new_password_conf == this.infoRecovery.new_password) {
        if (this.infoRecovery.new_password.length >= 6 && this.infoRecovery.new_password_conf.length >= 6) {
          let loading = this.loadingCtrl.create({
            spinner: 'dots',
          });
          loading.present();
          this.api.post('auth/update-password', this.infoRecovery).then((data) => {

            loading.dismiss();
            let toast = this.toastCtrl.create({
              message: 'Contraseña actualizada correctamente.',
              showCloseButton: true,
              closeButtonText: 'cerrar',
              position: 'middle',
            });
            toast.present();
            this.navCtrl.setRoot('LoginPage');
          }).catch((error) => {
            let mensaje = '';
            loading.dismiss();
            error.error.forEach(data => {
              mensaje += data.message + "\n";
            });
            let toast = this.toastCtrl.create({
              message: mensaje,
              closeButtonText: 'cerrar',
              showCloseButton: true,
            });
            toast.present();
          });
        } else {
          let toast = this.toastCtrl.create({
            message: 'La constraseña debe tener mínimo 6 caracteres.'
          });
          toast.present();
        }
      } else {
        let toast = this.toastCtrl.create({
          message: 'Las contraseñas no coinciden.',
          showCloseButton: true,
          closeButtonText: 'cerrar',
          position: 'middle',
        });
        toast.present();
      }
    } else {
      let toast = this.toastCtrl.create({
        message: 'Los datos son obligatorios.',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle',
      });
      toast.present();
    }
  }


}
