import {Component} from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

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
  public type = 'password';
  public showPass = false;
  public type2 = 'password';
  public showPass2 = false;

//=========================  CONTROL DE VALIDACIÓN DEL USUARIO
  private view_Verify_Phone = false;
  private view_Verify_Mail = false;

  private view_Btn_phone = false;
  private view_Btn_mail = false;

  private code_Verify_Phone = null;
  private code_Verify_Mail = null;

  private responseVerify: any = null;
//=========================== CONTROL DE INPUTS
  public control_label :string = "label";



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              protected api: Api,
              protected userProvider: AuthUserProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public modal: ModalController,
			  public alertCtrl: AlertController,
			  public errorProvider: ModalErrorProvider,
  ) {
    this.getInfo();
  }


  private getInfo() {
    this.usuario = this.userProvider.user_Info;
    this.country = this.userProvider.user_Country;
    this.controlBtns();
  }


  actualizar() {

    const confirm = this.alertCtrl.create({
      message: '¿Desea actualizar la información?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Actualizar',
          handler: () => {
            let loading = this.loadingCtrl.create({
              spinner: 'hide',
              content: "<img src='assets/imgs/buho.png'>",
            });
            loading.present();
            if (this.usuario.first_name != null && this.usuario.last_name != null &&
              this.usuario.first_name != "" && this.usuario.last_name != "") {
              if (this.usuario.first_name.length > 2 && this.usuario.last_name.length > 2) {
                this.api.post('account/update-info', this.usuario, this.userProvider)
                  .then((data: any) => {
					  this.errorProvider.obj.message = 'Información personal acrtualizada correctamente';
					  this.errorProvider.presentModal();

                    this.usuario = data;
                     loading.dismiss();
                  }).catch(error => {
                  // let mensaje = 'Por favor corrija lo siguiente \n';
                  let mensaje = '';
                  error.error.forEach(data => {
                    mensaje += data.field + ": " + data.message + "\n";
				  });
				  this.errorProvider.obj.message = mensaje;
				  this.errorProvider.presentModal();

                  loading.dismiss();
                });
              } else {
				loading.dismiss();
				this.errorProvider.obj.message = 'Nombre y apellido deben contener más de 2 caracteres';
				this.errorProvider.presentModal();

              }
            } else {
				this.errorProvider.obj.message = 'Todos los campos son obligatorios';
				this.errorProvider.presentModal();

               loading.dismiss();
            }
          }
        }
      ]
    });
    confirm.present();



  }

  cerrarSesion() {
    window.localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }

  reenviarConfirm(tipo) {
    this.code_Verify_Phone = null;
    this.code_Verify_Mail = null;
    this.responseVerify = null;
    if (tipo == 'phone') {
      this.view_Verify_Phone = true;
      this.view_Verify_Mail = false;
      this.view_Btn_mail = false;

    } else {
      this.view_Verify_Phone = false;
      this.view_Btn_phone = false;
      this.view_Verify_Mail = true;
    }
    this.api.get("account/re-send-verify", this.userProvider, {type: tipo}).then((data: any) => {
      this.responseVerify = data;
    }).catch()
  }

  validateCode(tipo) {
    let guardar = false;
    if (tipo == 'mail') {
      if (this.code_Verify_Mail == this.responseVerify.mail_code) {
        guardar = true;
      } else {
		guardar = false;
		this.errorProvider.obj.message = 'El código no coincide';
		this.errorProvider.presentModal();

      }
    } else {
      if (this.code_Verify_Phone == this.responseVerify.phone_code) {
        guardar = true;
      } else {
		guardar = false;
		this.errorProvider.obj.message = 'El código no coincide';
		this.errorProvider.presentModal();

      }
    }
    this.code_Verify_Mail = null;
    this.code_Verify_Phone = null;
    if (guardar)
      this.api.get("account/confirm-verify", this.userProvider, {"type": tipo, id: this.responseVerify.id})
        .then((data: any) => {
          if (data.success == "ok") {
            if (tipo == 'mail')
              this.userProvider.User_Verify.is_mail_verify = 1;
            else
              this.userProvider.User_Verify.is_phone_verify = 1;
          }
          this.responseVerify = null;
          this.view_Verify_Mail = false;
          this.view_Verify_Phone = false;
          this.controlBtns();
        })
  }

  cancelValidation() {
    this.responseVerify = null;
    this.view_Verify_Mail = false;
    this.view_Verify_Mail = false;
    this.code_Verify_Phone = null;
    this.code_Verify_Mail = null;
  }

  controlBtns() {
    if (this.userProvider.User_Verify.is_mail_verify == 0)
      this.view_Btn_mail = true;
    else
      this.view_Btn_mail = false;
    if (this.userProvider.User_Verify.is_phone_verify == 0)
      this.view_Btn_phone = true;
    else
      this.view_Btn_phone = false;
  }

  goPage(page) {
    if (page == 'profile')
      this.navCtrl.push("ProfilePage");
    else if (page == 'history')
      this.navCtrl.push("HistoryPage");
    else if(page=="maps")
      this.navCtrl.push("MapPage");
    else if(page =="contact")
      this.navCtrl.push("ContactsPage");
    else
      this.navCtrl.push("TransactionPage");
  }

}
