import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";

/**
 * Generated class for the RecoveryPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recovery-password',
  templateUrl: 'recovery-password.html',
})
export class RecoveryPasswordPage {

  public data = null;
  public type = 'phone';
  public isvisible = true;
  public codigo = null;
  public iscodigo = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private api: Api,
              public toastCtrl: ToastController,
              private userProvider: AuthUserProvider,
              public loadingCtrl: LoadingController) {
  }

  sendMessage() {
    this.type = 'phone';
    if (this.data != null) {
      let loading = this.loadingCtrl.create({
        spinner:'dots'
      });
      loading.present();
      this.api.post('auth/restar-password', {'type': this.type, 'data': this.data}).then(
        (data) => {
          loading.dismiss();
          if (!this.iscodigo)
            this.iscodigo = true;
          else
            this.iscodigo = false;
          this.userProvider.userRecovery.codigoVerify = data.password_code_req;
          this.userProvider.userRecovery.user_id = data.user_id;
        }
      ).catch(err => {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: 'No se encontraron resultados',
          duration: 3000,
        });
        toast.present();
      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'Por favor ingrese su nùmero celular',
        duration: 3000
      });
      toast.present();
    }
  }

// 3114276555
  sendMail() {
    this.type = 'mail';
    if (this.data != null) {
      let loading = this.loadingCtrl.create({
        spinner:'dots'
      });
      loading.present();
      this.api.post('auth/restar-password',{'type':this.type, 'data':this.data}).then((data:any)=>{
        loading.dismiss();
        console.log(data);
        if (!this.iscodigo)
          this.iscodigo = true;
        else
          this.iscodigo = false;
        this.userProvider.userRecovery.codigoVerify = data.password_code_req;
        this.userProvider.userRecovery.user_id = data.user_id;

      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'Por favor ingrese su direcciòn email',
        duration: 3000
      });
      toast.present();
    }
  }

  changeVisible() {
    if (this.isvisible)
      this.isvisible = false;
    else
      this.isvisible = true;
  }

  cancelar() {
    this.navCtrl.pop();
  }

  confirmCode() {
    if (this.codigo != null) {
      if(this.userProvider.userRecovery.codigoVerify == this.codigo){
        this.navCtrl.push('PasswordUpdatePage');
      }else{
        let toast = this.toastCtrl.create({
          message: 'El còdigo ingresado no coincide!',
          duration: 3000
        });
        toast.present();
      }
    } else {
      let toast = this.toastCtrl.create({
        message: 'Por favor ingrese el còdigo de verificaciòn',
        duration: 3000
      });
      toast.present();
    }
  }

}
