import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {AuthUserProvider} from "./auth-user/auth-user";

@Injectable()
export class Api {
  url: string = 'http://globalone2onemarketing.com/frontend/web/apiapp/';
  // url: string = 'http://192.168.0.6/eyepaycash/frontend/web/apiapp/';
  // url: string = 'http://35557b72.ngrok.io/eyepaycash/frontend/web/apiapp/';
  headers: HttpHeaders;

  constructor(public http: HttpClient, public storage: Storage
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
          this.storage.set(endpoint, value);
          resolve(value);
        }).catch(err => {
        this.storage.get(endpoint).then(value => {
          resolve(value)
        }).catch(err => {
          reject("Lo sentimos. No hemos podido mostrar información. Comunícate con nuestro equipo de soporte")
        })
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
    }).toPromise();
  }

  jsonToURLEncoded(jsonString) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }
}
