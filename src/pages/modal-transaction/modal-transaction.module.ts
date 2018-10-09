import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ModalTransactionPage} from './modal-transaction';
import {BrMaskerModule} from "brmasker-ionic-3";

@NgModule({
  declarations: [
    ModalTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTransactionPage),
    BrMaskerModule,
  ],
})
export class ModalTransactionPageModule {
}
