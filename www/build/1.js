webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegNumberPhonePageModule", function() { return RegNumberPhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegNumberPhonePageModule = /** @class */ (function () {
    function RegNumberPhonePageModule() {
    }
    RegNumberPhonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__["a" /* RegNumberPhonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reg_number_phone__["a" /* RegNumberPhonePage */]),
            ],
        })
    ], RegNumberPhonePageModule);
    return RegNumberPhonePageModule;
}());

//# sourceMappingURL=reg-number-phone.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegNumberPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the RegNumberPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegNumberPhonePage = /** @class */ (function () {
    function RegNumberPhonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegNumberPhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegNumberPhonePage');
    };
    RegNumberPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reg-number-phone',template:/*ion-inline-start:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/'<ion-content class="imgBackground2 vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogoPpal.png"></ion-img>\n  </div>\n  <div style="margin-top:10%" class="center">\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n              <ion-input type="text">+</ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-item style="border-radius:10px;">\n              <ion-label fixed>Número</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-list>\n  </div>\n  <div class="center">\n    <button class="buttonBackground" (click)="navCancel()" ion-button small>Cancelar</button>\n    <button class="buttonBackground" (click)="presentAlert()" ion-button small>Registrarse</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegNumberPhonePage);
    return RegNumberPhonePage;
}());

//# sourceMappingURL=reg-number-phone.js.map

/***/ })

});
//# sourceMappingURL=1.js.map