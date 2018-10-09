import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MapPage} from './map';
import {Geolocation} from "@ionic-native/geolocation";
import {Geocoder} from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
  providers: [
    Geolocation,
    Geocoder
  ]
})
export class MapPageModule {
}
