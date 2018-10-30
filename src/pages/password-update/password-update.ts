import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Api } from "../../providers/api";
import { AuthUserProvider } from "../../providers/auth-user/auth-user";
import { ModalErrorProvider } from '../../providers/modal-error/modal-error';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the PasswordUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-password-update',
	templateUrl: 'password-update.html',
})
export class PasswordUpdatePage {

	public infoRecovery: any = {
		new_password: null,
		new_password_conf: null,
		reset_id: null,
	};

	formGroup = new FormGroup({
		new_password: new FormControl('', [
			Validators.required,
		]
		),
		new_password_conf: new FormControl('', [
			Validators.required]
		),
		reset_id: new FormControl(),
	});

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private api: Api,
		public toastCtrl: ToastController,
		private userProvider: AuthUserProvider,
		public loadingCtrl: LoadingController,
		public errorProvider: ModalErrorProvider
	) {
		 this.infoRecovery.reset_id = navParams.get('reset_id');
		this.formGroup.get('reset_id').setValue(this.infoRecovery.reset_id);
	}

	recovery() {
		if (this.formGroup.valid) {
			let cargando = this.loadingCtrl.create({
				spinner: 'dots',
			});

			cargando.present();
			this.api.post('auth/update-password', this.formGroup.value).then ((data)=>{
				cargando.dismiss();
				this.errorProvider.obj.message = 'Contraseña actualizada correctamente';
				this.errorProvider.presentModal();
				this.navCtrl.setRoot('LoginPage');
			}).catch((error) => {
				let mensaje = '';
				cargando.dismiss();
				error.error.forEach(data => {
					mensaje += data.message + "\n";
				});
				
				this.errorProvider.obj.message = mensaje;
				this.errorProvider.presentModal();
			});
		}

		// if (this.infoRecovery.new_password != null && this.infoRecovery.new_password_conf != null) {
		// 	if (this.infoRecovery.new_password_conf == this.infoRecovery.new_password) {
		// 		if (this.infoRecovery.new_password.length >= 6 && this.infoRecovery.new_password_conf.length >= 6) {
		// 			let loading = this.loadingCtrl.create({
		// 				spinner: 'dots',
		// 			});
		// 			loading.present();
		// 			this.api.post('auth/update-password', this.infoRecovery).then((data) => {

		// 				loading.dismiss();
		// 				this.errorProvider.obj.message = 'Contraseña actualizada correctamente';
		// 				this.errorProvider.presentModal();
		// 				this.navCtrl.setRoot('LoginPage');
		// 			}).catch((error) => {
		// 				let mensaje = '';
		// 				loading.dismiss();
		// 				error.error.forEach(data => {
		// 					mensaje += data.message + "\n";
		// 				});
		// 				this.errorProvider.obj.message = mensaje;
		// 				this.errorProvider.presentModal();
		// 			});
		// 		} else {
		// 			this.errorProvider.obj.message = 'La contraseña debe tener mínimo 6 caracteres';
		// 			this.errorProvider.presentModal();
		// 		}
		// 	} else {
		// 		this.errorProvider.obj.message = 'Las contraseñas no cinciden';
		// 		this.errorProvider.presentModal();
		// 	}
		// } else {
		// 	this.errorProvider.obj.message = 'Los datos son obligatorios';
		// 	this.errorProvider.presentModal();
		// }
	}


}
