webpackJsonp([7],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAcountPageModule", function() { return UpdateAcountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_acount__ = __webpack_require__(763);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateAcountPageModule = /** @class */ (function () {
    function UpdateAcountPageModule() {
    }
    UpdateAcountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_acount__["a" /* UpdateAcountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_acount__["a" /* UpdateAcountPage */]),
            ],
        })
    ], UpdateAcountPageModule);
    return UpdateAcountPageModule;
}());

//# sourceMappingURL=update-acount.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 763:
=======
/***/ 760:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAcountPage; });
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
 * Generated class for the UpdateAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateAcountPage = /** @class */ (function () {
    function UpdateAcountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpdateAcountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateAcountPage');
    };
    UpdateAcountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-update-acount',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/update-acount/update-acount.html"*/'<!--\n  Generated template for the UpdateAcountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>update-acount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/update-acount/update-acount.html"*/,
=======
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'TRANSACCION\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label stacked>{{\'SELECCIONAR_EL_PAIS_DE_DESTINO\'|translate}}</ion-label>\n  <ion-select *ngIf="countrys!=undefined" [(ngModel)]="currency" (ionChange)="countrySelected()" interface="popover">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n  <label stacked *ngIf="currency != \'USD\'">{{\'PRECIO_DEL_DOLAR_EN_EL_PAIS\'|translate}}</label>\n  <ion-item style="margin-bottom: 2%; margin-top: 2%" *ngIf="currency != \'USD\'">\n    <h6 class="txtboldblack">1 USD = {{infoCountry?.local_usd_value | currency}} {{currency}}</h6>\n  </ion-item>\n  <label stacked>{{\'INFORMACION_DE_LA_MONEDA\'|translate}}</label>\n  <ion-card style="margin-top: 2%" ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12>\n          <h4>Criptomoneda: {{moneda.full_name}}</h4>\n          <h6 *ngIf="currency != \'USD\'">1 {{moneda.full_name}} = {{moneda.usd_value | currency }} USD</h6>\n          <h5 stacked> 1 {{moneda.full_name}} = {{moneda.local_usd_value | currency }} {{currency}} </h5>\n        </ion-col>\n        <!-- <ion-col col-2>\n          <ion-icon name="ios-arrow-forward" large></ion-icon>\n        </ion-col> -->\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/transaction/transaction.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UpdateAcountPage);
    return UpdateAcountPage;
}());

//# sourceMappingURL=update-acount.js.map

/***/ })

});
//# sourceMappingURL=7.js.map