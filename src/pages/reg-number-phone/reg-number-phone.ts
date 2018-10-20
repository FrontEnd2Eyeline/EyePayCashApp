import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {SelectCodePage} from "../select-code/select-code";
import {Api} from "../../providers/api";
import {GeolocationProvider} from "../../providers/geolocation/geolocation";
import {isArray} from "ionic-angular/util/util";

/**
 * Generated class for the RegNumberPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg-number-phone',
  templateUrl: 'reg-number-phone.html',
})
export class RegNumberPhonePage {

  public user_register: any = {
    country_code: '',
    flag: '',
    value: '',
  };
  public code_verify: number = null;
  public response_verify: any = {
    id: null,
    is_mail_verify: null,
    mail_code: null,
    phone_code: null,
    country_id: null,
  };
  public country;
  imagen = 'assets/backgrounds/Background2.png';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modal: ModalController,
              private api: Api,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public locationProvider: GeolocationProvider) {
    this.locationProvider.getBasicInfo().then((value: any) => {
      this.user_register.country_code = value.country_code;
      this.user_register.flag = value.flag;
      // this.user_register = Object.assign(value, this.user_register);
    })
  }


  cancel() {
    this.navCtrl.setRoot('LoginPage');
  }

  sendNumberPhone() {
    if ( (this.user_register.country_code != "") && (this.user_register.country_code != null)  && (this.user_register.value != "")) {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
      });
      let toast = this.toastCtrl.create({
        message: 'Se ha enviado un código de verificación al número celular ingresado.',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle',
      });
      loading.present();

      console.log('user register ',this.user_register);

      this.api.post('auth/pre-sign-up', {'value': this.user_register.value, 'type': 'phone','country_code':this.user_register.country_code}).then(
        (data: any) => {
          loading.dismiss();
          toast.present();
          console.log('la data ',data);
          this.response_verify = data.verify;
          this.response_verify.country_id = data.country.id;
          console.log('El response ',this.response_verify.phone_code);
        }
      ).catch(error => {
        let mensaje = "";
        loading.dismiss();
        if (isArray(error.error))
          error.error.forEach(data => {
            mensaje += data.message + "\n";
          });
        else
         console.log('el error ',error);
        let toast = this.toastCtrl.create({
          message: mensaje,
          showCloseButton: true,
          closeButtonText: "cerrar",
        });
        toast.present();
      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'Toda la información es obligatoria',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle',
      });
      toast.present();
    }
  }

  selectcountry() {
    let modal = this.modal.create("SelectCodePage");
    modal.present();
    modal.onDidDismiss(data => {
      if (data !== undefined) {
        this.user_register.country_code = data.code;
        this.user_register.flag = data.flag;
      }
    })
  }

  verifyCode() {
    if (this.code_verify == this.response_verify.phone_code) {
      this.navCtrl.push('RegisterPage', {'response': this.response_verify, 'register': this.user_register});
    } else {
      let toast = this.toastCtrl.create({
        message: 'Código incorrecto.',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle',
      });
      toast.present();
    }
  }
}
