import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionResumePage } from './transaction-resume';

@NgModule({
  declarations: [
    TransactionResumePage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionResumePage),
  ],
})
export class TransactionResumePageModule {}
