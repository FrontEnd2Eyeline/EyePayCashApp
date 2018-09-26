import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinlockPage } from './pinlock';

@NgModule({
  declarations: [
    PinlockPage,
  ],
  imports: [
    IonicPageModule.forChild(PinlockPage),
  ],
})
export class PinlockPageModule {}
