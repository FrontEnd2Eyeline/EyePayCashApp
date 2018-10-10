webpackJsonp([4],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResumePageModule", function() { return TransactionResumePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_resume__ = __webpack_require__(719);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
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

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
    function TransactionResumePage(navParams, loadingCtrl) {
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.result = null;
        this.transaction = null;
        this.coinhas = null;
        this.coin = null;
        this.country = null;
        this.qrlink = null;
        this.getIngfo();
    }
    TransactionResumePage.prototype.getIngfo = function () {
        var parametros = this.navParams.data;
        this.result = parametros.result;
        this.transaction = parametros.transaction;
        this.coinhas = parametros.coinhash;
        this.coin = parametros.coin;
        this.country = parametros.country;
        this.qrlink = parametros.qrlink;
    };
    TransactionResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resumen de la transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h4>Resumen de la transacción</h4>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <label stacked>Información de la transacción:</label>\n        <ion-row>\n          <ion-col col-6 text-left>Nº Celular destino</ion-col>\n          <ion-col col-6 text-right>\n            {{transaction?.phone_user_des}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Nombre Criptomoneda</ion-col>\n          <ion-col col-6 text-right> {{coin.full_name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Fecha transacción</ion-col>\n          <ion-col col-6 text-right>{{transaction?.date_request}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Costo moneda local</ion-col>\n          <ion-col col-6 text-right> {{result.money_local_to_usd}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Costo en USD</ion-col>\n          <ion-col col-6 text-right> {{transaction?.amount_usd}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Costo en criptomoneda</ion-col>\n          <ion-col col-6 text-right> {{transaction?.amount_btc}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Costo comisión</ion-col>\n          <ion-col col-6 text-right> {{result.commission.CRYPTO}}</ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col col-12>\n            <h2>Dirección {{coin.full_name}} </h2>\n            <h2>{{coinhas.eye_hash}}</h2>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <img src="{{qrlink}}">\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], TransactionResumePage);
    return TransactionResumePage;
}());

//# sourceMappingURL=transaction-resume.js.map

/***/ })

});
//# sourceMappingURL=4.js.map