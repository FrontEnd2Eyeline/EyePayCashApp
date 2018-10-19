import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityPage } from './security';
import {BrMaskerModule} from "brmasker-ionic-3";

@NgModule({
  declarations: [
    SecurityPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityPage),
    BrMaskerModule,
  ],
})
export class SecurityPageModule {}
