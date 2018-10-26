import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MapPage} from './map';
import {Geolocation} from "@ionic-native/geolocation";
import {Geocoder} from "@ionic-native/google-maps";
import {MapProvider} from "../../providers/map/map";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    TranslateModule
  ],
  providers: [
    Geolocation,
    Geocoder,
    MapProvider
  ]
})
export class MapPageModule {
}
