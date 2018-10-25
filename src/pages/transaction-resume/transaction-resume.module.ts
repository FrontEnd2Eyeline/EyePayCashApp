import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TransactionResumePage} from './transaction-resume';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    TransactionResumePage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionResumePage),
    TranslateModule
  ],
})
export class TransactionResumePageModule {
}
