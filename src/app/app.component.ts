import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GeolocationProvider} from "../providers/geolocation/geolocation";
import {AuthUserProvider} from "../providers/auth-user/auth-user";
import {LoadInformationProvider} from "../providers/load-information/load-information";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar,
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
  }


  getLocation() {
    this.locationProvider.basicInformacion;
  }

}

