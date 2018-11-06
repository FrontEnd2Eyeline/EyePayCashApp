webpackJsonp([18],{

<<<<<<< HEAD
/***/ 722:
=======
/***/ 717:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(749);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_resume__ = __webpack_require__(741);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 749:
=======
/***/ 741:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_formatter_date_formatter_date__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(382);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
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
<<<<<<< HEAD
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, api, userProvider, loadingCtrl, toastCtrl, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.errorProvider = errorProvider;
        this.transactions = null;
        this.links = null;
        this.meta = null;
        this.filtro = {
            status: 0,
            page: 1,
            perpage: 50
        };
=======
var HistoryResumePage = /** @class */ (function () {
    function HistoryResumePage(navParams, navCtrl, dateLocal, clipboard, toastCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.dateLocal = dateLocal;
        this.clipboard = clipboard;
        this.toastCtrl = toastCtrl;
        this.historyInfo = null;
        this.country = null;
        this.coin = null;
        this.comision = null;
        this.coinHash = null;
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        this.getInfo();
    }
    HistoryPage.prototype.getInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src='assets/imgs/buho.png'>",
        });
        loading.present();
        this.api.get('app/transactions', this.userProvider, {
            'expand': 'country,coin,transactionCommission,coinHash',
            'status': this.filtro.status,
            'page': this.filtro.page,
            'per-page': this.filtro.perpage
        }).then(function (data) {
            loading.dismiss();
            _this.transactions = data.items;
            _this.links = data.links;
            _this.meta = data.meta;
        }).catch(function (error) {
            loading.dismiss();
            var mensaje = '';
            error.error.forEach(function (data) {
                mensaje += data.message + "\n";
            });
            _this.errorProvider.obj.message = mensaje;
            _this.errorProvider.presentModal();
        });
    };
    HistoryPage.prototype.goDetalle = function (transaction) {
        this.navCtrl.push('HistoryResumePage', { 'transaction': transaction });
    };
    HistoryPage.prototype.getDateLocale = function (tr) {
        var date = new Date(Date.parse(tr));
        date.setUTCDate(0);
        date.setUTCDate(date.getDate());
        return date;
    };
<<<<<<< HEAD
    HistoryPage.prototype.goPage = function (page) {
        if (page == 'profile')
            this.navCtrl.push("ProfilePage");
        else if (page == 'history')
            this.navCtrl.push("HistoryPage");
        else if (page == "maps")
            this.navCtrl.push("MapPage");
        else if (page == "contact")
            this.navCtrl.push("ContactsPage");
        else
            this.navCtrl.push("TransactionPage");
=======
    HistoryResumePage.prototype.copiarToken = function () {
        this.clipboard.copy(this.coinHash.eye_hash);
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
    HistoryResumePage.prototype.dismissHandler = function () {
        console.info('Toast onDidDismiss()');
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/'<ion-header>\n  <div class="BackgroundPpal">\n    <ion-row>\n      <ion-col>\n        <img class="imgLogoWidth marginlogo" src="assets/imgs/EPCLogo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6>{{\'SALDO_POR_PAGAR\'|translate}}:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="styleSegment">\n      <ion-col>\n        <div padding>\n          <ion-segment class="backSegment marg4Top center " [(ngModel)]="filtro.status" (ionChange)="getInfo()">\n            <ion-segment-button value="0">\n              {{\'SOLICITADAS\'|translate}}\n            </ion-segment-button>\n            <ion-segment-button value="1">\n              {{\'POR_PAGAR\'|translate}}\n            </ion-segment-button>\n            <ion-segment-button value="2">\n              {{\'RETIRADAS\'|translate}}\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content>\n  <div padding [ngSwitch]="filtro.status">\n    <ion-list *ngSwitchCase="\'0\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText">\n          <img class="imgLogoWidth" src="assets/newIcons/27.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>{{\'MENSAJE_BIENVENIDA\'| translate}}</h1>\n          <p>{{\'FONDOS_SLIDE\' | translate}}</p>\n        </div>\n      </div>\n\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'1\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText" *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n          <img class="imgLogoWidthPen" src="assets/newIcons/26.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>Auuchh !</h1>\n          <p>{{\'TRANSACCIONES_ENVIADAS\'|translate}}</p>\n        </div>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'2\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText">\n          <img class="imgLogoWidth" src="assets/newIcons/25.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>Auuchh !</h1>\n          <p>{{\'TRANSACCIONES_RECIBIDAS\'|translate}}</p>\n        </div>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center2" col-3 (click)="goPage(\'transaction\')">\n        <img width="25" height="25" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'history\')">\n        <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n        <img width="25" height="25" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'maps\')">\n        <img width="25" height="25" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'profile\')">\n        <img width="25" height="25" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], HistoryPage);
    return HistoryPage;
=======
            selector: 'page-history-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history-resume/history-resume.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'RESUMEN_HISTORIAL\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="BackGR3" padding>\n\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n      <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/30.png"></ion-img>\n      <label>{{\'INFORMACION_TRANSACCION\'|translate}}</label>\n    </ion-card-header>\n    <ion-card-content>\n      <div>\n        <ion-row>\n          <ion-col col-1>\n            <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/34.png"></ion-img>\n          </ion-col>\n          <ion-col col-11 class="mrg1Top">\n            <h6>\n              {{\'TRANSACCION_SOLICITADA\'|translate}}\n            </h6>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row>\n          <ion-col col-1>\n            <ion-img *ngIf="historyInfo?.process_status==0" style="background: transparent" width="15" height="15" src="assets/newIcons/33.png"></ion-img>\n            <ion-img *ngIf="historyInfo?.process_status!=0" style="background: transparent" width="15" height="15" src="assets/newIcons/34.png"></ion-img>\n          </ion-col>\n          <ion-col col-11 class="mrg1Top">\n            <h6>\n              1- {{\'REALIZAR_PAGO\'|translate}}\n            </h6>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row>\n          <ion-col col-1>\n            <ion-img *ngIf="historyInfo?.process_status==1 || historyInfo?.process_status==0" class="styleIcospeq" src="assets/newIcons/33.png"></ion-img>\n            <ion-img *ngIf="historyInfo?.process_status==2" class="styleIcospeq" src="assets/newIcons/34.png"></ion-img>\n          </ion-col>\n          <ion-col col-11 class="mrg1Top">\n            <h6>\n              2- {{\'HACER_RETIRO_EFECTIVO\'|translate}}\n            </h6>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <button class="buttonPayCash" ion-button outline block (click)="goMaps()">{{\'VER_MAPA\'|translate}}</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n      <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/31.png"></ion-img>\n      <label stacked>{{\'INFO_TRANSACCION\'|translate}}:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-row>\n          <ion-col col-6 text-left>{{\'NRO_CELULAR_DESTINO\'|translate}}</ion-col>\n          <ion-col col-6 text-right>\n            {{historyInfo?.phone_user_des}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>{{\'TIPO_CRIPTOMONEDA\'|translate}}</ion-col>\n          <ion-col col-6 text-right> {{coin.full_name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>{{\'FECHA_TRANSACCION\'|translate}}</ion-col>\n          <ion-col col-6 text-right>{{dateLocal.getDateLocale(historyInfo?.date_request)| date:\'dd/MM/yyyy h:mma\' }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>{{\'MONEDA_LOCAL\'|translate}}: </ion-col>\n          <ion-col col-6 text-right> {{historyInfo.amount_local | currency}} {{country.currency}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>{{\'COSTO\'|translate}} {{currency}}: </ion-col>\n          <ion-col col-6 text-right> {{historyInfo.amount_usd|currency}} USD</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-left>{{\'COSTO_BITCOIN\'|translate}} {{coin.full_name}}: </ion-col>\n          <ion-col col-12 text-right>{{historyInfo.amount_btc|number: \'3.2-6\'}} {{coin.short_name}}</ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="historyInfo?.process_status==0" class="backCardsTransp">\n    <ion-card-header>\n      <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/32.png"></ion-img>\n      <label stacked> Información de pago{{\'INFORMACION_PAGO\'| translate}}:</label>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6 text-left>{{\'TOTAL_A_PAGAR\'|translate}}</ion-col>\n        <ion-col col-6 text-right> {{historyInfo.amount_btc | number: \'3.2-6\'}} {{coin.short_name}}</ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          {{\'DIRECCION_PAGO_BITCOIN\'|translate}} {{coin.full_name}}: <br>\n          <h2>{{coinHash.eye_hash}}</h2>\n          <button outline ion-button (click)="copiarToken()" class="buttonPayCash">{{\'COPIAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          {{\'CODIGO_QR_PAGO\'|translate}}:\n          <img src="{{coinHash.qr_url}}">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history-resume/history-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_formatter_date_formatter_date__["a" /* FormatterDateProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], HistoryResumePage);
    return HistoryResumePage;
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=18.js.map