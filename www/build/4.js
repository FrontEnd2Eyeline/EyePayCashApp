webpackJsonp([4],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinlockPageModule", function() { return PinlockPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinlock__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PinlockPageModule = /** @class */ (function () {
    function PinlockPageModule() {
    }
    PinlockPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pinlock__["a" /* PinlockPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pinlock__["a" /* PinlockPage */]),
            ],
        })
    ], PinlockPageModule);
    return PinlockPageModule;
}());

//# sourceMappingURL=pinlock.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinlockPage; });
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
 * Generated class for the PinlockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PinlockPage = /** @class */ (function () {
    function PinlockPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PinlockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PinlockPage');
    };
    PinlockPage.prototype.navIndex = function () {
        this.navCtrl.push('InndexPage');
    };
    PinlockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pinlock',template:/*ion-inline-start:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/pinlock/pinlock.html"*/'<ion-content class="imgBackground2 vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img style="margin-bottom: 10%;" class="logo" src="assets/imgs/EPCLogoPpal.png"></ion-img>\n    <div class="center" style="margin-top: -46%">\n      <ion-label style="color:white" class="center"> Ingresa con tu PIN o HUELLA</ion-label>\n    </div>\n  </div>\n\n  <div style="margin-top:10%" class="center">\n    <ion-list>\n      <ion-item class="vignette"  style="border-radius:10px; color: white; background: transparent; border-radius: 10px; text-align: center;">\n        <ion-input placeholder="Introduce el coódigo" maxlength="6" required style="text-align: center; " type="text"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-grid class="center">\n    <ion-row>\n      <ion-col col-4>\n        <button class="pulse animated" style="margin-left: 8%; font-size: x-large;" ion-button>1</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="font-size: x-large" ion-button>2</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="margin-left: 8%; font-size: x-large;" ion-button>3</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button class="pulse animated" style="margin-left: 8%; font-size: x-large;" ion-button>4</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="font-size: x-large" ion-button>5</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="margin-left: 8%; font-size: x-large;" ion-button>6</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button class="pulse animated" style="margin-left: 8%; font-size: x-large;" ion-button>7</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="font-size: x-large" ion-button>8</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="margin-left: 8%; font-size: x-large;" ion-button>9</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button class="pulse animated" style="font-size: xx-large; background:transparent; color: white; margin-left: 18%" ion-button\n          icon-start>\n          <ion-icon name="md-lock"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="font-size: x-large" ion-button>0</button>\n      </ion-col>\n      <ion-col col-4>\n        <button class="pulse animated" style="font-size: xx-large; background:transparent; color: white; " ion-button icon-start>\n          <ion-icon name="ios-backspace"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="center">\n    <button style="border-radius: 0%" class="buttonBackground" (click)="navIndex()" ion-button small>INGRESAR</button>\n  </div>\n  <div class="center" style="margin-top: 2%">\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/pinlock/pinlock.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PinlockPage);
    return PinlockPage;
}());

//# sourceMappingURL=pinlock.js.map

/***/ })

});
//# sourceMappingURL=4.js.map