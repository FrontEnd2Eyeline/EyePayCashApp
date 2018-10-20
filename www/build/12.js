webpackJsonp([12],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(725);
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
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(89);
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
    function HistoryPage(navCtrl, navParams, api, userProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
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
            spinner: 'dots',
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
            var toast = _this.toastCtrl.create({
                message: mensaje,
                closeButtonText: 'cerrar',
                showCloseButton: true,
                position: 'middle',
            });
            toast.present();
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
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history/history.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Historial de transacciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <ion-label>Filtro de transacciones por estado:</ion-label>\n      <ion-select [(ngModel)]="filtro.status" (ionChange)="getInfo()" interface="popover">\n        <ion-option value="0">Pendiente de pago</ion-option>\n        <ion-option value="1">Pagado y pendiente por retirar</ion-option>\n        <ion-option value="2">Pagado y retirado</ion-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-list>\n    <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            <h6>{{transaction.country.name}}</h6>\n          </ion-col>\n          <ion-col col-6>\n            {{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}\n            <!--transaction.date_request |date:\'MM/dd/yyyy h:mma\'}}-->\n          </ion-col>\n          <ion-col col-4>\n            {{transaction.coin.full_name}}\n          </ion-col>\n          <ion-col col-4>\n            {{transaction.amount_local | currency:transaction.country.currency+" " : 2}}\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="add"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=12.js.map