webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegNumberPhonePageModule", function() { return RegNumberPhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__ = __webpack_require__(275);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegNumberPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    RegNumberPhonePage.prototype.navCancel2 = function () {
        this.navCtrl.push('HomePage');
    };
    RegNumberPhonePage.prototype.navPinLockPage = function () {
        this.navCtrl.push('PinlockPage');
    };
    RegNumberPhonePage.prototype.navRegisterPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    RegNumberPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reg-number-phone',template:/*ion-inline-start:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/'<ion-content class="imgBackground2 vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img style="margin-bottom: 10%;" class="logo" src="assets/imgs/EPCLogoPpal.png"></ion-img>\n    <div class="center" style="margin-top: -30%">\n      <ion-label style="color:white" class="center"> Enviaremos un CÓDIGO de verificación a el número<br> que registres\n        a continuación.</ion-label>\n    </div>\n  </div>\n\n  <div style="margin-top:10%" class="center">\n\n    <ion-list>\n      <ion-grid class="center">\n        <ion-row>\n          <ion-col col-2>\n            <ion-item style="border-radius:10px; width: 65px">\n              <ion-label> + </ion-label>\n              <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="gender">\n                <ion-option value="2">57</ion-option>\n                <ion-option value="3">58</ion-option>\n                <ion-option value="4">59</ion-option>\n                <ion-option value="5">60</ion-option>\n                <ion-option value="6">61</ion-option>\n                <ion-option value="7">62</ion-option>\n                <ion-option value="8">63</ion-option>\n                <ion-option value="9">64</ion-option>\n                <ion-option value="10">65</ion-option>\n                <ion-option value="11">66</ion-option>\n                <ion-option value="12">67</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10>\n            <ion-item style="border-radius:10px; width: 122%; margin-left: -20%">\n              <ion-input placeholder="Número celular" min="10" max="10" required type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-item style="border-radius:10px; color: white; background: transparent; border-radius: 10px; text-align: center">\n          <ion-input placeholder="Introduce el coódigo" maxlength="6" required style="text-align: center" type="text"></ion-input>\n        </ion-item>\n    </ion-list>\n  </div>\n  <div class="center">\n    <button style="border-radius: 0%" class="buttonBackground" (click)="navCancel()" ion-button small>Cancelar</button>\n    <button style="border-radius: 0%" class="buttonBackground" (click)="navRegisterPage()" ion-button small>Enviar</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegNumberPhonePage);
    return RegNumberPhonePage;
}());

//# sourceMappingURL=reg-number-phone.js.map

/***/ })

});
//# sourceMappingURL=2.js.map