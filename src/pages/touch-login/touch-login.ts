import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the TouchLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touch-login',
  templateUrl: 'touch-login.html',
})
export class TouchLoginPage {
	private onPauseSubscription:Subscription;
	private onResumeSubscription:Subscription;
	private lockScreen:any;
	private initialized:boolean = false;
	private isLocked:boolean = false;

	fingerOptions: FingerprintOptions

  constructor(
	  public navCtrl: NavController,
	   public navParams: NavParams,
	   private faio: FingerprintAIO,
	   private platform: Platform,
	   public splashScreen: SplashScreen,
	   public modalCtrl: ModalController,
	   ) {
		   this.fingerOptions = {
			   clientId: 'fingerprint-demo',
			   clientSecret: 'password',
			   disableBackup: true
		   }
  }

  login(){
 	this.faio.show({
		clientId: 'Fingerpresent-demo',
 		clientSecret: 'password',
 		localizedFallbackTitle: 'Use Pin',
		 localizedReason: 'Plase authenticate',
		 
 	})
 	.then(result=>{
 		this.navCtrl.setRoot('LanguagePage');
})
.catch(err=>{
		console.log('Err: ', err);
	})
  }
}
 
