import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

/**
 * Generated class for the SecurityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityPage {


  private usuario: any = null;
  updateInfo: string;
  public infoPhone: any = {
    flag: null,
    type: null,
    value: null,
    country_code: null
  };
  public valueMail: any = {
    value: null,
    type: null,
  };
  public response_verify: any = {
    id: null,
    is_mail_verify: null,
    mail_code: null,
    phone_code: null,
    country_id: null,
  };
  public codigoSend: any = {
    phone_code: null,
    mail_code: null,
  };

  public codeVerify = null;
  public codeVerifyMail = null;
  public type = 'password';
  public showPass = false;
  public type2 = 'password';
  public showPass2 = false;
  public isphone = true;
  public ismail = false;
  private password: any = {
    old_password: null,
    new_password: null,
    new_password_conf: null,
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modal: ModalController,
              public loadingCtrl: LoadingController,
              private api: Api,
              private userProvider: AuthUserProvider,
              public toastCtrl: ToastController,
              public errorProvider: ModalErrorProvider,
  ) {
  }

  ionViewWillEnter() {
    this.updateInfo = "celular";
  }

  selectcountry() {
    let modal = this.modal.create('SelectCodePage');
    modal.present();
    modal.onDidDismiss(data => {
      if (data !== undefined) {
        this.infoPhone.country_code = data.code;
        this.infoPhone.flag = data.flag;
      }
    });
  }

  verifyCode() {
    if (this.response_verify.phone_code === this.codeVerify) {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
      });
      this.api.get('account/confirm-verify', this.userProvider, {
        id: this.response_verify.id,
        type: 'phone',
      }).then((data: any) => {
        this.errorProvider.obj.message = 'Información actualizada correctamente';

        this.usuario.phone = data.phone;
        loading.dismiss();
        this.errorProvider.presentModal();
        this.userProvider.user_Info.phone = this.infoPhone.value;
        this.userProvider.setUser(this.userProvider.user_Info);
        this.usuario = this.userProvider.user_Info;
        this.clearVar();
      }).catch((error) => {
        let mensaje = '';
        error.error.forEach(data => {
          mensaje += data.message;
        });
        loading.dismiss();
        this.errorProvider.obj.message = mensaje;
        this.errorProvider.presentModal();

      });
    } else {
      this.errorProvider.obj.message = 'Código incorrecto';
      this.errorProvider.presentModal();

    }
  }

  showPassword2() {
    this.showPass2 = !this.showPass2;
    if (this.showPass2) {
      this.type2 = 'text';
    } else {
      this.type2 = 'password';
    }
  }

  changePhone() {
    if (this.infoPhone.country_code != null && this.infoPhone.value != null) {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
      });
      loading.present();
      this.infoPhone.type = "phone";
      this.infoPhone.value = this.infoPhone.country_code + this.infoPhone.value;
      this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(
        (data: any) => {
          this.errorProvider.obj.message = 'Se ha enviado un código de verificación al número celular.';
          loading.dismiss();
          this.errorProvider.presentModal();
          this.response_verify = data;
          this.codigoSend.phone_code = this.response_verify.phone_code;
          this.codigoSend.mail_code = null;
          console.log('email', this.codigoSend.mail_code)
        }
      ).catch(error => {
        let mensaje = '';
        error.error.forEach(data => {
          mensaje += data.message + "\n";
        });
        loading.dismiss();
        this.errorProvider.obj.message = mensaje;
        this.errorProvider.presentModal();

      });
    } else {
      this.errorProvider.obj.message = 'Por favor seleccione el país e ingrese su nuemo número celular';
      this.errorProvider.presentModal();

    }
  }

  verifyCodeMail() {
    if (this.response_verify.mail_code === this.codeVerifyMail) {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
      });
      loading.present();
      this.api.get('account/confirm-verify', this.userProvider, {
        id: this.response_verify.id,
        type: 'mail',
      }).then((data: any) => {
        this.errorProvider.obj.message = 'Informacion actualizada correctamente';

        loading.dismiss();
        console.log(data);
        this.usuario.mail = data.mail;
        this.clearVar();
        this.errorProvider.presentModal();
        // toast.present();
      }).catch(error => {
        let mensaje = '';
        error.error.forEach(data => {
          mensaje += data.message + "\n";
        });
        this.errorProvider.obj.message = mensaje;
        loading.dismiss();
        this.errorProvider.presentModal();
      });
    } else {
      this.errorProvider.obj.message = 'Los códigos de verificación no coinciden';
      this.errorProvider.presentModal();

    }
  }

  changeMail() {
    if (this.valueMail.value != null && this.valueMail.value != '') {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
      });
      console.log('mail', this.valueMail);

      console.log('phone', this.infoPhone.value);
      this.errorProvider.obj.message = 'Se ha enviado un correo electrónico de verificacioón a su direccioón e-mail';
      this.infoPhone.value = null;
      loading.present();
      this.valueMail.type = 'mail';

      this.api.post('account/update-contact', this.valueMail, this.userProvider).then((data: any) => {
        loading.dismiss();
        this.errorProvider.presentModal();
        console.log(data);
        this.response_verify = data;
        this.codigoSend.phone_code = null;
        this.codigoSend.mail_code = this.response_verify.mail_code;
        console.log('code phone', this.codigoSend.phone_code)
      }).catch(error => {
        let mensaje = '';
        error.error.forEach(data => {
          mensaje += data.message + "\n";
        });
        this.errorProvider.obj.message = mensaje;

        loading.dismiss();
        this.errorProvider.presentModal();
      });
    } else {
      this.errorProvider.obj.message = 'Por favor ingrese una direccioón e-mail';
      this.errorProvider.presentModal();

    }
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }


  actualizarPass() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots'
    });
    loading.present();
    this.api.post('account/update-password', this.password, this.userProvider).then((data: any) => {
      this.errorProvider.obj.message = 'Información actualizada correctamente';
      loading.dismiss();
      this.errorProvider.presentModal();
      this.password.new_password = null;
      this.password.new_password_conf = null;
      this.password.old_password = null;

    }).catch(error => {
      loading.dismiss();
      let mensaje = "";
      error.error.forEach(data => {
        mensaje += data.message + "\n";
      });
      this.errorProvider.obj.message = mensaje;
      this.errorProvider.presentModal();
    });
  }

  clearVar() {
    this.isphone = true;
    this.ismail = false;
    this.infoPhone = {
      flag: null,
      type: null,
      value: null,
      country_code: null
    };
    this.response_verify = {
      id: null,
      is_mail_verify: null,
      mail_code: null,
      phone_code: null,
      country_id: null,
    };
    this.codeVerify = null;
    this.codeVerifyMail = null;
  }


}
