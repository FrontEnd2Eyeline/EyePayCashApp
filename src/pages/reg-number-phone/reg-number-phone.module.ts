import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegNumberPhonePage} from './reg-number-phone';
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {Geolocation} from "@ionic-native/geolocation";
import {BrMaskerModule} from "brmasker-ionic-3";

@NgModule({
  declarations: [
    RegNumberPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(RegNumberPhonePage),
    BrMaskerModule,
  ],
  providers: [
    NativeGeocoder,
    Geolocation
  ]
})
export class RegNumberPhonePageModule {
}
