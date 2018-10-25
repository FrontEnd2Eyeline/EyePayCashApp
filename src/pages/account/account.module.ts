import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AccountPage} from './account';
import {BrMaskerModule} from "brmasker-ionic-3";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
    TranslateModule,
    BrMaskerModule,
  ],
})
export class AccountPageModule {
}
