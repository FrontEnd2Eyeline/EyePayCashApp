import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GeolocationProvider} from "../providers/geolocation/geolocation";
import {AuthUserProvider} from "../providers/auth-user/auth-user";
import {LoadInformationProvider} from "../providers/load-information/load-information";
import {HomePage} from "../pages/home/home";
import {TransactionPage} from "../pages/transaction/transaction";
import {HistoryPage} from "../pages/history/history";
import {MapPage} from "../pages/map/map";
import {AccountPage} from "../pages/account/account";
import {SecurityPage} from "../pages/security/security";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'LoginPage';
  // rootPage: string = 'RegisterPage';
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public locationProvider: GeolocationProvider,
              private auth: AuthUserProvider,
              private informationProvider: LoadInformationProvider,
  ) {
    this.auth.trylogin().then(value => {
      if (value) {
        this.rootPage = 'HomePage';
        this.informationProvider.init()
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.is('cordova'))
        this.getLocation();
    });
    this.pages = [
      {title: 'Inicio', component: "HomePage"},
      {title: 'Transacción', component: "TransactionPage"},
      {title: 'Historial', component: "HistoryPage"},
      {title: 'Mapa', component: "MapPage"},
      {title: 'Mi cuenta', component: "AccountPage"},
      {title: 'Seguridad', component: "SecurityPage"},
    ];
  }

  getLocation() {
    this.locationProvider.basicInformacion;
  }

  openPage(page) {
    this.nav.setPages([{page: "HomePage"}, {page: page.component}]);
  }

  cerrarSesion(){
    window.localStorage.clear();
    this.nav.setRoot("LoginPage");
  }


}

