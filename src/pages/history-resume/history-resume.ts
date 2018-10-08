import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
  public country:any = null;
  public coin:any = null;
  public comision:any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
  ) {
    this.getInfo();
  }

  getInfo() {
    this.historyInfo = this.navParams.get('transaction');
    this.country = this.historyInfo.country;
    this.coin = this.historyInfo.coin;
    this.comision = this.historyInfo.transactionCommission;
    console.log(this.country);
  }




}


// {user_id: 4, country_id: 1, coin_id: 2, company_id: null, phone_user_des: "435345", …}
// amount_btc: "0.00273469"
// amount_local: "34.53"
// amount_usd: "0.01"
// coin:
//   date_update: "2018-10-05 11:31:14"
// full_name: "Ethereum"
// id: 2
// is_active: 1
// short_name: "ETH"
// usd_value: "223.0600"
// __proto__: Object
// coin_id: 2
// company_id: null
// country:
//   country_code: "CO"
// currency: "COP"
// id: 1
// is_active: 1
// name: "Colombia"
// phone_code: "57"
// __proto__: Object
// country_id: 1
// date_pay_confirm: null
// date_request: "2018-10-08 15:36:22"
// entity_add_data: null
// key_eyecash: "2716"
// key_request: "6837898708911006"
// phone_user_des: "435345"
// process_status: 0
// transactionCommission:
//   commission_ids: "["1","2"]"
// crypto_value_to_usd: "223.06"
// id: 58
// money_local_to_usd: 3039
// total_in_crypto: "0.00268986"
// total_in_usd: "0.60"
// transaction_id: 81
// __proto__: Object
// user_id: 4