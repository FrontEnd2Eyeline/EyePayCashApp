import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegNumberPhonePage } from './reg-number-phone';
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {Geolocation} from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    RegNumberPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(RegNumberPhonePage),
  ],
  providers: [
    NativeGeocoder,
    Geolocation
  ]
})
export class RegNumberPhonePageModule {}
