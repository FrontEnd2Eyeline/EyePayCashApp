webpackJsonp([20],{

<<<<<<< HEAD
/***/ 717:
=======
/***/ 719:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(741);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins__ = __webpack_require__(743);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




<<<<<<< HEAD
var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
=======
var CoinsPageModule = /** @class */ (function () {
    function CoinsPageModule() {
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
    }
    ContactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
            ],
            imports: [
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coins__["a" /* CoinsPage */]),
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 741:
=======
/***/ 743:
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(385);
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
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams, contacts, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = contacts;
        this.loadingCtrl = loadingCtrl;
        this.listaContactos = [];
        this.avatar = "./assets/icon/avatar.png";
        this.cargarListaContactos();
    }
    ContactsPage.prototype.cargarListaContactos = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src='assets/imgs/buho.png'>",
        });
        loading.present();
        this.contacts.find(["*"])
            .then(function (data) {
            var datosMostar = [];
            data.map(function (item) {
                if (item.displayName != null && item.phoneNumbers != null) {
                    datosMostar.push({
                        displayName: item.displayName,
                        phoneNumbers: item.phoneNumbers
                    });
                }
                loading.dismiss();
            });
            _this.listaContactos = datosMostar;
        }, function (error) {
            console.log({ error: error });
            loading.dismiss();
        });
    };
<<<<<<< HEAD
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/contacts/contacts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Listado de contactos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let contacto of listaContactos">\n      <ion-avatar item-start>\n        <img src="assets/imgs/contacto.png" (click)="Send()">\n      </ion-avatar>\n      <h2>{{contacto.displayName | uppercase }}</h2>\n      <p>{{contacto.phoneNumbers[0].value}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/contacts/contacts.html"*/,
=======
    CoinsPage.prototype.goPage = function (page) {
        if (page == 'profile')
            this.navCtrl.push("ProfilePage");
        else if (page == 'history')
            this.navCtrl.push("HistoryPage");
        else if (page == "maps")
            this.navCtrl.push("MapPage");
        else if (page == "contact")
            this.navCtrl.push("ContactsPage");
        else if (page == "precios")
            this.navCtrl.push("CoinsPage");
        else
            this.navCtrl.push("TransactionPage");
    };
    CoinsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-coins',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/coins/coins.html"*/'<ion-header>\n  <div class="BackgroundPpal">\n    <ion-row>\n      <ion-col col-12>\n        <img class="imgLogoWidth marginlogo" src="assets/imgs/EPCLogo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <h6 class="colorwhite">Precios :</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="styleSegment">\n      <ion-col>\n        <div class="mrgLeftSegment">\n          <ion-segment class="backSegment marg4Top center " [(ngModel)]="Coins">\n            <ion-segment-button value="0">\n              USD\n            </ion-segment-button>\n            <ion-segment-button value="1">\n              EUR\n            </ion-segment-button>\n            <ion-segment-button value="2">\n              LOCAL\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div padding [ngSwitch]="Coins">\n    <ion-list *ngSwitchCase="\'0\'">\n      <ion-row>\n        <ion-col col-8>\n          <div class="centerIcoText">\n            <img class="imgIcoin" src="assets/newIcons/19.png">\n            <h6 class="textCoinsmon">BITCOIN</h6>\n            <p class="textSecon">BTC</p>\n          </div>     \n        </ion-col>\n        <ion-col col-4 padding>\n          <p class="mrg10Top textTaman">\n            6,312.54\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <div>\n                <img src="assets/newIcons/LineaHoriz.png">\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'1\'">\n      <ion-row>\n        <ion-col col-8>\n          <div class="centerIcoText">\n            <img class="imgIcoin" src="assets/newIcons/19.png">\n            <h6 class="textCoinsmon">BITCOIN</h6>\n            <p class="textSecon">BTC</p>\n          </div>\n        </ion-col>\n        <ion-col col-4 padding>\n          <p class="mrg10Top textTaman">\n            6,500.20\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n              <div>\n                  <img src="assets/newIcons/LineaHoriz.png">\n              </div>\n          </ion-col>\n        </ion-row>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'2\'">\n      <ion-row>\n        <ion-col col-8>\n          <div class="centerIcoText">\n            <img class="imgIcoin" src="assets/newIcons/19.png">\n            <h6 class="textCoinsmon">BITCOIN</h6>\n            <p class="textSecon">BTC</p>\n          </div>\n        </ion-col>\n        <ion-col col-4 padding>\n          <p class="mrg10Top textTaman">\n            20\'000\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n              <div>\n                  <img src="assets/newIcons/LineaHoriz.png">\n              </div>\n          </ion-col>\n        </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center2" col-2 (click)="goPage(\'precios\')">\n        <img width="40" height="40" src="assets/newIcons/11.png">\n        <p>Precios</p>\n      </ion-col>\n      <ion-col class="center2" col-3 (click)="goPage(\'transaction\')">\n        <img width="40" height="40" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2 mar1Left" col-2 (click)="goPage(\'history\')">\n        <img width="40" height="40" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-2 (click)="goPage(\'maps\')">\n        <img width="40" height="40" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center2" col-2 (click)="goPage(\'profile\')">\n        <img width="40" height="40" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/coins/coins.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=20.js.map