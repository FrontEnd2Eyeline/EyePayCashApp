import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouchLoginPage } from './touch-login';

@NgModule({
  declarations: [
    TouchLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(TouchLoginPage),
  ],
})
export class TouchLoginPageModule {}
