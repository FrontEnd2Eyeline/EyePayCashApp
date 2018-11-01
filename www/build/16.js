webpackJsonp([16],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(93);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(67);
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
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/'<ion-header>\n  <div class="BackgroundPpal">\n    <ion-row>\n      <ion-col>\n        <img class="imgLogoWidth marginlogo" src="assets/imgs/EPCLogo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6> Saldo por pagar :</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="styleSegment">\n      <ion-col>\n        <div padding>\n          <ion-segment class="backSegment marg4Top center " [(ngModel)]="filtro.status" (ionChange)="getInfo()">\n            <ion-segment-button value="0">\n              Todas\n            </ion-segment-button>\n            <ion-segment-button value="1">\n              Enviadas\n            </ion-segment-button>\n            <ion-segment-button value="2">\n              Recibidas\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n  <ion-content >\n  <div padding [ngSwitch]="filtro.status">\n    <ion-list *ngSwitchCase="\'0\'">\n      <div class="centerIcoText">\n        <img class="imgLogoWidth" src="assets/newIcons/27.png">\n      </div>\n      <div class="centerIcoText">\n        <h1>Bienvenido a EyePayCash</h1>\n        <p>Para recibir fondos desliza hacia la derecha y para enviarlos desliza hacia la izquierda.</p>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              {{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}\n              <!--transaction.date_request |date:\'MM/dd/yyyy h:mma\'}}-->\n            </ion-col>\n            <ion-col col-4>\n              {{transaction.coin.full_name}}\n            </ion-col>\n            <ion-col col-5>\n              {{transaction.amount_local | currency:transaction.country.currency+" " : 2}}\n            </ion-col>\n            <ion-col col-3>\n              <ion-icon name="add"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'1\'">\n      <div class="centerIcoText">\n        <img class="imgLogoWidthPen" src="assets/newIcons/26.png">\n      </div>\n      <div class="centerIcoText">\n        <h1>Auuchh !</h1>\n        <p>No tiene transacciones enviadas aún.</p>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              {{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}\n              <!--transaction.date_request |date:\'MM/dd/yyyy h:mma\'}}-->\n            </ion-col>\n            <ion-col col-4>\n              {{transaction.coin.full_name}}\n            </ion-col>\n            <ion-col col-5>\n              {{transaction.amount_local | currency:transaction.country.currency+" " : 2}}\n            </ion-col>\n            <ion-col col-3>\n              <ion-icon name="add"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'2\'">\n      <div class="centerIcoText">\n        <img class="imgLogoWidth" src="assets/newIcons/25.png">\n      </div>\n      <div class="centerIcoText">\n        <h1>Auuchh !</h1>\n        <p>No tiene transacciones recibidas aún.</p>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              {{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}\n              <!--transaction.date_request |date:\'MM/dd/yyyy h:mma\'}}-->\n            </ion-col>\n            <ion-col col-4>\n              {{transaction.coin.full_name}}\n            </ion-col>\n            <ion-col col-5>\n              {{transaction.amount_local | currency:transaction.country.currency+" " : 2}}\n            </ion-col>\n            <ion-col col-3>\n              <ion-icon name="add"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n\n  </div>\n</ion-content>\n\n\n<!-- <ion-row>\n    <ion-col col-12>\n      <ion-label>Filtro de transacciones por estado:</ion-label>\n      <ion-select [(ngModel)]="filtro.status" (ionChange)="getInfo()" interface="popover">\n        <ion-option value="0">Pendiente de pago</ion-option>\n        <ion-option value="1">Pagado y pendiente por retirar</ion-option>\n        <ion-option value="2">Pagado y retirado</ion-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-list>\n    <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            <h6>{{transaction.country.name}}</h6>\n          </ion-col>\n          <ion-col col-6>\n            {{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}\n            transaction.date_request |date:\'MM/dd/yyyy h:mma\'}}\n          </ion-col>\n          <ion-col col-4>\n            {{transaction.coin.full_name}}\n          </ion-col>\n          <ion-col col-4>\n            {{transaction.amount_local | currency:transaction.country.currency+" " : 2}}\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="add"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list> -->'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=16.js.map