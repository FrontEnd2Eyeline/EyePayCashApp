import {Injectable} from '@angular/core';
import {Api} from "../api";
import {ToastController} from "ionic-angular";
import {ModalErrorProvider} from '../modal-error/modal-error';
import {Storage} from "@ionic/storage";


@Injectable()
export class AuthUserProvider {

  tokenAppId: string;
  public user_Info: any = {
    first_name: null,
    last_name: null,
    phone: null,
    access_token: null,
    is_active: null,
    gender: null,
    mail: null,
  };
  public user_Country: any = {
    id: null,
    name: null,
    is_active: null,
    phone_code: null,
    country_code: null,
    currency: null
  };
  public User_Verify: any = {
    id: null,
    phone_code: null,
    is_phone_verify: null,
    mail_code: null,
    is_mail_verify: null,
    phone: null,
    mail: null,
    user_id: null
  };

  public userRecovery: any = {
    user_id: null,
    codigoVerify: null,
  };

  public isActivo: false;

  public check_terminos = false;

  constructor(protected api: Api,
			  public toastCtrl: ToastController,
			  public errorProvider: ModalErrorProvider,
        protected storage : Storage
  ) {
    this.trylogin();
  }

  login(usuario, password) {
    return new Promise((resolve, reject) => {
      this.api.post('auth/login?expand=country,userVerify', {mail: usuario, password: password})
        .then((data: any) => {
          if (data.success == 'ok') {
            this.setUser(data.user);
            this.setActivo(this.user_Info.is_active);
            this.setUserCountry(data.user.country);
            this.setUserVerify(data.user.userVerify);
            resolve(data);
          } else {
			this.errorProvider.obj.message = 'Usuario o contraseña incorrectos';
			this.errorProvider.presentModal();

          }
        })
        .catch(err => reject(err))
    });
  }

  isLogin() {
    return (this.user_Info != null);
  }


  trylogin() {
      // this.user_Info = JSON.parse(window.localStorage.getItem('user'));
      this.storage.get('user').then((data)=>{
        this.user_Info = JSON.parse(data);
        if (this.user_Info != null) {
          this.setUserCountry(this.user_Info.country);
          this.setUserVerify(this.user_Info.userVerify);
          }
          return true;
      }).catch((error)=>{
        console.log(error)
      });
  }

  accessParam() {
    if (this.user_Info != null)
      return this.user_Info.access_token;
    return null;
  }

  setUser(Usuario: any) {
    this.user_Info = Usuario;
    this.storage.set('user', JSON.stringify(this.user_Info));
    // window.localStorage.setItem('user', JSON.stringify(this.user_Info));
  }

  setUserCountry(Country: any) {
    this.user_Country = Country;
  }

  setUserVerify(Verify: any) {
    this.User_Verify = Verify;
  }

  setUserRecovery(data) {
    this.userRecovery = data;
  }

  setTokenNotification(tokenId) {
    this.tokenAppId = tokenId;
  }

  registerTokenForUser(user_id) {
    this.api.post('auth/tokenapp', {'token': this.tokenAppId, 'id': user_id})
      .then().catch();
  }

  setCheck_Terminos(check) {
    this.check_terminos = check;
  }

  setActivo(estado){
    if(estado ==0)
      estado = false;
    else if(estado == 1)
      estado = true;
    this.isActivo = estado;
  }


}
