import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {SelectCodePage} from "../select-code/select-code";
import {GeolocationProvider} from "../../providers/geolocation/geolocation";

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  private usuario: any = null;
  private country: any = null;
  private verify: any = null;
  public type = 'password';
  public showPass = false;
  public type2 = 'password';
  public showPass2 = false;



  //=================================== controlar visibilidad inputs y botones
  public isphone = true;
  public ismail = false;
  //==================================== variables para la verificacion




//===========================================

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              protected api: Api,
              protected userProvider: AuthUserProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public modal: ModalController,
              private locationProvider: GeolocationProvider,
  ) {
    this.getInfo();
  }



  private getInfo() {
    this.usuario = this.userProvider.user_Info;
    this.country = this.userProvider.user_Country;
    this.verify = this.userProvider.User_Verify;
  }



  actualizar() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
    });
    loading.present();
    if (this.usuario.first_name != null && this.usuario.last_name != null &&
      this.usuario.first_name != "" && this.usuario.last_name != "") {
      if (this.usuario.first_name.length > 2 && this.usuario.last_name.length > 2) {
        this.api.post('account/update-info', this.usuario, this.userProvider).then((data: any) => {
          let toast = this.toastCtrl.create({
            message: 'Información personal actualizada correctamente.',
            showCloseButton: true,
            closeButtonText: 'cerrar',
            position: 'middle',
          });
          this.usuario = data;
          loading.dismiss();
          toast.present();
        }).catch(error => {
          // let mensaje = 'Por favor corrija lo siguiente \n';
          let mensaje = '';
          error.error.forEach(data => {
            mensaje += data.field + ": " + data.message + "\n";
          });
          let toast = this.toastCtrl.create({
            message: mensaje,
            showCloseButton: true,
            closeButtonText: 'cerrar',
            position: 'middle'
          });
          loading.dismiss();
          toast.present();
        });
      } else {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Nombre y apellido deben contener más de 2 caracteres.',
          showCloseButton: true,
          closeButtonText: 'cerrar',
          position: 'middle',
        });
        toast.present();
      }
    } else {
      let toast = this.toastCtrl.create({
        message: 'Todos los campos son obligatorios.',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle',
      });
      loading.dismiss();
      toast.present();
    }

  }


  clearVar() {
    this.isphone = true;
    this.ismail = false;
  }

  cerrarSesion() {
    window.localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }



  reenviarConfirm(tipo){
    this.api.get("account/re-send-verify",this.userProvider,{type:tipo}).then((data:any)=>{
        console.log(data);
    }).catch()
  }


}
