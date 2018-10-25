webpackJsonp([11],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalErrorPageModule", function() { return ModalErrorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_error__ = __webpack_require__(739);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_error__["a" /* ModalErrorPage */]),
            ],
        })
    ], ModalErrorPageModule);
    return ModalErrorPageModule;
}());

//# sourceMappingURL=modal-error.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
        console.log(this.obj);
    };
    ModalErrorPage.prototype.closeModal = function () {
        this.viewControll.dismiss();
    };
    ModalErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-error',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-error/modal-error.html"*/'<!--\n  Generated template for the ModalErrorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="">\n	<div class="gradient" style="\n	 color: white;\n    border-radius: 20px;\n    margin-top: 24%;\n    min-height: 180px;">\n    <img src="assets/imgs/error.png" style="max-width: 100px">\n    <p style="margin-top: 5%">{{obj.message}}</p>\n  </div>\n		<div class="footer-button">\n				<button ion-button (click)="closeModal()" class="buttonPayCash" style="color: white">Aceptar</button>\n		</div>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-error/modal-error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalErrorPage);
    return ModalErrorPage;
}());

//# sourceMappingURL=modal-error.js.map

/***/ })

});
//# sourceMappingURL=11.js.map