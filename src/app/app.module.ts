import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {CountryProvider} from "../providers/country/country";
import {SelectCodePageModule} from "../pages/select-code/select-code.module";
import {HttpClientModule} from "@angular/common/http";
import {Api} from "../providers/api";
import {IonicStorageModule} from "@ionic/storage";
import {GeolocationProvider} from '../providers/geolocation/geolocation';
import {Geolocation} from "@ionic-native/geolocation";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {AuthUserProvider} from '../providers/auth-user/auth-user';
import {RegNumberPhonePageModule} from "../pages/reg-number-phone/reg-number-phone.module";
import {VerificationProvider} from '../providers/verification/verification';
import {LoadInformationProvider} from '../providers/load-information/load-information';
import {GoogleMaps} from "@ionic-native/google-maps";
import { ValidationProvider } from '../providers/validation/validation';
import { FormatterDateProvider } from '../providers/formatter-date/formatter-date';
import {Clipboard} from "@ionic-native/clipboard";
import { MapProvider } from '../providers/map/map';
import {CurrencyPipe} from "@angular/common";


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SelectCodePageModule,
    RegNumberPhonePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountryProvider,
    Api,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler,},
    GeolocationProvider,
    AuthUserProvider,
    VerificationProvider,
    LoadInformationProvider,
    GoogleMaps,
    ValidationProvider,
    FormatterDateProvider,
    Clipboard,
    MapProvider,
    CurrencyPipe
  ]
})
export class AppModule {
}
