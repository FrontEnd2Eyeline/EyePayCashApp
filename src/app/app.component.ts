import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GeolocationProvider} from "../providers/geolocation/geolocation";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
              public locationProvider: GeolocationProvider,
  ) {
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

