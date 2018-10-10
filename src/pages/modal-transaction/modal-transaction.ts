import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";

/**
 * Generated class for the ModalTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-transaction',
  templateUrl: 'modal-transaction.html',
})
export class ModalTransactionPage {

  public moneda: any = null;
  public userCountry: any = null;
  public currency: any = null;

  private transaction: any = {
    amount_local: 0, // monto de dinero a transferir
    phone_user_des: null, // numero de telefono de la persona a la que se va a transferir
    key_user: null,  // clave manual de la transacciòn 4 digitos
    country_id: null,  // id del pais
    coin_id: null,     // id de la moneda
  };


  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private api: Api,
    private userProvider: AuthUserProvider,
    public navCtrl: NavController,
  ) {
  }

  ionViewWillLoad() {
    this.userCountry = this.navParams.get('infoCountry');
    this.moneda = this.navParams.get('moneda');
    this.currency = this.navParams.get('currency');
    this.transaction.country_id = this.navParams.get('pais_id');
    this.transaction.coin_id = this.moneda.id;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  doTrasaction() {
    if (this.transaction.amount_local != null && this.transaction.phone_user_des != null && this.transaction.key_user != null && this.transaction.country_id != null && this.transaction.coin_id != null) {
      if (this.transaction.key_user.length === 4 && this.transaction.phone_user_des > 9) {
        let loading = this.loadingCtrl.create({
          spinner: 'dots',
        });
        loading.present();
          let objtoSub = this.transaction;
          let amount = objtoSub.amount_local+"";
          let index = amount.indexOf(',');
          console.log(index);
          if(index>0){
            objtoSub.amount_local = this.transaction.amount_local.replace(new RegExp('\\.', 'g'), '');
            objtoSub.amount_local = this.transaction.amount_local.replace(',', '.');
            this.api.post('app/transaction', objtoSub, this.userProvider).then((data: any) => {
              loading.dismiss();
              let toast = this.toastCtrl.create({
                message: 'Su transacción ha solicitada correctamente.',
                duration: 3000,
              });
              this.closeModal();
              this.navCtrl.setPages([{page: 'HomePage'}, {page: 'TransactionResumePage', params: data}]);
              toast.present();
            }).catch(data => {
              console.log(data)
            });
          }else{
            let toast = this.toastCtrl.create({
              message: 'Por favor ingrese un valor mayor a cero.',
              duration: 3000,
            });
            toast.present();
          }
        loading.dismiss();
      }
    } else {
      let toast = this.toastCtrl.create({
        message: 'Todos los datos son obligatorios',
        duration: 3000
      });
      toast.present();
    }
  }

}
