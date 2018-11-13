webpackJsonp([16],{

<<<<<<< HEAD
/***/ 726:
=======
<<<<<<< HEAD
/***/ 723:
=======
/***/ 722:
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(750);
=======
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(747);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(749);
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
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
<<<<<<< HEAD
/***/ 747:
=======
/***/ 749:
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lenguage_lenguage__ = __webpack_require__(170);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lenguage_lenguage__ = __webpack_require__(168);
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
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
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    LanguagePage.prototype.seleccionar = function (idioma) {
        this.languageProvider.seleccionar(idioma);
        this.languageProvider.setLenguage();
        this.navCtrl.setRoot('LoginPage');
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-language',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/'<ion-content class="img_background">\n  <ion-list>\n    <div class="center mrgTop">\n      <ion-item class="center">\n        <button ion-button  (click)="seleccionar(\'es\')" class="buttonPayCash">Español</button>\n      </ion-item>\n\n      <ion-item class="center">\n        <button ion-button  (click)="seleccionar(\'en\')" class="buttonPayCash">English</button>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/,
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