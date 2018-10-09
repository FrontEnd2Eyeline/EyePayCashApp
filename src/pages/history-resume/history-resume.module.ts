import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HistoryResumePage} from './history-resume';

@NgModule({
  declarations: [
    HistoryResumePage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryResumePage),
  ],
})
export class HistoryResumePageModule {
}
