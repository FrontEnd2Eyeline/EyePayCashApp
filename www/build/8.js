webpackJsonp([8],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchLoginPageModule", function() { return TouchLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touch_login__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouchLoginPageModule = /** @class */ (function () {
    function TouchLoginPageModule() {
    }
    TouchLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__touch_login__["a" /* TouchLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__touch_login__["a" /* TouchLoginPage */]),
            ],
        })
    ], TouchLoginPageModule);
    return TouchLoginPageModule;
}());

//# sourceMappingURL=touch-login.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TouchLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TouchLoginPage = /** @class */ (function () {
    function TouchLoginPage(navCtrl, navParams, faio, platform, splashScreen, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.faio = faio;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.initialized = false;
        this.isLocked = false;
        this.fingerOptions = {
            clientId: 'fingerprint-demo',
            clientSecret: 'password',
            disableBackup: true
        };
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
    TouchLoginPage.prototype.login = function () {
        var _this = this;
        this.faio.show({
            clientId: 'Fingerpresent-demo',
            clientSecret: 'password',
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Plase authenticate'
        })
            .then(function (result) {
            _this.navCtrl.setRoot('LanguagePage');
        })
            .catch(function (err) {
            console.log('Err: ', err);
        });
    };
    TouchLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-touch-login',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/touch-login/touch-login.html"*/'<!--\n  Generated template for the TouchLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>touch-login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-row class="login-row" aling-items-center>\n	<ion-col col-5></ion-col>\n	<ion-col col-2 class="lock-col">\n		<div class="lock-bg"></div>\n		<img src="assets/imgs/Mascota.png" class="lock-img" tappable (click)="login()">\n	</ion-col>\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/touch-login/touch-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], TouchLoginPage);
    return TouchLoginPage;
}());

//# sourceMappingURL=touch-login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map