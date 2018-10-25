import { Injectable } from '@angular/core';

/*
  Generated class for the ValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidationProvider {

  constructor() {

  }

  public static getValidatorErrorMessage(validatorName: string, validatorValue?: any, name?: string) {
    let config = {
      'required': `${name} is Required`,
      'minlength': `The ${name} minimum length ${validatorValue.requiredLength}`,
      // 'pattern': `The ${name}`,
      'pattern': `The ${name} character and number`,
      'email': `The ${name} no es válido`,
    };
    return config[validatorName];
  }
}
