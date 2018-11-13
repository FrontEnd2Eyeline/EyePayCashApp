import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs/Subscription';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { ModalController, Platform, NavController, App, IonicApp, Nav } from 'ionic-angular';
import { flatten } from '@angular/compiler';
import { AuthUserProvider } from '../auth-user/auth-user';



@Injectable()


export class TouchLoginProvider {

	public isTouch = true;
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
						if (this.isTouch) {
							this.showFingerPrint();
							this.login();
							console.log('bloqueado', this.isLocked)
						}
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



	// isActive() {
	// 	const path: string[] = this.platform.url().split('/');
	// 	return (String)(path[path.length - 1]);
	// }

	showFingerPrint() {
		this.faio.isAvailable()
			.then(result => {
				this.faio.show({
					clientId: 'Identificar de huella',
					clientSecret: 'password',   //Only necessary for Android
					disableBackup: false,              //Only for Android(optional)
					localizedFallbackTitle: 'Use Pin',      //Only for iOS
					localizedReason: 'Please authenticate', //Only for iOS
				})
					.then((result: any) => {
						this.login();
						this.isLocked = false;
					}).catch((error: any) => {
						this.exitApp();
					});
			}).catch((error: any) => console.log(error));
	}

	login() {
		let nav = this.app.getActiveNav();
		nav.setRoot('HomePage');
		nav.popToRoot;
	}

	exitApp() {
		this.platform.exitApp();
	}



}
