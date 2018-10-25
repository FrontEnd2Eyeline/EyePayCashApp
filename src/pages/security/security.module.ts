import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityPage } from './security';
import {BrMaskerModule} from "brmasker-ionic-3";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    SecurityPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityPage),
    TranslateModule,
    BrMaskerModule,
  ],
})
export class SecurityPageModule {}
