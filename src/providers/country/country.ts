import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryProvider {

  labelAttribute = "name";

  countries: any[] = [];


  constructor(
    private http: HttpClient) {
    this.init();
  }

  init() {
    console.log("Loading countries");
    this.http.get("https://restcountries.eu/rest/v2/all/").toPromise()
      .then((result: any[]) => {
        this.countries = result;
      })
  }

  getResults(keyword: string) {
    if (keyword == '') {
      return this.countries;
    } else {
      return this.countries
        .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()))
    }
  }
}
