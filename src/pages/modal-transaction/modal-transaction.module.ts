import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTransactionPage } from './modal-transaction';

@NgModule({
  declarations: [
    ModalTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTransactionPage),
  ],
})
export class ModalTransactionPageModule {}
