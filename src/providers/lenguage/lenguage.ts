import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

/*
  Generated class for the LenguageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LenguageProvider {

  constructor(public http: HttpClient,
              private translate: TranslateService,) {

  }

  seleccionar(lenguaje) {
    window.localStorage.removeItem('language');
    window.localStorage.setItem('language', lenguaje);
  }

  setLenguage() {
    let lang: any = window.localStorage.getItem('language');
    console.log(lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  verifyIsLanguage() {
    if (window.localStorage.getItem('language') != null)
      return true;
    return false;
  }


}
