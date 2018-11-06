import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoinsPage } from './coins';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CoinsPage,

  ],
  imports: [
    IonicPageModule.forChild(CoinsPage),
    TranslateModule
  ],
})
export class CoinsPageModule {}
