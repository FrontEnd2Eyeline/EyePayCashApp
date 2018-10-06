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
import {LoginPage} from "../pages/login/login";
import {RecoveryPasswordPage} from "../pages/recovery-password/recovery-password";
import {PasswordUpdatePage} from "../pages/password-update/password-update";
import {RegisterPage} from "../pages/register/register";
import {HomePage} from "../pages/home/home";
import {AccountPage} from "../pages/account/account";
import {HistoryPage} from "../pages/history/history";
import {TransactionPage} from "../pages/transaction/transaction";
import {ModalWelcomePage} from "../pages/modal-welcome/modal-welcome";
import { VerificationProvider } from '../providers/verification/verification';
import {ModalTransactionPage} from "../pages/modal-transaction/modal-transaction";
import { PoliticasPage } from '../pages/politicas/politicas';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RecoveryPasswordPage,
    PasswordUpdatePage,
    RegisterPage,
    HomePage,
    AccountPage,
    HistoryPage,
    TransactionPage,
    ModalWelcomePage,
    ModalTransactionPage,
    PoliticasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SelectCodePageModule,
    RegNumberPhonePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RecoveryPasswordPage,
    PasswordUpdatePage,
    RegisterPage,
    HomePage,
    AccountPage,
    HistoryPage,
    TransactionPage,
    ModalWelcomePage,
    ModalTransactionPage,
    PoliticasPage
    
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
  ]
})
export class AppModule {
}
