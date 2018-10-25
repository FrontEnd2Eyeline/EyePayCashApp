import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PasswordUpdatePage} from './password-update';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PasswordUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordUpdatePage),
    TranslateModule
  ],
})
export class PasswordUpdatePageModule {
}
