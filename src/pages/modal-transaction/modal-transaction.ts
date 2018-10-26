import {Component} from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  ToastController,
  ViewController
} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {CurrencyPipe} from "@angular/common";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

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
	public country: any;

  private transaction: any = {
    amount_local: null, // monto de dinero a transferir
    phone_user_des: null, // numero de telefono de la persona a la que se va a transferir
    key_user: null,  // clave manual de la transacciòn 4 digitos
    country_id: null,  // id del pais
    coin_id: null,     // id de la moneda
    code_phone: null,   // Codigo del celular en el pais
  };


	constructor(
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public toastCtrl: ToastController,
		public loadingCtrl: LoadingController,
		private api: Api,
		private userProvider: AuthUserProvider,
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		private pipe: CurrencyPipe,
		public errorProvider: ModalErrorProvider,
	) {
	}

	ionViewWillLoad() {
		this.userCountry = this.navParams.get('infoCountry');
		this.moneda = this.navParams.get('moneda');
		this.currency = this.navParams.get('currency');
		console.log(this.currency);
		this.transaction.country_id = this.navParams.get('pais_id');
		this.transaction.code_phone = this.navParams.get('code_phohe');
		this.transaction.coin_id = this.moneda.id;
		this.country = this.navParams.get('country');
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

	doTrasaction() {

		let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: "<img src='assets/imgs/buho.png'>",
		});
		loading.present();
		// let objtoSub = this.transaction;
		// let amount = objtoSub.amount_local + "";
		// let index = amount.indexOf(',');
		// if (index > 0) {
		// objtoSub.amount_local = this.transaction.amount_local.replace(new RegExp('\\.', 'g'), '');
		//   objtoSub.amount_local = this.transaction.amount_local.replace(',', '.');
		if(this.userProvider.accessParam() != null){
      this.api.post('app/transaction', this.transaction, this.userProvider).then((data: any) => {
        this.closeModal();
        this.errorProvider.obj.message = 'Transacción solicitada correctamente';
        this.errorProvider.presentModal();
        this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionResumePage', params: data }]);
        loading.dismiss();
      }).catch(error => {
        loading.dismiss();
        let mensaje = "";
        error.error.forEach(data => {
          mensaje += data.message + "\n";
        });
        this.errorProvider.obj.message = mensaje;
        this.errorProvider.presentModal();
      });
		}else{
      this.errorProvider.obj.message = 'No se pudo realizar la solicitud. Por favor intentelo de nuevo.';
      this.errorProvider.presentModal();
		}
	}

	confirmTrasaction() {
		if (
			this.transaction.amount_local != null &&
			this.transaction.phone_user_des != null &&
			this.transaction.key_user != null &&
			this.transaction.key_user != '' &&
			this.transaction.country_id != null &&
			this.transaction.coin_id != null) {
			if (this.transaction.phone_user_des > 8) {
				if (this.transaction.amount_local > 0) {
					let alerta = this.alertCtrl.create({
						title: 'Confirmar transacción',
						message: 'Destino: ' + this.transaction.phone_user_des + ' <br> Clave:' + this.transaction.key_user + '<br>' +
							'Monto:' + this.getCurrency(this.transaction.amount_local) + " " + this.country.currency_code,
						buttons: [
							{
								text: 'Cancelar',
								role: 'cancel',
							},
							{
								text: 'Solicitar',
								handler: () => {
									this.doTrasaction();
								}
							}
						]
					});
					alerta.present();
				} else {
					this.errorProvider.obj.message = 'El monto de la transacción debe ser mayor a cero';
					this.errorProvider.presentModal();
				}
			} else {
				this.errorProvider.obj.message = 'Número telefónico debe tener más de 9 dígitos';
				this.errorProvider.presentModal();
			}
		} else {
			this.errorProvider.obj.message = 'Todos los datos son obligatorios';
			this.errorProvider.presentModal();
		}
	}

	getCurrency(amount: number) {
		return this.pipe.transform(amount, '$ ', true, '1.0-0');
	}

}
