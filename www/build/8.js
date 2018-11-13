webpackJsonp([8],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(761);
=======
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(761);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(764);
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 761:
=======
/***/ 764:
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__ = __webpack_require__(67);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__ = __webpack_require__(169);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__ = __webpack_require__(170);
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(168);
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
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionPage = /** @class */ (function () {
    function TransactionPage(navParams, userProvider, toastCtrl, modalCtrl, informationProvider, navCtrl, loadingCtrl, errorProvider, networkProvider) {
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.informationProvider = informationProvider;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.errorProvider = errorProvider;
        this.networkProvider = networkProvider;
        this.countrys = [];
        this.currency = null;
        this.infoCountry = null;
        this.monedas = [];
        this.currency = this.userProvider.user_Country.currency;
        this.getInfo();
        this.countrySelected();
    }
    TransactionPage.prototype.getInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src='assets/imgs/buho.png'>",
        });
        loading.present();
        this.informationProvider.getCountries()
            .then(function (value) {
            _this.countrys = value;
            loading.dismiss();
        }).catch(function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    TransactionPage.prototype.countrySelected = function () {
        var _this = this;
        this.informationProvider.getCurrencies(this.currency)
            .then(function (value) {
            _this.infoCountry = value;
            _this.monedas = value.coins;
        }).catch(function (error) {
            console.log(error);
        });
    };
    TransactionPage.prototype.monedaSelect = function (moneda) {
        var info = this.informationProvider.getCountriesID(this.currency);
        this.navCtrl.push('ModalTransactionPage', {
            'moneda': moneda,
            'infoCountry': this.infoCountry,
            'currency': this.currency,
            'pais_id': info.id,
            'code_phohe': info.phone_code,
            country: info
        });
    };
    TransactionPage.prototype.goPage = function (page) {
        this.buttonDisabbled = this.networkProvider.buttonDisabled;
        if (this.buttonDisabbled != true) {
            if (page == 'profile')
                //this.navCtrl.push("ProfilePage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
            else if (page == 'home')
                //this.navCtrl.push("HistoryPage");
                this.navCtrl.setPages([{ page: 'HomePage' }]);
            else if (page == "maps")
                //this.navCtrl.push("MapPage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'MapPage' }]);
            else if (page == "contact")
                //this.navCtrl.push("ContactsPage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ContactsPage' }]);
            else if (page == "precios")
                //this.navCtrl.push("CoinsPage")
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'CoinsPage' }]);
            else
                //this.navCtrl.push("TransactionPage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);
        }
        else {
            this.toastCtrl.create({
                message: 'no connection, please, turn on your connection internet',
                showCloseButton: true,
            }).present();
        }
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'TRANSACCION\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label stacked>{{\'SELECCIONAR_EL_PAIS_DE_DESTINO\'|translate}}</ion-label>\n  <ion-select *ngIf="countrys!=undefined" [(ngModel)]="currency" (ionChange)="countrySelected()" interface="popover">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n  <label stacked *ngIf="currency != \'USD\'">{{\'PRECIO_DEL_DOLAR_EN_EL_PAIS\'|translate}}</label>\n  <ion-item style="margin-bottom: 2%; margin-top: 2%" *ngIf="currency != \'USD\'">\n    <h6 class="txtboldblack">1 USD = {{infoCountry?.local_usd_value | currency}} {{currency}}</h6>\n  </ion-item>\n  <label stacked>{{\'INFORMACION_DE_LA_MONEDA\'|translate}}</label>\n  <ion-card style="margin-top: 2%" ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12>\n          <h4>Criptomoneda: {{moneda.full_name}}</h4>\n          <h6 *ngIf="currency != \'USD\'">1 {{moneda.full_name}} = {{moneda.usd_value | currency }} USD</h6>\n          <h5 stacked> 1 {{moneda.full_name}} = {{moneda.local_usd_value | currency }} {{currency}} </h5>\n        </ion-col>\n        <!-- <ion-col col-2>\n          <ion-icon name="ios-arrow-forward" large></ion-icon>\n        </ion-col> -->\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n	  <ion-row>\n		<ion-col class="center" col-2 (click)="goPage(\'precios\')">\n		  <img width="40" height="40" src="assets/newIcons/11.png">\n		  <p>Precios</p>\n		</ion-col>\n		<ion-col class="center" col-3 (click)="goPage(\'transaction\')">\n		  <img width="40" height="40" src="assets/icon/1.png">\n		  <p>{{\'TRANSACCION\'|translate}}</p>\n		</ion-col>\n		<ion-col class="center mar1Left" col-2 (click)="goPage(\'home\')">\n		  <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n		  <img width="40" height="40" src="assets/newIcons/12.png">\n		  <p>{{\'INICIO\'|translate}}</p>\n		</ion-col>\n		<ion-col class="center" col-2 (click)="goPage(\'maps\')">\n		  <img width="40" height="40" src="assets/icon/3.png">\n		  <p>{{\'MAPA\'|translate}}</p>\n		</ion-col>\n		<ion-col class="center" col-2 (click)="goPage(\'profile\')">\n		  <img width="40" height="40" src="assets/icon/4.png">\n		  <p>{{\'CUENTA\'|translate}}</p>\n		</ion-col>\n	  </ion-row>\n	</ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__["a" /* AuthUserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__["a" /* AuthUserProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__["a" /* LoadInformationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__["a" /* LoadInformationProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */]) === "function" && _j || Object])
=======
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'TRANSACCION\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label stacked>{{\'SELECCIONAR_EL_PAIS_DE_DESTINO\'|translate}}</ion-label>\n  <ion-select *ngIf="countrys!=undefined" [(ngModel)]="currency" (ionChange)="countrySelected()" interface="popover">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n  <label stacked *ngIf="currency != \'USD\'">{{\'PRECIO_DEL_DOLAR_EN_EL_PAIS\'|translate}}</label>\n  <ion-item style="margin-bottom: 2%; margin-top: 2%" *ngIf="currency != \'USD\'">\n    <h6 class="txtboldblack">1 USD = {{infoCountry?.local_usd_value | currency}} {{currency}}</h6>\n  </ion-item>\n  <label stacked>{{\'INFORMACION_DE_LA_MONEDA\'|translate}}</label>\n  <ion-card style="margin-top: 2%" ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12>\n          <h4>Criptomoneda: {{moneda.full_name}}</h4>\n          <h6 *ngIf="currency != \'USD\'">1 {{moneda.full_name}} = {{moneda.usd_value | currency }} USD</h6>\n          <h5 stacked> 1 {{moneda.full_name}} = {{moneda.local_usd_value | currency }} {{currency}} </h5>\n        </ion-col>\n        <!-- <ion-col col-2>\n          <ion-icon name="ios-arrow-forward" large></ion-icon>\n        </ion-col> -->\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__["a" /* LoadInformationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
    ], TransactionPage);
    return TransactionPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=transaction.js.map

/***/ })

});
//# sourceMappingURL=8.js.map