import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GeolocationProvider } from "../providers/geolocation/geolocation";
import { AuthUserProvider } from "../providers/auth-user/auth-user";
import { LoadInformationProvider } from "../providers/load-information/load-information";
import { LenguageProvider } from "../providers/lenguage/lenguage";
import { Storage } from "@ionic/storage";
import { TouchLoginProvider } from '../providers/touch-login/touch-login';
import { NetworkProvider } from '../providers/network/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	avatar: any;
  @ViewChild(Nav) nav: Nav;
  //   rootPage: string = 'LoginPage';
  rootPage: string = 'RegisterPage';
  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public locationProvider: GeolocationProvider,
    private auth: AuthUserProvider,
    private informationProvider: LoadInformationProvider,
    public langProvider: LenguageProvider,
    public menuCtrl: MenuController,
    private storage: Storage,
    loockScreen: TouchLoginProvider,
    public networkProvider: NetworkProvider,
  
  ) {
	  
	  
      
    this.seleccionar('es');
    if (!this.langProvider.verifyIsLanguage())
      // this.rootPage = 'TouchLoginPage';
      this.rootPage = 'LoginPage';
    else {
      this.langProvider.setLenguage();
      //   this.rootPage = 'TouchLoginPage';
      this.rootPage = 'LoginPage';
    }
    if (auth.trylogin()) {
      this.langProvider.setLenguage();
      this.rootPage = 'LoginPage';
	  this.informationProvider.init();
	  this.getInfo();
	  console.log('imagen', this.avatar)
    }
    platform.ready().then(() => {
      loockScreen.init();
	  this.networkProvider.networkState();
	 
	
    });
  }

 
  private getInfo() {
	this.avatar = this.auth.user_Info.url_img;
  }
  

  getLocation() {
    this.locationProvider.basicInformacion;
  }

  openPage(page) {
    this.nav.setPages([{ page: 'HomePage' }, { page: page }]);
    this.menuCtrl.toggle();
  }

  cerrarSesion() {
    window.localStorage.clear();
    this.storage.remove('user');
    this.storage.clear();
    this.menuCtrl.toggle();
    this.nav.setRoot("LoginPage");
  }

  seleccionar(idioma) {
    this.langProvider.seleccionar(idioma);
    this.langProvider.setLenguage();
  }

}

