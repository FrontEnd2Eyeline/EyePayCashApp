import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialSharing } from "@ionic-native/social-sharing";
import { Url } from 'url';

/*
  Generated class for the SocialSharingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialSharingProvider {
	phoneNumber: any = null;
	constructor(
		public http: HttpClient,
		private socialSharing: SocialSharing,
	) {
		console.log('Hello SocialSharingProvider Provider');
	}

	socialShare() {
		var msg = "Hola";
		this.socialSharing.share(msg, null, null, null);
	}

	whatsAppShare(phoneNumber) {
		var mensaje = "Hola, te invitamos a que descargues nuestra Aplicación EyePayCash™:";
		var link = "http://globalone2onemarketing.com/frontend/web/apk.apk";
		this.socialSharing.shareViaWhatsAppToReceiver(phoneNumber, mensaje, null, link)
	}

}
