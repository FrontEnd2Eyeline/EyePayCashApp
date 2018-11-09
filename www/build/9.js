webpackJsonp([9],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResumePageModule", function() { return TransactionResumePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_resume__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_resume__["a" /* TransactionResumePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], TransactionResumePageModule);
    return TransactionResumePageModule;
}());

//# sourceMappingURL=transaction-resume.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionResumePage = /** @class */ (function () {
    function TransactionResumePage(navCtrl, navParams, loadingCtrl, clipboard, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.clipboard = clipboard;
        this.toastCtrl = toastCtrl;
        this.result = null;
        this.transaction = null;
        this.coinhas = null;
        this.coin = null;
        this.country = null;
        this.qrlink = null;
        this.getIngfo();
    }
    TransactionResumePage.prototype.getIngfo = function () {
        // Toda el response de la transacción
        var parametros = this.navParams.data;
        this.result = parametros.result;
        this.coin = parametros.coin;
        this.country = parametros.country;
        this.transaction = parametros.transaction;
        this.coinhas = parametros.coinhash;
        this.qrlink = parametros.qrlink;
    };
    TransactionResumePage.prototype.goMaps = function () {
        // this.navCtrl.push("MapPage");
        this.navCtrl.setPages([
            { page: 'HomePage' },
            { page: 'MapPage' },
        ]);
    };
    TransactionResumePage.prototype.copiarToken = function () {
        this.clipboard.copy(this.coinhas.eye_hash);
        var toast = this.toastCtrl.create({
            message: 'Copiado',
            duration: 3000,
            position: 'middle'
            //showCloseButton: true,
            //closeButtonText: OK
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    TransactionResumePage.prototype.dismissHandler = function () {
        console.info('Toast onDidDismiss()');
    };
    TransactionResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction-resume',template:/*ion-inline-start:"/Users/frontend/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Resumen de la transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="information-circle"></ion-icon>\n      <label> A continuación</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>Transacción solicitada\n          <ion-icon name="checkmark-circle" end></ion-icon>\n        </li>\n        <li>1- Realizar pago (Dirección o Código QR)</li>\n        <li>2- Realizar el retiro del efectivo</li>\n\n      </ul>\n      <button class="buttonPayCash" ion-button outline block (click)="goMaps()"> Ver mapa</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="cash"></ion-icon>\n      <label stacked> Información de pago:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6 text-left>Total a pagar</ion-col>\n        <ion-col col-6 text-right> {{transaction.amount_btc | number : \'3.2-6\'}} {{coin.short_name}}</ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          Dirección de pago {{coin.full_name}}: <br>\n          <h2>{{coinhas.eye_hash}}</h2>\n          <button outline ion-button (click)="copiarToken()" class="buttonPayCash">Copiar</button>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          Código QR de pago:\n          <img src="{{qrlink}}">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="card"></ion-icon>\n      <label stacked> Información transacción:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-row>\n          <ion-col col-6 text-left>Nº Celular destino</ion-col>\n          <ion-col col-6 text-right>\n            {{transaction?.phone_user_des}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Criptomoneda</ion-col>\n          <ion-col col-6 text-right> {{coin.full_name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Fecha transacción</ion-col>\n          <ion-col col-6 text-right>{{transaction?.date_request | date:\'dd/MM/yyyy h:mma\'}}</ion-col>\n        </ion-row>\n        <!--<ion-row>-->\n          <!--<ion-col col-6 text-left>TRM: </ion-col>-->\n          <!--<ion-col col-6 text-right> {{result.money_local_to_usd}} {{country.currency}}</ion-col>-->\n        <!--</ion-row>-->\n        <hr>\n        <ion-row>\n          <ion-col col-12 text-center>\n            <h1>Total de la transacción</h1>\n          </ion-col>\n          <ion-col col-12 text-center>\n            {{transaction.amount_local | number: \'3.2-6\' }} {{country.currency}} = {{transaction.amount_usd}} USD\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/frontend/Documents/GitHub/eyepaycashapp/src/pages/transaction-resume/transaction-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], TransactionResumePage);
    return TransactionResumePage;
}());

//# sourceMappingURL=transaction-resume.js.map

/***/ })

});
//# sourceMappingURL=9.js.map