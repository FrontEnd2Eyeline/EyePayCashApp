webpackJsonp([15],{

<<<<<<< HEAD
/***/ 725:
=======
/***/ 721:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalErrorPageModule", function() { return ModalErrorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_error__ = __webpack_require__(753);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(745);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalErrorPageModule = /** @class */ (function () {
    function ModalErrorPageModule() {
    }
    ModalErrorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_error__["a" /* ModalErrorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_error__["a" /* ModalErrorPage */]),
            ],
        })
    ], ModalErrorPageModule);
    return ModalErrorPageModule;
}());

//# sourceMappingURL=modal-error.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 753:
=======
/***/ 745:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the ModalErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalErrorPage = /** @class */ (function () {
    function ModalErrorPage(navCtrl, navParams, viewControll) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewControll = viewControll;
        this.obj = { field: null, message: null };
    }
    ModalErrorPage.prototype.ionViewDidLoad = function () {
        this.obj = this.navParams.get('Error');
    };
    ModalErrorPage.prototype.closeModal = function () {
        this.viewControll.dismiss();
    };
    ModalErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-modal-error',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-error/modal-error.html"*/'<ion-content class="BackGRa">\n  <div>\n    <div class="gradient">\n      <img class="mrg10Top" src="assets/imgs/error.png" >\n      <p class="mrg5Top">{{obj.message}}</p>\n    </div>\n    <div class="footer-button">\n      <button ion-button (click)="closeModal()" class="buttonPayCash" style="color: white">Aceptar</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-error/modal-error.html"*/,
=======
            selector: 'page-language',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/'<ion-content class="img_background">\n  <ion-list>\n    <div class="center mrgTop">\n      <ion-item class="center">\n        <button ion-button  (click)="seleccionar(\'es\')" class="buttonPayCash">Español</button>\n      </ion-item>\n\n      <ion-item class="center">\n        <button ion-button  (click)="seleccionar(\'en\')" class="buttonPayCash">English</button>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/language/language.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ModalErrorPage);
    return ModalErrorPage;
}());

//# sourceMappingURL=modal-error.js.map

/***/ })

});
//# sourceMappingURL=15.js.map