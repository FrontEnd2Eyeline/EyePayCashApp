import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {SelectCodePage} from "../select-code/select-code";

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

  //=================================== controlar visibilidad inputs y botones
  public isphone = true;
  public ismail = false;
  //==================================== variables para la verificacion
  public infoPhone: any = {
    flag: null,
    type: null,
    value: null,
    country_code: null
  };
  public response_verify: any = {
    id: null,
    is_mail_verify: null,
    mail_code: null,
    phone_code: null,
    country_id: null,
  };

  public codeVerify = null;
  public codeVerifyMail = null;

//===========================================

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              protected api: Api,
              protected userProvider: AuthUserProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public modal: ModalController,
  ) {
    this.getInfo();
  }

  private getInfo() {
    this.usuario = this.userProvider.user_Info;
    this.country = this.userProvider.user_Country;
    this.verify = this.userProvider.User_Verify;
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  actualizar() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
    });
    loading.present();
    let toast = this.toastCtrl.create({
      message:'Informaciòn personal actualizada correctamente',
      duration:3000,
    });
    if (this.usuario.first_name != null && this.usuario.last_name!=null &&
        this.usuario.first_name != "" && this.usuario.last_name != "") {
      console.log(this.usuario);
        this.api.post('account/update-info',this.usuario,this.userProvider).then((data:any)=>{
          this.usuario = data;
          loading.dismiss();
          toast.present();
        }).catch();
    } else {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Todos los campos son obligatorios',
        duration: 3000,
      });
      toast.present();
    }
  }

  changePhone() {
    if (this.infoPhone.country_code != null && this.infoPhone.value != null) {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
      });
      let toast = this.toastCtrl.create({
        message: 'Se ha enviado un código de verificación al nùmero celular.',
        duration: 3000
      });
      loading.present();
      this.infoPhone.type = "phone";
      this.infoPhone.value = this.infoPhone.country_code + this.infoPhone.value;
      this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(
        (data: any) => {
          console.log(data);
          loading.dismiss();
          toast.present();
          this.response_verify = data;
        }
      )
        .catch();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Por favor seleccione el pais e ingrese su nuevo nùmero celular.',
        duration: 3000,
      });
      toast.present();
    }
  }

  changeMail() {
    if(this.infoPhone.value!=null){
      let loading = this.loadingCtrl.create({
        spinner:'dots',
      });
      let toast = this.toastCtrl.create({
        message:'Se ha enviado un correo electrònico de verificaciòn a su direcciòn email.',
        duration:3000,
      });
      loading.present();
      this.infoPhone.type='mail';
      this.api.post('account/update-contact',this.infoPhone,this.userProvider).then((data:any)=>{
        loading.dismiss();
        toast.present();
        console.log(data);
        this.response_verify = data;
      }).catch(data=>{
        loading.dismiss();
      });
    }else{
      let toast = this.toastCtrl.create({
        message:'Por favor ingrese una direcciòn email',
        duration:3000
      });
      toast.present();
    }
  }

  pedirMail() {
    this.isphone = false;
    this.ismail = true;
  }

  pedirPhone() {
    this.ismail = false;
    this.isphone = true;
  }

  selectcountry() {
    let modal = this.modal.create(SelectCodePage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data !== undefined) {
        this.infoPhone.country_code = data.code;
        this.infoPhone.flag = data.flag;
      }
    })
  }

  verifyCode() {
    if (this.response_verify.phone_code === this.codeVerify) {
      this.api.get('account/confirm-verify', this.userProvider, {
        id: this.response_verify.id,
        type: 'phone',
      }).then((data: any) => {
        this.clearVar();
        this.usuario.phone = data.phone;
        let toast = this.toastCtrl.create({
          duration: 3000,
          message: 'Informaciòn actualizada correctamente',
        });
        toast.present();
      }).catch((data) => {
        console.log(data);
      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'Código incorrecto.',
        duration: 3000,
      });
      toast.present();
    }
  }

  verifyCodeMail(){
    if(this.response_verify.mail_code === this.codeVerifyMail){
      this.api.get('account/confirm-verify',this.userProvider,{
        id:this.response_verify.id,
        type:'mail',
      }).then((data:any)=>{
        console.log(data);
          this.usuario.mail= data.mail;
        this.clearVar();
        let toast = this.toastCtrl.create({
          duration: 3000,
          message: 'Informaciòn actualizada correctamente',
        });
        toast.present();
      }).catch()
    }else{
      let toast = this.toastCtrl.create({
        message:'Los còdigos de verificaciòn no coinciden',
        duration:3000
      });
      toast.present();
    }
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

  cerrarSesion(){
    window.localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }

}
