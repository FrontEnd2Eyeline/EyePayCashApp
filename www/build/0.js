webpackJsonp([0],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResumePageModule", function() { return TransactionResumePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_resume__ = __webpack_require__(710);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionResumePageModule = /** @class */ (function () {
    function TransactionResumePageModule() {
    }
    TransactionResumePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_resume__["a" /* TransactionResumePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_resume__["a" /* TransactionResumePage */]),
            ],
        })
    ], TransactionResumePageModule);
    return TransactionResumePageModule;
}());

//# sourceMappingURL=transaction-resume.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the TransactionResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionResumePage = /** @class */ (function () {
    function TransactionResumePage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.result = null;
        this.transaction = null;
        this.coinhas = null;
        this.coin = null;
        this.country = null;
        this.getIngfo();
    }
    TransactionResumePage.prototype.getIngfo = function () {
        var parametros = this.navParams.data;
        this.result = parametros.result;
        this.transaction = parametros.transaction;
        this.coinhas = parametros.coinhas;
        this.coin = parametros.coin;
        this.country = parametros.country;
    };
    TransactionResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/'<!--\n  Generated template for the TransactionResumePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EYEPAYCASH</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h4>Resumen de la transacciòn</h4>\n<ion-card>\n  <ion-card-content>\n    <ion-row>\n      <label stacked>Nùmero de celular de destino</label>\n      <h4>{{transaction.phone_user_des}}</h4>\n      <label stacked>Nombre de la ciudad</label>\n      <h4>{{country.name}}</h4>\n      <label stacked>Costo local de la transacciòn</label>\n      <h4>{{transaction.amount_local}}</h4>\n      <label stacked>Nombre de la criptomoneda</label>\n      <h4>{{coin.full_name}}</h4>\n      <label stacked>Clave de transacciòn</label>\n      <h4>{{transaction.key_eyecash}}</h4>\n      <label stacked>Total en dolares</label>\n      <h4>{{transaction.amount_usd}}</h4>\n      <label stacked>Total en criptomoneda</label>\n      <h4>{{transaction.amount_btc}}</h4>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], TransactionResumePage);
    return TransactionResumePage;
}());

// "coin": {
//   "id": 1,
//     "full_name": "Bitcoin",
//     "short_name": "BTC",
//     "usd_value": "6575.4200",
//     "date_update": "2018-10-05 11:31:14",
//     "is_active": 1
// },
// "transaction": {
//   "user_id": 4,
//     "phone_user_des": "320347659",
//     "country_id": "1",
//     "amount_local": 200000,
//     "coin_id": "1",
//     "key_eyecash": "6555",
//     "date_request": "2018-10-05 21:42:42",
//     "key_request": "8448465643098825",
//     "amount_usd": "65.95",
//     "amount_btc": "0.01010582"
// },
// "coinhash": {
//   "id": 1,
//     "coin_id": 1,
//     "country_id": null,
//     "eye_hash": "1JZ7D5sDEibvz7gA1qyu3gMtjXtef1B993"
// },
// "qrlink": "http://10.160.170.115/eyepaycash/frontend/web/qr/1.png" 
//# sourceMappingURL=transaction-resume.js.map

/***/ })

});
//# sourceMappingURL=0.js.map