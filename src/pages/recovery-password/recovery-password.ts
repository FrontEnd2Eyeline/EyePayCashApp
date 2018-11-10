import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Api } from "../../providers/api";
import { AuthUserProvider } from "../../providers/auth-user/auth-user";
import { ModalErrorProvider } from '../../providers/modal-error/modal-error';
import { FormGroup, FormControl, Validators } from '@angular/forms';



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
	public iscodigo2 = false;
	private reset: any;
	private mail: any;
	private phone: any;

	formGroup = new FormGroup({
		data: new FormControl('', [
			Validators.required,
			Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
			Validators.maxLength(70),
			Validators.minLength(5),
		]),
		codigo: new FormControl('', [
			Validators.required,
		]),
	});

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private api: Api,
		public toastCtrl: ToastController,
		private userProvider: AuthUserProvider,
		public loadingCtrl: LoadingController,
		public errorProvider: ModalErrorProvider
	) {

		console.log('mail', this.mail);
		console.log('phone', this.phone)
	}

	sendMessage(type) {
		if ((this.formGroup.value.data != "") || (this.data != null)) {
			let loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: "<img src='assets/imgs/buho.png'>",
			});
			// if(this.mail = this.formGroup.value.value){
			loading.present();
			console.log('data antes de', this.formGroup.value.data);
			// this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(
			this.api.post('auth/restar-password', { 'type': type, 'data': this.formGroup.value.data })
				.then(
					(data) => {
						console.log('datos', data)
						if (data != undefined) {
							loading.dismiss();
							if (type != "phone") {
								this.iscodigo = true;
							} else {
								this.iscodigo2 = true;
							}
							this.errorProvider.obj.message = 'Se ha enviado un código de verificación';
							this.errorProvider.presentModal();
							console.log('despues de', this.formGroup.value.data);
							console.log('tipo de dato', type)
							this.reset = data;
							this.data = null;
						} else {
							loading.dismiss();
							this.errorProvider.obj.message = 'datos no existentes';
							this.errorProvider.presentModal();
						}

					}
				).catch(error => {
					loading.dismiss();
					if (error.error.name = 'Unauthorized') {
						this.errorProvider.obj.message = 'usuario bloqueado';
						this.errorProvider.presentModal();
					} else {
						let mensaje = "";
						error.error.forEach(data => {
							mensaje += data.message + "\n";
						});
						this.errorProvider.obj.message = mensaje;
						this.errorProvider.presentModal();
					}

				});
			// }else{
			// 	let mensaje = "número celular";
			// 	if (type != "phone")
			// 		mensaje = "dirección email";
			// 	this.errorProvider.obj.message = 'la ' + mensaje + ' no existe';
			// 	this.errorProvider.presentModal();
			// }


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
		if (this.formGroup.value.codigo != null) {
			if (this.reset.password_code_req == this.formGroup.value.codigo) {
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
