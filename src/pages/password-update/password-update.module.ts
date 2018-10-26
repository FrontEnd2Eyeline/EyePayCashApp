import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PasswordUpdatePage} from './password-update';
import {TranslateModule} from "@ngx-translate/core";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PasswordUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordUpdatePage),
	TranslateModule,
	ComponentsModule,
  ],
})
export class PasswordUpdatePageModule {
}
