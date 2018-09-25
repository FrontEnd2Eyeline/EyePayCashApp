import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestphonePage } from './testphone';

@NgModule({
  declarations: [
    TestphonePage,
  ],
  imports: [
    IonicPageModule.forChild(TestphonePage),
  ],
})
export class TestphonePageModule {}
