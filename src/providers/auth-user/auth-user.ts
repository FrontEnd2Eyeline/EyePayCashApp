import {Injectable} from '@angular/core';
import {Api} from "../api";
import {ToastController} from "ionic-angular";

@Injectable()
export class AuthUserProvider {

  tokenAppId: string;
  public user: any = {
    first_name: null,
    last_name: null,
    phone: null,
    access_token: null,
    is_active: null,
  };

  constructor(public api: Api,
              public toastCtrl: ToastController
  ) {
    this.trylogin();
  }

  login(usuario, password) {
    return new Promise((resolve, reject) => {
      console.log(usuario);
      console.log(password);
      this.api.post('auth/login', {mail: usuario, password: password})
        .then((data: any) => {
          console.log(data);
          // if (data.success == 'ok') {
          //   this.user = data;
          //   resolve(data);
          // } else {
          //   let toast = this.toastCtrl.create({
          //     message: data.mensaje,
          //     duration: 15000,
          //   });
          //   toast.present();
          // }
        })
        .catch(err => reject(err))
    });
  }

  isLogin() {
    return this.user !== null;
  }


  trylogin() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    if (this.user == null)
      this.user = {
        user: null,
      };
  }

  accessParam() {
    if (this.user != null)
      return this.user.access_token;
    return null;
  }

  setUser(Usuario: any) {
    this.user = Usuario;
    window.localStorage.setItem('user', JSON.stringify(this.user));
  }


  setTokenNotification(tokenId) {
    this.tokenAppId = tokenId;
  }

  registerTokenForUser(user_id) {
    this.api.post('auth/tokenapp', {'token': this.tokenAppId, 'id': user_id})
      .then().catch();
  }

}
