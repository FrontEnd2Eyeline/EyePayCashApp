import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormatterDateProvider} from "../../providers/formatter-date/formatter-date";
import {Clipboard} from "@ionic-native/clipboard";

/**
 * Generated class for the HistoryResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-resume',
  templateUrl: 'history-resume.html',
})
export class HistoryResumePage {

  public historyInfo: any = null;
  public country: any = null;
  public coin: any = null;
  public comision: any = null;
  public coinHash: any = null;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public dateLocal: FormatterDateProvider,
    private clipboard: Clipboard
  ) {
    this.getInfo();
  }

  getInfo() {
    this.historyInfo = this.navParams.get('transaction');
    this.country = this.historyInfo.country;
    this.coin = this.historyInfo.coin;
    this.comision = this.historyInfo.transactionCommission;
    this.coinHash = this.historyInfo.coinHash;
  }
  goMaps(){
    this.navCtrl.push("MapPage")
  }

  copiarToken(){
    this.clipboard.copy(this.coinHash.eye_hash);
  }
}