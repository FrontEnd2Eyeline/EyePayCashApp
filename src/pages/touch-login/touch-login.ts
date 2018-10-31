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

//   init(){
// 	if (this.initialized) {
// 		return;
// 	  }
   
// 	  this.lockScreen = this.modalCtrl.create("TouchLoginPage");
   
// 	  this.platform.ready().then(() => {
// 		this.onPauseSubscription = this.platform.pause.subscribe(() => {
// 		  this.splashScreen.show();
// 		});
   
// 		this.onResumeSubscription = this.platform.resume.subscribe(() => {
   
// 		  if (!this.isLocked) {
// 			this.isLocked = true;
// 			this.lockScreen.present();
// 			this.showFingerPrint();
// 		  }
   
// 		  this.splashScreen.hide();
// 		});
// 	  });
// 	}
   
// 	showFingerPrint() {
// 		this.faio.show({
// 			clientId: 'FingerPrintLockScreen',
// 			clientSecret: 'lasd08aah@981',   //Only necessary for Android
// 			disableBackup:true,              //Only for Android(optional)
// 			localizedFallbackTitle: 'Use Pin',      //Only for iOS
// 			localizedReason: 'Please authenticate' //Only for iOS
// 		  })
// 		  .then((result: any) => {
// 			this.lockScreen.dismiss();
// 			this.isLocked = false;
// 		  })
// 		  .catch((error: any) => console.log(error));
// 	}

	
//   }

  

  

// async showFingerprintDialog(){
// 	try {
// 		await this.platform.ready();
// 		const available = await this.faio.isAvailable();
// 		console.log(available);
// 		if(available === "OK"){
// 			const result = await this.faio.show(this.fingerOptions);
// 			console.log(result)
// 		}
// 	}
// 	catch(e){
// 		console.error(e);
// 	}
// }

//  public showFingerprintAuthDlg(){
//     this.fingerOptions = {
//         clientId: 'fingerprint-Demo',
//         clientSecret: 'password', //Only necessary for Android
//         disableBackup:true  //Only for Android(optional)
//     }
//     this.faio.isAvailable().then(result =>{
//     if(result === "OK")
//     {
//         this.faio.show(this.fingerOptions)
//         .then((result: any) => console.log(result))
//         .catch((error: any) => console.log(error));
//     }
//     });
// }

  login(){
 	this.faio.show({
		clientId: 'Fingerpresent-demo',
 		clientSecret: 'password',
 		localizedFallbackTitle: 'Use Pin',
 		localizedReason: 'Plase authenticate'
 	})
 	.then(result=>{
 		this.navCtrl.setRoot('LanguagePage');
})
.catch(err=>{
		console.log('Err: ', err);
	})
  }
}
 
