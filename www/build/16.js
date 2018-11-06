webpackJsonp([16],{

<<<<<<< HEAD
/***/ 723:
=======
/***/ 722:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(750);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LanguagePageModule = /** @class */ (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__language__["a" /* LanguagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__language__["a" /* LanguagePage */]),
            ],
        })
    ], LanguagePageModule);
    return LanguagePageModule;
}());

//# sourceMappingURL=language.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 750:
=======
/***/ 746:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lenguage_lenguage__ = __webpack_require__(170);
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
 * Generated class for the LanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LanguagePage = /** @class */ (function () {
    function LanguagePage(navCtrl, navParams, languageProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.languageProvider = languageProvider;
        this.menuCtrl = menuCtrl;
    }
<<<<<<< HEAD
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    LanguagePage.prototype.seleccionar = function (idioma) {
        this.languageProvider.seleccionar(idioma);
        this.languageProvider.setLenguage();
        this.navCtrl.setRoot('LoginPage');
=======
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
            //this.navCtrl.push("ProfilePage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
        else if (page == 'history')
            //this.navCtrl.push("HistoryPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'HistoryPage' }]);
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
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-language',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/'<ion-content class="img_background">\n  <ion-list>\n    <div class="center mrgTop">\n      <ion-item class="center">\n        <button ion-button  (click)="seleccionar(\'es\')" class="buttonPayCash">Español</button>\n      </ion-item>\n\n      <ion-item class="center">\n        <button ion-button  (click)="seleccionar(\'en\')" class="buttonPayCash">English</button>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/,
=======
            selector: 'page-home',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/home/home.html"*/'<ion-content class="BackGR">\n  <ion-row>\n    <ion-col>\n      <ion-img class="marginMenu textLeft" menuToggle width="25" height="25" src="assets/icon/Settings.png"></ion-img>\n    </ion-col>\n    <!-- <ion-col>\n      <ion-img class="marginMenu textRight backTransparent" width="80%" height="45px" src="assets/imgs/EPCLogo.png"></ion-img>\n    </ion-col> -->\n  </ion-row>\n  <div class="marg5">\n    <ion-row>\n      <ion-col class="center bounceInLeft">\n        <img class="icoAnim2 animated animated2 bounceOutRight" src="assets/imgs/Billete2.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="center mrg40Top bounceInLeft">\n        <img class="imgLogoAmin  animated animated2 ≈ bounceInLeft" src="assets/imgs/Billete.png">\n        <img class="imgLogo " src="assets/imgs/Mascota.png">\n      </ion-col>\n    </ion-row>\n    <ion-item class="center">\n      <button ion-button (click)="goPage(\'contact\')" class="buttonPayCash">{{\'PRUEBA_EYEPAYCASH\'|translate}}</button>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center" col-2 (click)="goPage(\'precios\')">\n        <img width="40" height="40" src="assets/newIcons/11.png">\n        <p>Precios</p>\n      </ion-col>\n      <ion-col class="center" col-3 (click)="goPage(\'transaction\')">\n        <img width="40" height="40" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center mar1Left" col-2 (click)="goPage(\'history\')">\n        <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n        <img width="40" height="40" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'maps\')">\n        <img width="40" height="40" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-2 (click)="goPage(\'profile\')">\n        <img width="40" height="40" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/home/home.html"*/
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lenguage_lenguage__["a" /* LenguageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ })

});
//# sourceMappingURL=16.js.map