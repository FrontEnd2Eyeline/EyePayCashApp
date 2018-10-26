import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SelectCodePage} from './select-code';
import {AutoCompleteModule} from "ionic2-auto-complete";

@NgModule({
  declarations: [
    SelectCodePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCodePage),
    AutoCompleteModule,
  ],
})
export class SelectCodePageModule {
}
