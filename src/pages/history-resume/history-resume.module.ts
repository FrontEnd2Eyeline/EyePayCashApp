import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HistoryResumePage} from './history-resume';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HistoryResumePage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryResumePage),
    TranslateModule
  ],
})
export class HistoryResumePageModule {
}
