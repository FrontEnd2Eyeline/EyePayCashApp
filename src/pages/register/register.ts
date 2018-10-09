import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {PoliticasPage} from "../politicas/politicas";
import {ModalWelcomePage} from "../modal-welcome/modal-welcome";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public responseParams: any = null;
  public registerParams: any = null;
  public user_register: any = {
    first_name: null,
    last_name: null,
    gender: null,
    mail: null,
    password: null,
    //datos obtenidos por el params
    phone: null,
    country_id: null,
    user_verify_id: null,
    confirm_verify: null,
  };
  public type = 'password';
  public showPass = false;
  imagen = 'assets/backgrounds/Background3.png';
  ischecked = this.userProvider.check_terminos;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtl: ToastController,
              private api: Api,
              private userProvider: AuthUserProvider,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController
  ) {
    this.getInfo();
    this.ischecked = this.userProvider.check_terminos;
  }


  getInfo() {
    this.responseParams = this.navParams.get('response');
    this.registerParams = this.navParams.get('register');
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  cancel() {
    this.navCtrl.pop();
  }

  register() {
    if (this.user_register.first_name != null && this.user_register.last_name != null && this.user_register.gender != null && this.user_register.password != null && this.user_register.mail != null) {
      let size = this.user_register.password;
      if (size.length >= 6) {
        if (this.userProvider.check_terminos) {
          let loading = this.loadingCtrl.create({
            spinner: 'dots',
          });
          loading.present();
          this.user_register.phone = this.registerParams.value;
          this.user_register.country_id = this.responseParams.country_id;
          this.user_register.user_verify_id = this.responseParams.id;
          this.user_register.confirm_verify = 'phone';
          this.api.post('auth/sign-up', this.user_register).then((data: any) => {
            this.userProvider.setUser(data);
            this.verifyConfirm();
            loading.dismiss();
            this.presentWelcomeModal();
          });
        } else {
          let toast = this.toastCtl.create({
            message: 'Por favor lea y acepte las políticas de uso y tratamiento de datos.',
            duration: 3000
          });
          toast.present();
        }
      } else {
        let toast = this.toastCtl.create({
          message: 'Contraseña debe tener mínimo 6 letras o números.',
          duration: 3000,
        });
        toast.present();
      }
    } else {
      let toast = this.toastCtl.create({
        message: 'Toda la información es requerida',
        duration: 3000,
      });
      toast.present();
    }
  }

  verifyConfirm() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
    });
    loading.present();
    this.api.get('account/confirm-verify', this.userProvider, {
      id: this.responseParams.id,
      type: 'phone'
    }).then((data: any) => {
      loading.dismiss();
    });
  }

  politicas() {
    let poli = this.modalCtrl.create('PoliticasPage');
    poli.present();
    poli.onDidDismiss((data => {
      this.ischecked = true
    }))
  }

  presentWelcomeModal() {
    let modalWelcome = this.modalCtrl.create(ModalWelcomePage, {name: this.userProvider.user_Info.first_name + " " + this.userProvider.user_Info.last_name});
    modalWelcome.onWillDismiss(() => {
      this.navCtrl.setRoot('LoginPage')
    });
    modalWelcome.onDidDismiss(data => {
      console.log('close');
    });
    modalWelcome.present();
    this.userProvider.setUser(null);
  }


}
