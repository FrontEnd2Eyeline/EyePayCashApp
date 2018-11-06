webpackJsonp([10],{

<<<<<<< HEAD
/***/ 736:
=======
/***/ 731:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchLoginPageModule", function() { return TouchLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touch_login__ = __webpack_require__(764);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__touch_login__["a" /* TouchLoginPage */]),
            ],
        })
    ], TouchLoginPageModule);
    return TouchLoginPageModule;
}());

//# sourceMappingURL=touch-login.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 764:
=======
/***/ 756:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(96);
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
<<<<<<< HEAD
    TouchLoginPage.prototype.login = function () {
        var _this = this;
        this.faio.show({
            clientId: 'Fingerpresent-demo',
            clientSecret: 'password',
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Plase authenticate',
        })
            .then(function (result) {
            _this.navCtrl.setRoot('LanguagePage');
        })
            .catch(function (err) {
            console.log('Err: ', err);
        });
=======
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goPage = function (page) {
        if (page == 'profile')
            //this.navCtrl.push("ProfilePage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
        else if (page == 'history')
            //this.navCtrl.push("HistoryPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'HistoryPage' }]);
        else if (page == "maps")
            //this.navCtrl.push("MapPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'MapPage' }]);
        else if (page == "contact")
            //this.navCtrl.push("ContactsPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ContactsPage' }]);
        else if (page == "security")
            //this.navCtrl.push("SecurityPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'SecurityPage' }]);
        else if (page == "account")
            //this.navCtrl.push("AccountPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'AccountPage' }]);
        else if (page == "HomePage")
            this.navCtrl.setRoot('HomePage');
        else
            //this.navCtrl.push("TransactionPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
    };
    TouchLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-touch-login',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/touch-login/touch-login.html"*/'<!--\n  Generated template for the TouchLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>touch-login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-row class="login-row" aling-items-center>\n	<ion-col col-5></ion-col>\n	<ion-col col-2 class="lock-col">\n		<div class="lock-bg"></div>\n		<img src="assets/imgs/Mascota.png" class="lock-img" tappable (click)="login()">\n	</ion-col>\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/touch-login/touch-login.html"*/,
=======
            selector: 'page-profile',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/profile/profile.html"*/'<ion-content class="BackGRa" padding>\n	<div class="center">\n		<img class="logo mrgLogoTopBut" src="assets/imgs/EPCLogo.png" />\n	</div>\n	<div class="center mrg36Top">\n		<ion-row>\n			<ion-col (click)="goPage(\'account\')" class="lineRight lineRight2 linerig" col-6>\n				<img class="tamaIcos" src="assets/newIcons/13.png" />\n				<h6 class="colWhite">{{\'MI_CUENTA\'|translate}}</h6>\n			</ion-col>\n			<ion-col (click)="goPage(\'security\')" class="lineRight2" col-6>\n				<img class="tamaIcos" src="assets/newIcons/14.png" />\n				<h6 class="colWhite">{{\'SEGURIDAD\'|translate}}</h6>\n			</ion-col>\n		</ion-row>\n		<ion-row class="mr10Top">\n			<ion-col (click)="goPage(\'HomePage\')" col-12>\n				<img class="icoCenter" src="assets/newIcons/38.png" />\n			</ion-col>\n		</ion-row>\n		<ion-row class="margtop2">\n			<ion-col (click)="goPage(\'TransactionPage\')" class="lineRight" col-6>\n				<img class="tamaIcos" src="assets/newIcons/15.png" />\n				<h6 class="colWhite">{{\'TRANSACCION\'|translate}}</h6>\n			</ion-col>\n			<ion-col (click)="goPage(\'history\')">\n				<img class="tamaIcos" src="assets/newIcons/16.png" />\n				<h6 class="colWhite">Historial</h6>\n			</ion-col>\n		</ion-row>\n		<ion-item class="center bacTransp">\n			<button class="buttonPayCash borderBtns" ion-button small>CONOCE MÁS</button>\n		</ion-item>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/profile/profile.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], TouchLoginPage);
    return TouchLoginPage;
}());

//# sourceMappingURL=touch-login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map