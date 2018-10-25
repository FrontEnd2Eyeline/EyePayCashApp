import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RecoveryPasswordPage} from './recovery-password';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RecoveryPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoveryPasswordPage),
    TranslateModule
  ],
})
export class RecoveryPasswordPageModule {
}
