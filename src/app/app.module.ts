import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {CountryProvider} from "../providers/country/country";
import {SelectCodePageModule} from "../pages/select-code/select-code.module";
import {HttpClientModule} from "@angular/common/http";
import {Api} from "../providers/api";
import {IonicStorageModule} from "@ionic/storage";
import {GeolocationProvider} from '../providers/geolocation/geolocation';
import {Geolocation} from "@ionic-native/geolocation";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {RegisterPage} from "../pages/register/register";
import { AuthUserProvider } from '../providers/auth-user/auth-user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SelectCodePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
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
  ]
})
export class AppModule {
}
