import {Component, Input} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, ToastController} from 'ionic-angular';
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  @Input() errorMsg: string;
  @Input() displayError: boolean;

  // formGroup = this.formBuilder.group({
  //   password: ['', Validators.compose([
  //     Validators.required,
  //     Validators.minLength(6)
  //   ])],
  //
  //   mail: ['', Validators.compose([
  //     Validators.required,
  //     Validators.minLength(6),
  //     Validators.email]),
  //      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  //   ],
  // });

  formGroup = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              protected userProvider: AuthUserProvider,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,
              public formBuilder: FormBuilder) {

  }


  login() {
    if (this.formGroup.valid) {
      let cargando = this.loadingCtrl.create({
        spinner: 'dots',
      });
      cargando.present();
      this.userProvider.login(this.formGroup.value.mail, this.formGroup.value.password)
        .then((data: any) => {
          if (data.success == 'ok') {
            this.navCtrl.setRoot("HomePage");
            cargando.dismiss();
          } else {
            cargando.dismiss();
          }
        }).catch((error) => {
        cargando.dismiss();
        let mensaje = "";
        error.error.forEach(data => {
          mensaje += data.message + "\n";
        });
        let toast = this.toastCtrl.create({
          message: mensaje,
          showCloseButton: true,
          closeButtonText: 'cerrar',
          position: 'middle'
        });
        toast.present();
      });
    }
  }

  recuperarcontrasena() {
    const modal = this.modalCtrl.create('RecoveryPasswordPage');
    modal.present();
  }

  registro() {
    this.navCtrl.push("RegNumberPhonePage");
  }

}
