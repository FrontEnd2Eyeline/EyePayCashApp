import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RecoveryPasswordPage} from './recovery-password';
import {TranslateModule} from "@ngx-translate/core";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecoveryPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoveryPasswordPage),
	TranslateModule,
	ComponentsModule,
  ],
})
export class RecoveryPasswordPageModule {
}
