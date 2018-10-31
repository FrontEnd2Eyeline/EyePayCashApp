import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {AuthUserProvider} from "./auth-user/auth-user";
import {ModalErrorProvider} from "./modal-error/modal-error";
import {isArray} from "ionic-angular/util/util";

@Injectable()
export class Api {
  url: string = 'http://globalone2onemarketing.com/frontend/web/apiapp/';
  // url: string = 'http://10.160.170.114/eyepaycash/frontend/web/apiapp/';
  // url: string = 'http://35557b72.ngrok.io/eyepaycash/frontend/web/apiapp/';
  headers: HttpHeaders;

  constructor(public http: HttpClient, public storage: Storage, public errorProvider: ModalErrorProvider
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  }

  get(endpoint: string, user?: AuthUserProvider, params?: any) {
    if (user != null) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + user.accessParam()
      })
    }
    return new Promise((resolve, reject) => {
      let url = this.url + endpoint;
      let urlParams = '';
      if (params) {
        urlParams = this.jsonToURLEncoded(params);
      }
      this.http.get(url + '?' + urlParams, {headers: this.headers}).toPromise()
        .then(value => {
          resolve(value);
        }).catch(error => {
          console.log(error);
        let mensaje = "";
        if (isArray(error.error)) {
          let next = true;
          error.error.forEach((data:any)=> {
            mensaje += data.message;
          });
        } else if(error.error.name == "Unauthorized"){
          mensaje = "EL USUARIO SE ENCUENTA INACTIVO";
        }else {
          mensaje = error.error.message;
        }
        this.errorProvider.obj.message = mensaje;
        this.errorProvider.presentModal();
      })
    });
  }

  post(endpoint: string, body: any, user?: any): Promise<any> {
    let url = this.url + endpoint;
    if (user != null) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + user.accessParam()
      })
    }
    return this.http.post(url, this.jsonToURLEncoded(body), {
      headers: this.headers
    }).toPromise().catch((error)=>{
      console.log(error);
      let mensaje = "";
      if (isArray(error.error)) {
        error.error.forEach( (data:any) => {
          mensaje += data.message;
        });
      } else if(error.error.name == "Unauthorized"){
        mensaje = "EL USUARIO SE ENCUENTA INACTIVO";
      }else {
        mensaje = error.error.message;
      }
      this.errorProvider.obj.message = mensaje;
      this.errorProvider.presentModal();
    });
  }

  jsonToURLEncoded(jsonString) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }
}
