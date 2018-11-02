import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs/Subscription';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { ModalController, Platform, NavController, App } from 'ionic-angular';
import { flatten } from '@angular/compiler';
import { AuthUserProvider } from '../auth-user/auth-user';

/*
  Generated class for the TouchLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TouchLoginProvider {

	private onPauseSubscription: Subscription;
	private onResumeSubscription: Subscription;
	private lockScreen: any;
	private initialized: boolean = false;
	private isLocked: boolean = false;
	private navCtrl: NavController;

	fingerOptions: FingerprintOptions

	constructor(
		public http: HttpClient,
		private faio: FingerprintAIO,
		public modalCtrl: ModalController,
		private platform: Platform,
		private splashScreen: SplashScreen,
		private app: App,
		private isLogin: AuthUserProvider,
	) {
		this.navCtrl = app.getActiveNav();
		console.log('Hello TouchLoginProvider Provider');
	}



	init() {
		if (this.initialized) {
			return;
		}

		this.platform.ready().then(() => {
			this.onPauseSubscription = this.platform.pause.subscribe(() => {
				this.splashScreen.show();
			});
			this.onResumeSubscription = this.platform.resume.subscribe(() => {
				if (!this.isLocked) {
					this.isLocked = true;
					if (this.login = this.isLogin.isLogin) {
						this.showFingerPrint();
						this.login();
						console.log('bloqueado', this.isLocked)
					} else {
						let nav = this.app.getActiveNav();
						nav.setRoot('LoginPage');
						nav.popToRoot;
					}
				} console.log('no bloqueado', this.isLocked)
				this.splashScreen.hide();
				this.isLocked = false;
			});
		});
	}

	showFingerPrint() {
		this.faio.isAvailable()
			.then(result => {
				this.faio.show({
					clientId: 'Identificar de huella',
					clientSecret: 'password',   //Only necessary for Android
					disableBackup: true,              //Only for Android(optional)
					localizedFallbackTitle: 'Use Pin',      //Only for iOS
					localizedReason: 'Please authenticate', //Only for iOS
				})
					.then((result: any) => {
						this.login();
						this.isLocked = false;
					}).catch((error: any)=> console.log('cancelo',error));

			}).catch((error: any) => console.log(error));
	}

	public login(): void {
		let nav = this.app.getActiveNav();
		nav.setRoot('HomePage');
		nav.popToRoot;
	}



}
