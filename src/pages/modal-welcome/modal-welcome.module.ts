import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ModalWelcomePage} from './modal-welcome';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ModalWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalWelcomePage),
    TranslateModule
  ],
})
export class ModalWelcomePageModule {
}
