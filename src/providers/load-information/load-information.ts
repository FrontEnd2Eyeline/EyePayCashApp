import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthUserProvider} from "../auth-user/auth-user";
import {Api} from "../api";

/*
  Generated class for the LoadInformationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadInformationProvider {

  public countrys: any[];
  public infoCurrencies: any[];
  public monedas: any;

  date: number;


  constructor(public http: HttpClient,
              private auth: AuthUserProvider,
              private api: Api) {
    this.infoCurrencies = [];
    this.date = new Date().getTime();
  }

  init() {
    this.getCountries();
  }

  getCountries() {
    return new Promise(resolve => {
      if (this.countrys == undefined) {
        this.api.get('app/get-countries', this.auth).then((data: any) => {
          this.countrys = data;
          resolve(this.countrys)
        }).catch();
      }else
      resolve(this.countrys)
    });
  }

  getCurrencies(currency) {
    return new Promise(resolve => {
      console.log("indexof", this.infoCurrencies.indexOf(currency));
      let dif = new Date().getTime() - this.date;
      console.log(dif);
      if (dif > 300000 || this.infoCurrencies[currency] == undefined) {
        this.date = new Date().getTime();
        this.api.get('app/get-prices', this.auth, {
          currency_code: currency,
        }).then((data: any) => {
          this.infoCurrencies[currency] = data;
          console.log(this.infoCurrencies);
          resolve(data)
        })
      } else
        resolve(this.infoCurrencies[currency]);
    })
  }

}
