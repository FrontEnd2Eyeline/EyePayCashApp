import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ValidationProvider} from "../../providers/validation/validation";

/**
 * Generated class for the MsgErrorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'msg-error',
  template: '<div><span *ngIf="errorMessage !== false">{{errorMessage}}</span></div>'
})
export class MsgErrorComponent {

  @Input() control: FormControl;
  @Input() name: string;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationProvider.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.name);
      }
    }

    return false;
  }
}
