import {Injectable} from '@angular/core';

/*
  Generated class for the FormatterDateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormatterDateProvider {

  constructor() {
  }

  getDateLocale(tr){
    var date = new Date(Date.parse(tr));
    return (date.getTime() - (date.getTimezoneOffset()*60000))
  }

}
