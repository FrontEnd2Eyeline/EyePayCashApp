webpackJsonp([17],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(747);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(744);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 747:
=======
/***/ 744:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, toastCtrl, api, userProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.menuCtrl = menuCtrl;
        this.count = 0;
        this.result = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.getInfo();
    };
    HomePage.prototype.getInfo = function () {
        var _this = this;
        this.api.get('app/transactions', this.userProvider, { 'status': 0 }).then(function (data) {
            _this.count = data.items.length;
        }).catch(function (error) {
        });
    };
<<<<<<< HEAD
    HomePage.prototype.goPage = function (page) {
=======
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
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        if (page == 'profile')
            //this.navCtrl.push("ProfilePage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
        else if (page == 'history')
            //this.navCtrl.push("HistoryPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'HistoryPage' }]);
        else if (page == "maps")
            //this.navCtrl.push("MapPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'MapPage' }]);
        else if (page == "contact")
<<<<<<< HEAD
            this.navCtrl.push("ContactsPage");
        else if (page == "precios")
            this.navCtrl.push("CoinsPage");
=======
            //this.navCtrl.push("ContactsPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ContactsPage' }]);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        else
            //this.navCtrl.push("TransactionPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/home/home.html"*/'<ion-content class="BackGR">\n\n  <ion-row>\n    <ion-col>\n      <ion-img class="marginMenu textLeft" menuToggle width="25" height="25" src="assets/icon/Settings.png"></ion-img>\n    </ion-col>\n    <!-- <ion-col>\n      <ion-img class="marginMenu textRight backTransparent" width="80%" height="45px" src="assets/imgs/EPCLogo.png"></ion-img>\n    </ion-col> -->\n\n  </ion-row>\n\n  <div class="marg5">\n    <ion-row>\n      <ion-col class="center bounceInLeft">\n        <img class="icoAnim2 animated animated2 bounceOutRight" src="assets/imgs/Billete2.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="center mrg40Top bounceInLeft">\n        <img class="imgLogoAmin  animated animated2 ≈ bounceInLeft" src="assets/imgs/Billete.png">\n        <img class="imgLogo " src="assets/imgs/Mascota.png">\n      </ion-col>\n    </ion-row>\n    <ion-item class="center">\n      <button ion-button (click)="goPage(\'contact\')" class="buttonPayCash">{{\'PRUEBA_EYEPAYCASH\'|translate}}</button>\n    </ion-item>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center" col-2 (click)="goPage(\'precios\')">\n        <img width="25" height="25" src="assets/newIcons/11.png">\n        <p>Precios</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'transaction\')">\n        <img width="25" height="25" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'history\')">\n        <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n        <img width="25" height="25" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'maps\')">\n        <img width="25" height="25" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'profile\')">\n        <img width="25" height="25" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/home/home.html"*/
=======
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/'<ion-header>\n  <div class="BackgroundPpal">\n    <ion-row>\n      <ion-col>\n        <img class="imgLogoWidth marginlogo" src="assets/imgs/EPCLogo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6>{{\'SALDO_POR_PAGAR\'|translate}}:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="styleSegment">\n      <ion-col>\n        <div padding>\n          <ion-segment class="backSegment marg4Top center " [(ngModel)]="filtro.status" (ionChange)="getInfo()">\n            <ion-segment-button value="0">\n              {{\'SOLICITADAS\'|translate}}\n            </ion-segment-button>\n            <ion-segment-button value="1">\n              {{\'POR_PAGAR\'|translate}}\n            </ion-segment-button>\n            <ion-segment-button value="2">\n              {{\'RETIRADAS\'|translate}}\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content>\n  <div padding [ngSwitch]="filtro.status">\n    <ion-list *ngSwitchCase="\'0\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText">\n          <img class="imgLogoWidth" src="assets/newIcons/27.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>{{\'MENSAJE_BIENVENIDA\'| translate}}</h1>\n          <p>{{\'FONDOS_SLIDE\' | translate}}</p>\n        </div>\n      </div>\n\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'1\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText" *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n          <img class="imgLogoWidthPen" src="assets/newIcons/26.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>Auuchh !</h1>\n          <p>{{\'TRANSACCIONES_ENVIADAS\'|translate}}</p>\n        </div>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'2\'">\n      <div *ngIf="( (transactions!= null)  && (transactions.length)<=0)">\n        <div class="centerIcoText">\n          <img class="imgLogoWidth" src="assets/newIcons/25.png">\n        </div>\n        <div class="centerIcoText">\n          <h1>Auuchh !</h1>\n          <p>{{\'TRANSACCIONES_RECIBIDAS\'|translate}}</p>\n        </div>\n      </div>\n      <ion-card *ngFor="let transaction of transactions" (click)="goDetalle(transaction)" class="center bground">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-6>\n              <h6>{{transaction.country.name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{getDateLocale(transaction.date_request) |date:\'MM/dd/yyyy\'}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.coin.full_name}}</h6>\n            </ion-col>\n            <ion-col col-6>\n              <h6>{{transaction.amount_local | currency:transaction.country.currency+" " : 2}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center2" col-3 (click)="goPage(\'transaction\')">\n        <img width="25" height="25" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'history\')">\n        <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n        <img width="25" height="25" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'maps\')">\n        <img width="25" height="25" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'profile\')">\n        <img width="25" height="25" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/history/history.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map