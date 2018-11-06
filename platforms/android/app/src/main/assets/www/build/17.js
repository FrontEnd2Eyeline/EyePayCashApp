webpackJsonp([17],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(747);
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

/***/ 747:
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
    HomePage.prototype.goPage = function (page) {
        if (page == 'profile')
            this.navCtrl.push("ProfilePage");
        else if (page == 'history')
            this.navCtrl.push("HistoryPage");
        else if (page == "maps")
            this.navCtrl.push("MapPage");
        else if (page == "contact")
            this.navCtrl.push("ContactsPage");
        else if (page == "precios")
            this.navCtrl.push("CoinsPage");
        else
            this.navCtrl.push("TransactionPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/home/home.html"*/'<ion-content class="BackGR">\n\n  <ion-row>\n    <ion-col>\n      <ion-img class="marginMenu textLeft" menuToggle width="25" height="25" src="assets/icon/Settings.png"></ion-img>\n    </ion-col>\n    <!-- <ion-col>\n      <ion-img class="marginMenu textRight backTransparent" width="80%" height="45px" src="assets/imgs/EPCLogo.png"></ion-img>\n    </ion-col> -->\n\n  </ion-row>\n\n  <div class="marg5">\n    <ion-row>\n      <ion-col class="center bounceInLeft">\n        <img class="icoAnim2 animated animated2 bounceOutRight" src="assets/imgs/Billete2.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="center mrg40Top bounceInLeft">\n        <img class="imgLogoAmin  animated animated2 ≈ bounceInLeft" src="assets/imgs/Billete.png">\n        <img class="imgLogo " src="assets/imgs/Mascota.png">\n      </ion-col>\n    </ion-row>\n    <ion-item class="center">\n      <button ion-button (click)="goPage(\'contact\')" class="buttonPayCash">{{\'PRUEBA_EYEPAYCASH\'|translate}}</button>\n    </ion-item>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center" col-2 (click)="goPage(\'precios\')">\n        <img width="25" height="25" src="assets/newIcons/11.png">\n        <p>Precios</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'transaction\')">\n        <img width="25" height="25" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'history\')">\n        <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n        <img width="25" height="25" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'maps\')">\n        <img width="25" height="25" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'profile\')">\n        <img width="25" height="25" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/home/home.html"*/
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