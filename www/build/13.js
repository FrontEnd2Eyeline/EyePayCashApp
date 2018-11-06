webpackJsonp([13],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWelcomePageModule", function() { return ModalWelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_welcome__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_transaction__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(94);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalWelcomePageModule = /** @class */ (function () {
    function ModalWelcomePageModule() {
    }
    ModalWelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_welcome__["a" /* ModalWelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_welcome__["a" /* ModalWelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ModalWelcomePageModule);
    return ModalWelcomePageModule;
}());

//# sourceMappingURL=modal-welcome.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 755:
=======
/***/ 752:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWelcomePage; });
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
 * Generated class for the ModalWelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalWelcomePage = /** @class */ (function () {
    function ModalWelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = null;
        this.getInfo();
    }
    ModalWelcomePage.prototype.getInfo = function () {
        this.name = this.navParams.get('name');
    };
    ModalWelcomePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalWelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-modal-welcome',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-welcome/modal-welcome.html"*/'<!--\n  Generated template for the ModalWelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="tamano">\n  <ion-row>\n    <ion-col col-10>\n      <h4>Bienvenido {{name}}</h4>\n    </ion-col>\n    <ion-col col-2>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="closeModal()">\n          <ion-icon item-right name="ios-close-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  <img src="assets/ok.png">\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-welcome/modal-welcome.html"*/,
=======
            selector: 'page-modal-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-transaction/modal-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Solicitar transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="BackGR3">\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n      {{moneda.full_name}}\n    </ion-card-header>\n    <ion-card-content>\n      <h6>1 {{moneda.full_name}} ={{moneda?.usd_value | currency}} USD </h6>\n      <h6 *ngIf="currency != \'USD\'">1 {{moneda?.full_name}} = {{moneda?.local_usd_value| currency}} {{currency}} </h6>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n      Información de la transacción\n    </ion-card-header>\n    <ion-card-content>\n      <label stacked>Ingresar número celular de destino</label>\n      <ion-row>\n        <ion-col col-3><h2 style="margin-top: 40%!important;">(+{{transaction.code_phone}})</h2></ion-col>\n        <ion-col col-9>\n          <ion-input type="number" class="margBott" name="transaction-celular" [(ngModel)]="transaction.phone_user_des" [brmasker]="{len:12}"></ion-input>\n        </ion-col>\n      </ion-row>\n      <label stacked>Ingresar una clave de seguridad</label>\n      <ion-input class="margBott" name="transaction-clave" [brmasker]="{len:4}" [(ngModel)]="transaction.key_user"\n                 type="number"></ion-input>\n      <label stacked>Ingresar valor de transacción en {{currency}}</label>\n      <ion-input class="margBott" name="transaction-valor" type="number" value=""\n                 [(ngModel)]="transaction.amount_local">\n\n      </ion-input>\n      <button class="buttonPayCash" ion-button (click)="confirmTrasaction()" block>Solicitar transacción</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-transaction/modal-transaction.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ModalWelcomePage);
    return ModalWelcomePage;
}());

//# sourceMappingURL=modal-welcome.js.map

/***/ })

});
//# sourceMappingURL=13.js.map