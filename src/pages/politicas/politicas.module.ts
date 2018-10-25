import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PoliticasPage} from './politicas';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PoliticasPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticasPage),
    TranslateModule
  ],
})
export class PoliticasPageModule {
}
