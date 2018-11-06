webpackJsonp([8],{

<<<<<<< HEAD
/***/ 733:
=======
/***/ 736:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(761);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_resume__ = __webpack_require__(761);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
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

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
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
    function TransactionPage(navParams, userProvider, toastCtrl, modalCtrl, informationProvider, navCtrl, loadingCtrl, errorProvider) {
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.informationProvider = informationProvider;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.errorProvider = errorProvider;
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
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'TRANSACCION\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label stacked>{{\'SELECCIONAR_EL_PAIS_DE_DESTINO\'|translate}}</ion-label>\n  <ion-select *ngIf="countrys!=undefined" [(ngModel)]="currency" (ionChange)="countrySelected()" interface="popover">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n  <label stacked *ngIf="currency != \'USD\'">{{\'PRECIO_DEL_DOLAR_EN_EL_PAIS\'|translate}}</label>\n  <ion-item style="margin-bottom: 2%; margin-top: 2%" *ngIf="currency != \'USD\'">\n    <h6 class="txtboldblack">1 USD = {{infoCountry?.local_usd_value | currency}} {{currency}}</h6>\n  </ion-item>\n  <label stacked>{{\'INFORMACION_DE_LA_MONEDA\'|translate}}</label>\n  <ion-card style="margin-top: 2%" ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12>\n          <h4>Criptomoneda: {{moneda.full_name}}</h4>\n          <h6 *ngIf="currency != \'USD\'">1 {{moneda.full_name}} = {{moneda.usd_value | currency }} USD</h6>\n          <h5 stacked> 1 {{moneda.full_name}} = {{moneda.local_usd_value | currency }} {{currency}} </h5>\n        </ion-col>\n        <!-- <ion-col col-2>\n          <ion-icon name="ios-arrow-forward" large></ion-icon>\n        </ion-col> -->\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/,
=======
            selector: 'page-transaction-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Resumen de la transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="information-circle"></ion-icon>\n      <label> A continuación</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>Transacción solicitada\n          <ion-icon name="checkmark-circle" end></ion-icon>\n        </li>\n        <li>1- Realizar pago (Dirección o Código QR)</li>\n        <li>2- Realizar el retiro del efectivo</li>\n\n      </ul>\n      <button class="buttonPayCash" ion-button outline block (click)="goMaps()"> Ver mapa</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="cash"></ion-icon>\n      <label stacked> Información de pago:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6 text-left>Total a pagar</ion-col>\n        <ion-col col-6 text-right> {{transaction.amount_btc | number : \'3.2-6\'}} {{coin.short_name}}</ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          Dirección de pago {{coin.full_name}}: <br>\n          <h2>{{coinhas.eye_hash}}</h2>\n          <button outline ion-button (click)="copiarToken()" class="buttonPayCash">Copiar</button>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          Código QR de pago:\n          <img src="{{qrlink}}">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="card"></ion-icon>\n      <label stacked> Información transacción:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-row>\n          <ion-col col-6 text-left>Nº Celular destino</ion-col>\n          <ion-col col-6 text-right>\n            {{transaction?.phone_user_des}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Criptomoneda</ion-col>\n          <ion-col col-6 text-right> {{coin.full_name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Fecha transacción</ion-col>\n          <ion-col col-6 text-right>{{transaction?.date_request | date:\'dd/MM/yyyy h:mma\'}}</ion-col>\n        </ion-row>\n        <!--<ion-row>-->\n          <!--<ion-col col-6 text-left>TRM: </ion-col>-->\n          <!--<ion-col col-6 text-right> {{result.money_local_to_usd}} {{country.currency}}</ion-col>-->\n        <!--</ion-row>-->\n        <hr>\n        <ion-row>\n          <ion-col col-12 text-center>\n            <h1>Total de la transacción</h1>\n          </ion-col>\n          <ion-col col-12 text-center>\n            {{transaction.amount_local | number: \'3.2-6\' }} {{country.currency}} = {{transaction.amount_usd}} USD\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_load_information_load_information__["a" /* LoadInformationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ })

});
//# sourceMappingURL=8.js.map