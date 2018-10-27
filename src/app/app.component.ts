import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GeolocationProvider} from "../providers/geolocation/geolocation";
import {AuthUserProvider} from "../providers/auth-user/auth-user";
import {LoadInformationProvider} from "../providers/load-information/load-information";
import {LenguageProvider} from "../providers/lenguage/lenguage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: string = 'LoginPage';
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public locationProvider: GeolocationProvider,
              private auth: AuthUserProvider,
              private informationProvider: LoadInformationProvider,
              public langProvider: LenguageProvider,
              public menuCtrl: MenuController
  ) {
    if (!this.langProvider.verifyIsLanguage())
      this.rootPage = 'LanguagePage';
    else {
      this.langProvider.setLenguage();
      this.rootPage = 'LoginPage';
    }
    this.auth.trylogin().then(value => {
      if (value) {
        this.langProvider.setLenguage();
        this.rootPage = 'HomePage';
        this.informationProvider.init()
      }
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
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
    // this.nav.setPages([{page: "HomePage"}, {page: page.component}]);
    this.nav.setPages([{page:'HomePage'},{page:page}]);
    this.menuCtrl.toggle();
  }

  cerrarSesion() {
    window.localStorage.clear();
    this.menuCtrl.toggle();
    this.nav.setRoot("LoginPage");
  }

  seleccionar(idioma){
    this.langProvider.seleccionar(idioma);
    this.langProvider.setLenguage();
    // this.menuCtrl.toggle();
    // this.nav.push('HomePage');
  }

}

