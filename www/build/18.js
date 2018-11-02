webpackJsonp([18],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryResumePageModule", function() { return HistoryResumePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_resume__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HistoryResumePageModule = /** @class */ (function () {
    function HistoryResumePageModule() {
    }
    HistoryResumePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history_resume__["a" /* HistoryResumePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history_resume__["a" /* HistoryResumePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], HistoryResumePageModule);
    return HistoryResumePageModule;
}());

//# sourceMappingURL=history-resume.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_formatter_date_formatter_date__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(382);
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
    function HistoryResumePage(navParams, navCtrl, dateLocal, clipboard) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.dateLocal = dateLocal;
        this.clipboard = clipboard;
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
    };
    HistoryResumePage.prototype.goMaps = function () {
        // this.navCtrl.push("MapPage")
        this.navCtrl.setPages([{ page: "HomePage" }, { page: "MapPage" }]);
    };
    HistoryResumePage.prototype.copiarToken = function () {
        this.clipboard.copy(this.coinHash.eye_hash);
    };
    HistoryResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history-resume/history-resume.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Resumen de la transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="BackGR3" padding>\n\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n      <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/30.png"></ion-img>\n      <label> Estado de la transacción</label>\n    </ion-card-header>\n    <ion-card-content>\n      <div>\n        <ion-row>\n          <ion-col col-1>\n            <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/34.png"></ion-img>\n          </ion-col>\n          <ion-col col-11 class="mrg1Top">\n            <h6>\n              Transacción solicitada\n            </h6>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row>\n          <ion-col col-1>\n            <ion-img *ngIf="historyInfo?.process_status==0" style="background: transparent" width="15" height="15" src="assets/newIcons/33.png"></ion-img>\n            <ion-img *ngIf="historyInfo?.process_status!=0" style="background: transparent" width="15" height="15" src="assets/newIcons/34.png"></ion-img>\n          </ion-col>\n          <ion-col col-11 class="mrg1Top">\n            <h6>\n              1- Realizar pago (Dirección o Código QR)\n            </h6>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row>\n          <ion-col col-1>\n            <ion-img *ngIf="historyInfo?.process_status==1 || historyInfo?.process_status==0" class="styleIcospeq" src="assets/newIcons/33.png"></ion-img>\n            <ion-img *ngIf="historyInfo?.process_status==2" class="styleIcospeq" src="assets/newIcons/34.png"></ion-img>\n          </ion-col>\n          <ion-col col-11 class="mrg1Top">\n            <h6>\n              2- Realizar el retiro del efectivo\n            </h6>\n          </ion-col>\n        </ion-row>\n      </div>\n      <button class="buttonPayCash" ion-button outline block (click)="goMaps()"> Ver mapa</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n      <ion-img class="mrg10Top" style="background: transparent" width="15" height="15" src="assets/newIcons/31.png"></ion-img>\n      <label stacked> Información transacción:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-row>\n          <ion-col col-6 text-left>Nº Celular destino</ion-col>\n          <ion-col col-6 text-right>\n            {{historyInfo?.phone_user_des}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Criptomoneda</ion-col>\n          <ion-col col-6 text-right> {{coin.full_name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Fecha transacción</ion-col>\n          <ion-col col-6 text-right>{{dateLocal.getDateLocale(historyInfo?.date_request)| date:\'dd/MM/yyyy h:mma\' }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Moneda local: </ion-col>\n          <ion-col col-6 text-right> {{historyInfo.amount_local | currency}} {{country.currency}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>TRM: </ion-col>\n          <ion-col col-6 text-right> {{comision.money_local_to_usd| currency}} {{country.currency}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 text-left>Costo {{currency}}: </ion-col>\n          <ion-col col-6 text-right> {{historyInfo.amount_usd|currency}} USD</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>Costo {{coin.full_name}}: </ion-col>\n          <ion-col col-6 text-right> {{historyInfo.amount_btc}} {{coin.short_name}}</ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="historyInfo?.process_status==0" class="backCardsTransp">\n    <ion-card-header>\n      <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/32.png"></ion-img>\n      <label stacked> Información de pago:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6 text-left>Total a pagar</ion-col>\n        <ion-col col-6 text-right> {{historyInfo.amount_btc}} {{coin.short_name}}</ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          Dirección de pago {{coin.full_name}}: <br>\n          <h2>{{coinHash.eye_hash}}</h2>\n          <button outline ion-button (click)="copiarToken()" class="buttonPayCash">Copiar</button>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          Código QR de pago:\n          <img src="{{coinHash.qr_url}}">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history-resume/history-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_formatter_date_formatter_date__["a" /* FormatterDateProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */]])
    ], HistoryResumePage);
    return HistoryResumePage;
}());

//# sourceMappingURL=history-resume.js.map

/***/ })

});
//# sourceMappingURL=18.js.map