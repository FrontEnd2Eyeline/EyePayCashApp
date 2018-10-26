import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

/**
 * Generated class for the RecoveryPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-recovery-password',
	templateUrl: 'recovery-password.html',
})
export class RecoveryPasswordPage {
	public isvisible = true;

	public data = null;
	public type = 'phone';
	public codigo = null;

	public iscodigo = false;

	private reset: any;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private api: Api,
		public toastCtrl: ToastController,
		private userProvider: AuthUserProvider,
		public loadingCtrl: LoadingController,
		public errorProvider: ModalErrorProvider
	) {
	}

	sendMessage(type) {
		this.type = type;
		if (this.data != null) {
			let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: "<img src='assets/imgs/buho.png'>",
			});
			loading.present();
			this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(
				(data) => {
					loading.dismiss();
					this.iscodigo = true;
					this.reset = data;
					this.data = null;
					this.errorProvider.obj.message = 'Se ha enviado un código de verificación';
					this.errorProvider.presentModal();
				}
			).catch(error => {
				loading.dismiss();
				let mensaje = "";
				error.error.forEach(data => {
					mensaje += data.message + "\n";
				});
				this.errorProvider.obj.message = mensaje;
				this.errorProvider.presentModal();
			});
		} else {
			let mensaje = "número celular";
			if (type != "phone")
				mensaje = "dirección email";
			this.errorProvider.obj.message = 'Por favor ingrese su ' + mensaje;
			this.errorProvider.presentModal();
		}
	}

	changeVisible() {
		this.isvisible = !this.isvisible;
		this.data = null;
	}

	cancelar() {
		this.navCtrl.pop();
	}

	confirmCode() {
		if (this.codigo != null) {
			if (this.reset.password_code_req == this.codigo) {
				this.navCtrl.push('PasswordUpdatePage', { 'reset_id': this.reset.id });
			} else {
				this.errorProvider.obj.message = 'El código ingresado no coincide';
				this.errorProvider.presentModal();
			}
		} else {
			this.errorProvider.obj.message = 'Por favor ingrese el código de verificación';
			this.errorProvider.presentModal();
		}
	}

}
