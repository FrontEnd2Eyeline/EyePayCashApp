import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalWelcomePage } from './modal-welcome';

@NgModule({
  declarations: [
    ModalWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalWelcomePage),
  ],
})
export class ModalWelcomePageModule {}
