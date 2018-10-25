import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ModalTransactionPage} from './modal-transaction';
import {BrMaskerModule} from "brmasker-ionic-3";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ModalTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTransactionPage),
    TranslateModule,
    BrMaskerModule,
  ],
})
export class ModalTransactionPageModule {
}
