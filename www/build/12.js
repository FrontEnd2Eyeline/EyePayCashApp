webpackJsonp([12],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(737);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__language__["a" /* LanguagePage */]),
            ],
        })
    ], LanguagePageModule);
    return LanguagePageModule;
}());

//# sourceMappingURL=language.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lenguage_lenguage__ = __webpack_require__(166);
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
    function LanguagePage(navCtrl, navParams, languageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.languageProvider = languageProvider;
    }
    LanguagePage.prototype.seleccionar = function (idioma) {
        this.languageProvider.seleccionar(idioma);
        this.languageProvider.setLenguage();
        this.navCtrl.setRoot('LoginPage');
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-language',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/'\n\n\n<<<<<<< HEAD\n<<<<<<< HEAD\n<ion-content class="img_background" style="text-align: center">\n  <ion-list style="\n    text-align: center;\n    position: absolute;\n    top: 25%;\n    left: 23%;\n    right: 23%;\n">\n    <ion-row>\n      <ion-col col-12>\n        <img src="assets/imgs/colombia.png" style="max-width: 60%" alt="" (click)="seleccionar(\'es\')">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <img src="assets/imgs/usa.png" style="max-width: 60%" alt="" (click)="seleccionar(\'en\')">\n      </ion-col>\n    </ion-row>\n=======\n=======\n>>>>>>> parent of d19dc66... Vers 1.1.1\n<ion-content class="img_background">\n  <ion-list style="\n    text-align: center;\n    position: absolute;\n    top: 10%;">\n    <img src="assets/imgs/colombia.png" alt="" (click)="seleccionar(\'es\')">\n    <img src="assets/imgs/usa.png" alt="" (click)="seleccionar(\'en\')">\n<<<<<<< HEAD\n>>>>>>> parent of d19dc66... Vers 1.1.1\n=======\n>>>>>>> parent of d19dc66... Vers 1.1.1\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lenguage_lenguage__["a" /* LenguageProvider */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ })

});
//# sourceMappingURL=12.js.map