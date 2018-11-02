import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Api} from "../../providers/api";
import {AuthUserProvider} from "../../providers/auth-user/auth-user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalErrorProvider} from '../../providers/modal-error/modal-error';

@IonicPage()
@Component({
	selector: 'page-register',
	
	templateUrl: 'register.html',
})

export class RegisterPage {
	
	public responseParams: any = null;
	public registerParams: any = null;
	public user_register: any = {
		//datos obtenidos por el params
		phone: null,
		country_id: null,
		user_verify_id: null,
		confirm_verify: null,
		
	};
	public type = 'password';
	public showPass = false;
	public type2 = 'password';
	public showPass2 = false;
	imagen = 'assets/backgrounds/Background3.png';
	ischecked = this.userProvider.check_terminos;

	

	
	formGroup = new FormGroup({
		
		first_name: new FormControl('', [
			Validators.required, 
			Validators.minLength(3), 
			Validators.maxLength(20)
		]),
		last_name: new FormControl('', [
			Validators.required, 
			Validators.minLength(5), 
			Validators.maxLength(20)
		]),
		gender: new FormControl('', [
			Validators.required
		]),
		mail: new FormControl('', [
			Validators.required, 
			Validators.email,
			// Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
			// Validators.pattern("^(?=.{8,32}$)(?=.[A-Z])(?=.[a-z])(?=.[0-9]).")
		]),
		password_conf: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
			// Validators.pattern("^(?=.{8,32}$)(?=.[A-Z])(?=.[a-z])(?=.[0-9]).")
		]),
		mail_conf: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		phone: new FormControl(),
		country_id: new FormControl(),
		user_verify_id: new FormControl(),
		confirm_verify: new FormControl()
	});



	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private api: Api,
		private userProvider: AuthUserProvider,
		public loadingCtrl: LoadingController,
		public modalCtrl: ModalController,
		public errorProvider: ModalErrorProvider
	) {
		this.getInfo();
		this.ischecked = this.userProvider.check_terminos;
	}

	getInfo() {
		this.responseParams = this.navParams.get('response');
		this.registerParams = this.navParams.get('register');
	}

	showPassword() {
		this.showPass = !this.showPass;
		if (this.showPass) {
			this.type = 'text';
		} else {
			this.type = 'password';
		}
	}

	showPassword2() {
		this.showPass2 = !this.showPass2;
		if (this.showPass2) {
			this.type2 = 'text';
		} else {
			this.type2 = 'password';
		}
	}

	cancel() {
		this.navCtrl.pop();
	}

	register() {
		if (this.formGroup.valid) {
			this.formGroup.get('phone').setValue(this.registerParams.value);
			this.formGroup.get('country_id').setValue(this.responseParams.country_id);
			this.formGroup.get('user_verify_id').setValue(this.responseParams.id);
			this.formGroup.get('confirm_verify').setValue("phone");
			if ((this.formGroup.value.mail == this.formGroup.value.mail_conf) && (this.formGroup.value.password == this.formGroup.value.password_conf)) {
				let loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: "<img src='assets/imgs/buho.png'>",
				});
				if (this.userProvider.check_terminos) {
					loading.present();
					this.user_register.phone = this.registerParams.value;
					this.user_register.country_id = this.responseParams.country_id;
					this.user_register.user_verify_id = this.responseParams.id;
					this.user_register.confirm_verify = 'phone';
					this.api.post('auth/sign-up', this.formGroup.value).then((data: any) => {
						this.userProvider.setUser(data);
						this.verifyConfirm();
						loading.dismiss();
						this.presentWelcomeModal();
					}).catch(error => {
						let mensaje = "";
						error.error.forEach(data => {
							mensaje += data.message + "\n";
						});
						this.errorProvider.obj.message = mensaje;
						this.errorProvider.presentModal();
						loading.dismiss()
					});
				} else {
					this.errorProvider.obj.message = 'Por favor lea y acepte las políticas de uso y tratamiento de datos';
					this.errorProvider.presentModal();
				}
			} else {
				// this.formGroup.setErrors(this.formGroup.errors)
			}
		}


	}

	verifyConfirm() {
		this.api.get('account/confirm-verify', this.userProvider, {
			id: this.responseParams.id,
			type: 'phone',
			mail: this.userProvider.user_Info.mail,
		}).then((data: any) => {

		}).catch(error => {
			let mensaje = "";
			error.error.forEach(data => {
				mensaje += data.message + "\n";
			});
			this.errorProvider.obj.message = mensaje;
			this.errorProvider.presentModal();
		});
	}

	politicas() {
		let poli = this.modalCtrl.create('PoliticasPage');
		poli.present();
		poli.onDidDismiss((data => {
			this.ischecked = true
		}))
	}

	presentWelcomeModal() {
		let modalWelcome = this.modalCtrl.create('ModalWelcomePage', { name: this.userProvider.user_Info.first_name + " " + this.userProvider.user_Info.last_name });
		modalWelcome.onWillDismiss(() => {
			this.navCtrl.setRoot('LoginPage')
		});
		modalWelcome.onDidDismiss(data => {
		});
		modalWelcome.present();
		this.userProvider.setUser(null);
	}


}
