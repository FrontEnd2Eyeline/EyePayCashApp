webpackJsonp([18],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(748);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(168);
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
    function HistoryPage(navCtrl, navParams, api, userProvider, loadingCtrl, toastCtrl, errorProvider, networkProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.errorProvider = errorProvider;
        this.networkProvider = networkProvider;
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
            spinner: 'crescent',
            cssClass: 'my-loading',
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
        //this.navCtrl.setPages([{page: 'HistoryResume'}, {page: 'Transaction'}]);
    };
    HistoryPage.prototype.getDateLocale = function (tr) {
        var date = new Date(Date.parse(tr));
        date.setUTCDate(0);
        date.setUTCDate(date.getDate());
        return date;
    };
    HistoryPage.prototype.goPage = function (page) {
        this.buttonDisabbled = this.networkProvider.buttonDisabled;
        if (this.buttonDisabbled != true) {
            if (page == 'profile')
                //this.navCtrl.push("ProfilePage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
            else if (page == 'home')
                //this.navCtrl.push("HistoryPage");
                this.navCtrl.setPages([{ page: 'HomePage' }]);
            else if (page == "maps")
                //this.navCtrl.push("MapPage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'MapPage' }]);
            else if (page == "contact")
                //this.navCtrl.push("ContactsPage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ContactsPage' }]);
            else if (page == "precios")
                //this.navCtrl.push("CoinsPage")
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'CoinsPage' }]);
            else
                //this.navCtrl.push("TransactionPage");
                this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);
        }
        else {
            this.toastCtrl.create({
                message: 'no connection, please, turn on your connection internet',
                showCloseButton: true,
            }).present();
        }
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/'<ion-header>\n  <div class="BackgroundPpal">\n    <ion-row>\n      <ion-col>\n        <img class="imgLogoWidth marginlogo" src="assets/imgs/EPCLogo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6>{{\'SALDO_POR_PAGAR\'|translate}}:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="styleSegment">\n      <ion-col>\n        <div padding>\n          <ion-segment class="backSegment marg4Top center " [(ngModel)]="filtro.status" (ionChange)="getInfo()">\n            <ion-segment-button value="0">\n              {{\'SOLICITADAS\'|translate}}\n            </ion-segment-button>\n            <ion-segment-button value="1">\n              {{\'POR_PAGAR\'|translate}}\n            </ion-segment-button>\n            <ion-segment-button value="2">\n              {{\'RETIRADAS\'|translate}}\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content>\n  <div padding [ngSwitch]="filtro.status">\n    <ion-list *ngSwitchCase="\'0\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText">\n          <img class="imgLogoWidth" src="assets/newIcons/27.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>{{\'MENSAJE_BIENVENIDA\'| translate}}</h1>\n          <p>{{\'FONDOS_SLIDE\' | translate}}</p>\n        </div>\n      </div>\n\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'1\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText" *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n          <img class="imgLogoWidthPen" src="assets/newIcons/26.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>Auuchh !</h1>\n          <p>{{\'TRANSACCIONES_ENVIADAS\'|translate}}</p>\n        </div>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'2\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText">\n          <img class="imgLogoWidth" src="assets/newIcons/25.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>Auuchh !</h1>\n          <p>{{\'TRANSACCIONES_RECIBIDAS\'|translate}}</p>\n        </div>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n	  <ion-row>\n		<ion-col class="center" col-2 (click)="goPage(\'precios\')">\n		  <img width="40" height="40" src="assets/newIcons/11.png">\n		  <p>Precios</p>\n		</ion-col>\n		<ion-col class="center" col-3 (click)="goPage(\'transaction\')">\n		  <img width="40" height="40" src="assets/icon/1.png">\n		  <p>{{\'TRANSACCION\'|translate}}</p>\n		</ion-col>\n		<ion-col class="center mar1Left" col-2 (click)="goPage(\'home\')">\n		  <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n		  <img width="40" height="40" src="assets/newIcons/12.png">\n		  <p>{{\'INICIO\'|translate}}</p>\n		</ion-col>\n		<ion-col class="center" col-2 (click)="goPage(\'maps\')">\n		  <img width="40" height="40" src="assets/icon/3.png">\n		  <p>{{\'MAPA\'|translate}}</p>\n		</ion-col>\n		<ion-col class="center" col-2 (click)="goPage(\'profile\')">\n		  <img width="40" height="40" src="assets/icon/4.png">\n		  <p>{{\'CUENTA\'|translate}}</p>\n		</ion-col>\n	  </ion-row>\n	</ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */]) === "function" && _h || Object])
    ], HistoryPage);
    return HistoryPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=18.js.map