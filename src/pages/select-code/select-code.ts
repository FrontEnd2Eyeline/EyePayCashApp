import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CountryProvider} from "../../providers/country/country";
import {AutoCompleteComponent} from "ionic2-auto-complete";

/**
 * Generated class for the SelectCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-code',
  templateUrl: 'select-code.html',
})
export class SelectCodePage {

  @ViewChild('search')
  searchbar: AutoCompleteComponent;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public country: CountryProvider,
    public view: ViewController) {
  }

  ionViewDidLoad() {
    this.searchbar.getItems();
  }

  selectItem(ev) {
    this.view.dismiss({
      code: ev.callingCodes[0],
      flag: ev.flag
    })
  }
}
