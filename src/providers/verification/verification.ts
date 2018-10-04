import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoadingController, ToastController} from "ionic-angular";
import {Api} from "../api";

/*
  Generated class for the VerificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VerificationProvider {

  public response_verify: any = {
    id: null,
    is_mail_verify: null,
    mail_code: null,
    phone_code: null,
    country_id: null,
  };
  public infoPhone: any = {
    country_code: '',
    flag: '',
    value: '',
  };


  constructor(public http: HttpClient,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              private api: Api) {
  }

  sendNumberPhone() {
    this.api.post('auth/pre-sign-up', this.infoPhone).then(
      (data: any) => {
        this.response_verify = data.verify;
        this.response_verify.country_id = data.country.id;
        console.log(this.response_verify.phone_code);
        return this.response_verify;
      }
    ).catch(
      (data) => {
        console.log(data);
      });
  }

}
