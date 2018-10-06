import {Injectable} from '@angular/core';
import {Api} from "../api";
import {ToastController} from "ionic-angular";

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

  public userId = null;
  constructor(protected api: Api,
              public toastCtrl: ToastController
  ) {
    this.trylogin();
  }

  login(usuario, password) {
    return new Promise((resolve, reject) => {
      this.api.post('auth/login?expand=country,userVerify', {mail: usuario, password: password})
        .then((data: any) => {
          if (data.success == 'ok') {
            this.setUser(data.user);
            this.setUserCountry(data.user.country);
            this.setUserVerify(data.user.userVerify);
            this.userId = data.user.userVerify.user_id;
            resolve(data);
          } else {
            let toast = this.toastCtrl.create({
              message: 'Usuario o contraseña incorrectos',
              duration: 3000,
            });
            toast.present();
          }
        })
        .catch(err => reject(err))
    });
  }

  isLogin() {
    return this.user_Info !== null;
  }


  trylogin() {
    this.user_Info = JSON.parse(window.localStorage.getItem('user'));
    if (this.user_Info == null)
      this.user_Info = {
        user: null,
      };
  }

  accessParam() {
    if (this.user_Info != null)
      return this.user_Info.access_token;
    return null;
  }

  setUser(Usuario: any) {
    this.user_Info = Usuario;
    window.localStorage.setItem('user', JSON.stringify(this.user_Info));
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

}
