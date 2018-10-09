webpackJsonp([2],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
 * Generated class for the HistoryResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryResumePage = /** @class */ (function () {
    function HistoryResumePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historyInfo = null;
        this.country = null;
        this.coin = null;
        this.comision = null;
        this.coinHash = null;
        this.getInfo();
    }
    HistoryResumePage.prototype.getInfo = function () {
        this.historyInfo = this.navParams.get('transaction');
        this.country = this.historyInfo.country;
        this.coin = this.historyInfo.coin;
        this.comision = this.historyInfo.transactionCommission;
        this.coinHash = this.historyInfo.coinHash;
        console.log(this.historyInfo);
    };
    HistoryResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history-resume/history-resume.html"*/'<!--\n  Generated template for the HistoryResumePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Detalle de la transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <label stacked>Información del país</label>\n        <ion-row>\n          <ion-col col-6 text-left>\n            Nombre:\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{country?.name}}\n          </ion-col>\n          <ion-col col-6 text-left>\n            Moneda:\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{country?.currency}}\n          </ion-col>\n        </ion-row>\n        <label stacked>Información de {{coin?.full_name}}</label>\n        <ion-row>\n          <ion-col col-6 text-left>\n            Costo:\n          </ion-col>\n          <ion-col col-6 text-right>\n            USD {{comision.crypto_value_to_usd}}\n          </ion-col>\n        </ion-row>\n        <label stacked>Información de comisión</label>\n        <ion-row>\n          <ion-col col-6 text-left>\n            Total en USD\n          </ion-col>\n          <ion-col col-6 text-right>\n            USD {{comision?.total_in_usd}}\n          </ion-col>\n          <ion-col col-6 text-left>\n            Total en Cryptomoneda\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coin.short_name}} {{comision?.total_in_crypto}}\n          </ion-col>\n        </ion-row>\n        <label stacked>Información de transacción</label>\n        <ion-row>\n          <ion-col col-6 text-left>Costo en moneda local:</ion-col>\n          <ion-col col-6 text-right>{{historyInfo?.amount_local}}</ion-col>\n\n          <ion-col col-6 text-left>Costo en USD:</ion-col>\n          <ion-col col-6 text-right>{{historyInfo?.amount_usd}}</ion-col>\n\n          <ion-col col-6 text-left>Fecha de la transacción:</ion-col>\n          <ion-col col-6 text-right>{{historyInfo?.date_request}}</ion-col>\n\n          <ion-col col-6 text-left>Número móvil de destino:</ion-col>\n          <ion-col col-6 text-right>{{historyInfo?.phone_user_des}}</ion-col>\n        </ion-row>\n        <label stacked>Estado de la transacción</label>\n        <ion-row>\n          <ion-col col-4 text-left>Estado:</ion-col>\n          <ion-col col-8 text-right>\n            <p *ngIf="historyInfo?.process_status==0"><b>Estado: PENDIENTE DE PAGO </b></p>\n            <p *ngIf="historyInfo?.process_status==1"><b>Estado: PAGADO Y PENDIENTE POR RETIRAR </b></p>\n            <p *ngIf="historyInfo?.process_status==2"><b>Estado: PAGADO Y RETIRADO </b></p>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-col col-12 *ngIf="historyInfo?.process_status==0">\n          <h2 text-center>La transacción se encuentra pendiente por pagar. </h2>\n          <h2 text-center>Número de referencia para pagar:</h2>\n          <h1 text-center>{{coinHash?.eye_hash}}</h1>\n          <img src="{{coinHash.qr_url}}">\n        </ion-col>\n        <ion-col col-12 *ngIf="historyInfo?.process_status==1">\n          <h2 text-center>La transacción se encuentra disponible para retirar. </h2>\n          <h2 text-center>Número de referencia para retirar:</h2>\n          <h1 text-center>{{historyInfo.key_request}}</h1>\n        </ion-col>\n        <ion-col col-12>\n          <h2 text-center>Total de la transacción</h2>\n          <h1 text-center>{{historyInfo?.amount_btc}}</h1>\n        </ion-col>\n\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history-resume/history-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HistoryResumePage);
    return HistoryResumePage;
}());

//# sourceMappingURL=history-resume.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_resume_history_resume__ = __webpack_require__(708);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, api, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.transactions = null;
        this.links = null;
        this.meta = null;
        this.filtro = {
            status: 0,
            page: 1,
            perpage: 50
        };
        this.getInfo();
    }
    HistoryPage.prototype.getInfo = function () {
        var _this = this;
        this.api.get('app/transactions', this.userProvider, { 'expand': 'country,coin,transactionCommission,coinHash',
            'status': this.filtro.status,
            'page': this.filtro.page,
            'per-page': this.filtro.perpage }).then(function (data) {
            _this.transactions = data.items;
            _this.links = data.links;
            _this.meta = data.meta;
            _this.filtro.status = 0;
            _this.filtro.page = 1;
            _this.filtro.perpage = 1;
        });
    };
    HistoryPage.prototype.goDetalle = function (transaction) {
        console.log(transaction);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__history_resume_history_resume__["a" /* HistoryResumePage */], { 'transaction': transaction });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history/history.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Historial</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-6>\n      <ion-select [(ngModel)]="filtro.status">\n        <ion-option value="0">Estado pendiente</ion-option>\n        <ion-option value="1">Estado por retirar</ion-option>\n        <ion-option value="2">Estado terminadas</ion-option>\n      </ion-select>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button (click)="getInfo()">Buscar</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            {{transaction.country.name}}\n          </ion-col>\n          <ion-col col-6>\n            {{transaction.date_request |date:\'MM/dd/yyyy\'}}\n            <!--transaction.date_request |date:\'MM/dd/yyyy h:mma\'}}-->\n          </ion-col>\n          <ion-col col-6>\n            {{transaction.coin.full_name}}\n          </ion-col>\n          <ion-col col-6>\n            {{transaction.amount_local | currency:transaction.country.currency+" " : 2}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=2.js.map