import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegNumberPhonePage } from './reg-number-phone';

@NgModule({
  declarations: [
    RegNumberPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(RegNumberPhonePage),
  ],
})
export class RegNumberPhonePageModule {}
