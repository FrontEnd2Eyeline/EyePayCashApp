import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LenguageProvider} from "../../providers/lenguage/lenguage";

/**
 * Generated class for the LanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public languageProvider: LenguageProvider,
  ) {
  }


  seleccionar(idioma) {
    this.languageProvider.seleccionar(idioma);
    this.languageProvider.setLenguage();
    this.navCtrl.setRoot('LoginPage')
  }


}
