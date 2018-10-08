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
import {LoginPageModule} from "../pages/login/login.module";
import {AccountPageModule} from "../pages/account/account.module";
import {HistoryPageModule} from "../pages/history/history.module";
import {HomePageModule} from "../pages/home/home.module";
import {ModalTransactionPageModule} from "../pages/modal-transaction/modal-transaction.module";
import {ModalWelcomePageModule} from "../pages/modal-welcome/modal-welcome.module";
import {PasswordUpdatePageModule} from "../pages/password-update/password-update.module";
import {PoliticasPageModule} from "../pages/politicas/politicas.module";
import {RecoveryPasswordPageModule} from "../pages/recovery-password/recovery-password.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {TransactionPageModule} from "../pages/transaction/transaction.module";
import {TransactionResumePageModule} from "../pages/transaction-resume/transaction-resume.module";

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
    AccountPageModule,
    HistoryPageModule,
    HomePageModule,
    LoginPageModule,
    ModalTransactionPageModule,
    ModalWelcomePageModule,
    PasswordUpdatePageModule,
    PoliticasPageModule,
    RecoveryPasswordPageModule,
    RegisterPageModule,
    TransactionPageModule,
    TransactionResumePageModule,
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
  ]
})
export class AppModule {
}
