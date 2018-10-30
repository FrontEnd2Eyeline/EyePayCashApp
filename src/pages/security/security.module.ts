import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SecurityPage} from './security';
import {BrMaskerModule} from "brmasker-ionic-3";
import {TranslateModule} from "@ngx-translate/core";
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
	SecurityPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityPage),
    TranslateModule,
	BrMaskerModule,
	ComponentsModule,
	FormsModule,
	ReactiveFormsModule
  ],
})
export class SecurityPageModule {}
