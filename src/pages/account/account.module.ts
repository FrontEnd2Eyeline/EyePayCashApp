import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AccountPage} from './account';
import {BrMaskerModule} from "brmasker-ionic-3";

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
    BrMaskerModule,
  ],
})
export class AccountPageModule {
}
