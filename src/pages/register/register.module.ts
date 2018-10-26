import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterPage} from './register';
import {BrMaskerModule} from "brmasker-ionic-3";
import {ComponentsModule} from "../../components/components.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    TranslateModule,
    BrMaskerModule,
    ComponentsModule,
  ],
})
export class RegisterPageModule {
}
