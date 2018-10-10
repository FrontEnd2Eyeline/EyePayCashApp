webpackJsonp([3],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(721);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */]),
            ],
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_load_information_load_information__ = __webpack_require__(158);
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
    function TransactionPage(navParams, api, userProvider, loadingCtrl, toastCtrl, modalCtrl, informationProvider) {
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.informationProvider = informationProvider;
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
        this.informationProvider.getCountries()
            .then(function (value) {
            _this.countrys = value;
        });
    };
    TransactionPage.prototype.countrySelected = function () {
        var _this = this;
        this.informationProvider.getCurrencies(this.currency)
            .then(function (value) {
            _this.infoCountry = value;
            _this.monedas = value.coins;
        });
    };
    TransactionPage.prototype.monedaSelect = function (moneda) {
        var modalTransaction = this.modalCtrl.create('ModalTransactionPage', {
            'moneda': moneda,
            'infoCountry': this.infoCountry,
            'currency': this.currency,
            'pais_id': this.informationProvider.getCountriesID(this.currency)
        });
        modalTransaction.present();
        modalTransaction.onDidDismiss(function (data) {
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TRANSACCIONES</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label class="txtLbl" stacked>Seleccione país de interés</ion-label>\n  <ion-select [(ngModel)]="currency" (ionChange)="countrySelected()">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n  <label stacked *ngIf="currency != \'USD\'">Precio del dolar en el paìs</label>\n  <ion-item *ngIf="currency != \'USD\'">\n    <h6 class="txtboldblack">1 USD = {{infoCountry?.local_usd_value | currency}} {{currency}}</h6>\n  </ion-item>\n  <label stacked>Información de las monedas</label>\n  <ion-card ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-10>\n          <h4>Nombre: {{moneda.full_name}}</h4>\n          <h6 *ngIf="currency != \'USD\'">1 {{moneda.full_name}} = {{moneda.usd_value | currency }} USD</h6>\n          <h5 stacked> 1 {{moneda.full_name}} = {{moneda.local_usd_value | currency }} {{currency}} </h5>\n        </ion-col>\n        <ion-col col-2 class="margIcon">\n          <ion-icon name="add"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_load_information_load_information__["a" /* LoadInformationProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ })

});
//# sourceMappingURL=3.js.map