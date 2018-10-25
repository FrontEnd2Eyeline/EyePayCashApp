import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation";
import {CountryProvider} from "../country/country";
import {NativeGeocoder} from "@ionic-native/native-geocoder";

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  constructor(public http: HttpClient,
              public geoCtrl: Geolocation,
              public geocode: NativeGeocoder,
              public countryProvider: CountryProvider) {
    this.getInformation();
    this.getBasicInfo();
  }

  public basicInformacion: any = {
    country_code: null,
    flag: null,
  };
  public fullInformation: any = null;

  public load = false;

  getInformation() {
    return new Promise(((resolve, reject) => {
      if (!this.load) {
        this.geoCtrl.getCurrentPosition({
          enableHighAccuracy: false,
          timeout: 10000,
        })
          .then((value => {
            this.geocode.reverseGeocode(value.coords.latitude, value.coords.longitude)
              .then(data => {
                let countries = this.countryProvider.getResults(data[0].countryName);
                if (countries.length) {
                  let countryS = this.countryProvider.getResults(data[0].countryName)[0];
                  this.fullInformation = countryS;
                  this.basicInformacion.country_code = countryS.callingCodes[0];
                  this.basicInformacion.flag = countryS.flag;
                  this.load = true;
                  resolve(true);
                }
              }).catch(err => console.log("reversegeocode", err))
          }))
          .catch(err => console.log("getcurrentposition", err));
      } else
        resolve(true)

    }));

  }

  getBasicInfo() {
    return new Promise(resolve => {
      this.getInformation().then(() => {
        resolve(this.basicInformacion);
      })
    });
  }

}
