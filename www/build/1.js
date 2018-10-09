webpackJsonp([1],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */]),
            ],
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    HomePage.prototype.goPage = function (page) {
        if (page == 'account')
            this.navCtrl.push("AccountPage");
        else if (page == 'history')
            this.navCtrl.push("HistoryPage");
        else
            this.navCtrl.push("TransactionPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/home/home.html"*/'<ion-content class="imgBackground vignette">\n    <div class="center">\n        <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n      </div>\n\n  <div class="center">\n    <ion-img name="add" (click)="goPage(\'transaction\')" class="img-loaded2 img" src="assets/icon/TransaccionIco.png"></ion-img>\n  </div>\n\n  <div class="center">\n    <ion-img name="list-box" (click)="goPage(\'history\')" class="img-loaded2 img" src="assets/icon/HistoryIco.png"></ion-img>\n  </div>\n\n  <div class="center">\n    <ion-img name="person" (click)="goPage(\'account\')" class="img-loaded2 img" src="assets/icon/CuentaIco.png"></ion-img>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
 * Generated class for the TransactionResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionResumePage = /** @class */ (function () {
    function TransactionResumePage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.result = null;
        this.transaction = null;
        this.coinhas = null;
        this.coin = null;
        this.country = null;
        this.qrlink = null;
        this.getIngfo();
    }
    TransactionResumePage.prototype.getIngfo = function () {
        var parametros = this.navParams.data;
        this.result = parametros.result;
        this.transaction = parametros.transaction;
        this.coinhas = parametros.coinhash;
        this.coin = parametros.coin;
        this.country = parametros.country;
        this.qrlink = parametros.qrlink;
        console.log(this.coin);
        console.log(this.coinhas);
    };
    TransactionResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction-resume/transaction-resume.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resumen de la transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h4>Resumen de la transacción</h4>\n<ion-card>\n  <ion-card-content>\n    <ion-list>\n      <label stacked>Información de la transacción:</label>\n      <ion-row>\n        <ion-col col-6 text-left>Nº Celular destino</ion-col>\n        <ion-col col-6 text-right>\n          {{transaction?.phone_user_des}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 text-left >Nombre Criptomoneda</ion-col>\n        <ion-col col-6 text-right > {{coin.full_name}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 text-left >Fecha transacción</ion-col>\n        <ion-col col-6 text-right >{{transaction?.date_request}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 text-left >Costo moneda local</ion-col>\n        <ion-col col-6 text-right > {{result.money_local_to_usd}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 text-left >Costo en USD</ion-col>\n        <ion-col col-6 text-right > {{transaction?.amount_usd}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 text-left >Costo en criptomoneda</ion-col>\n        <ion-col col-6 text-right > {{transaction?.amount_btc}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 text-left >Costo comisión</ion-col>\n        <ion-col col-6 text-right > {{result.commission.CRYPTO}} </ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col col-12>\n          <h2>Dirección {{coin.full_name}} </h2>\n          <h2>{{coinhas.eye_hash}}</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center>\n        <img src="{{qrlink}}">\n      </ion-row>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction-resume/transaction-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], TransactionResumePage);
    return TransactionResumePage;
}());

//# sourceMappingURL=transaction-resume.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_resume_transaction_resume__ = __webpack_require__(707);
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
 * Generated class for the ModalTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTransactionPage = /** @class */ (function () {
    function ModalTransactionPage(navParams, viewCtrl, toastCtrl, loadingCtrl, api, userProvider, navCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.moneda = null;
        this.userCountry = null;
        this.transaction = {
            amount_local: 0,
            phone_user_des: null,
            key_user: null,
            country_id: null,
            coin_id: null,
        };
    }
    ModalTransactionPage.prototype.ionViewWillLoad = function () {
        this.userCountry = this.navParams.get('userCountry');
        this.moneda = this.navParams.get('moneda');
        this.transaction.country_id = this.userCountry.id;
        this.transaction.coin_id = this.moneda.id;
    };
    ModalTransactionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalTransactionPage.prototype.doTrasaction = function () {
        var _this = this;
        if (this.transaction.amount_local != null && this.transaction.phone_user_des != null && this.transaction.key_user != null && this.transaction.country_id != null && this.transaction.coin_id != null) {
            if (this.transaction.key_user.length === 4 && this.transaction.phone_user_des > 9) {
                var loading_1 = this.loadingCtrl.create({
                    spinner: 'dots',
                });
                loading_1.present();
                var objtoSub = this.transaction;
                objtoSub.amount_local = this.transaction.amount_local.replace(new RegExp('\\.', 'g'), '');
                objtoSub.amount_local = this.transaction.amount_local.replace(',', '.');
                this.api.post('app/transaction', objtoSub, this.userProvider).then(function (data) {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Transacciòn solicitada correctamente.',
                        duration: 3000,
                    });
                    _this.closeModal();
                    _this.navCtrl.setPages([{ page: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] }, { page: __WEBPACK_IMPORTED_MODULE_5__transaction_resume_transaction_resume__["a" /* TransactionResumePage */], params: data }]);
                    toast.present();
                }).catch(function (data) {
                    loading_1.dismiss();
                    console.log(data);
                });
            }
        }
        else {
            console.log(this.transaction);
            var toast = this.toastCtrl.create({
                message: 'Todos los datos son obligatorios',
                duration: 3000
            });
            toast.present();
        }
    };
    ModalTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-transaction/modal-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Transacción</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      {{moneda.full_name}}\n    </ion-card-header>\n    <ion-card-content>\n      <h6>1 {{moneda.full_name}} == {{moneda.local_usd_value | number}} {{userCountry.currency}} </h6>\n      <h6>1 {{moneda.full_name}} == {{moneda.usd_value | number}} USD </h6>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Información de la transación\n    </ion-card-header>\n    <ion-card-content>\n        <label stacked>Ingresar número celular</label>\n        <ion-input name="transaction-celular" [(ngModel)]="transaction.phone_user_des"   [brmasker]="{type:\'num\'}"\n                   type="text"></ion-input>\n        <label stacked>Ingresar clave de seguridad (4 digitos)</label>\n        <ion-input name="transaction-clave" [brmasker]="{len:4}" [(ngModel)]="transaction.key_user" type="number"></ion-input>\n        <label stacked>Ingresar el valor de la transacción</label>\n        <ion-input type="text" name="transaction-valor"\n                   [brmasker]="{money:true,decimal:0,thousand:\',\',type:\'num\'}"\n                   [(ngModel)]="transaction.amount_local">\n\n        </ion-input>\n        <button class="buttonPayCash" ion-button (click)="doTrasaction()">Solicitar transacción</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-transaction/modal-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ModalTransactionPage);
    return ModalTransactionPage;
}());

//# sourceMappingURL=modal-transaction.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_transaction_modal_transaction__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_load_information_load_information__ = __webpack_require__(159);
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
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl, navParams, api, userProvider, loadingCtrl, toastCtrl, modalCtrl, informationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.informationProvider = informationProvider;
        this.countrys = [];
        this.currency = null;
        this.infoCountry = null;
        this.monedas = [];
        this.currency = this.userProvider.user_Country.currency;
        this.getInfo();
        this.countrySelected();
    }
    TransactionPage.prototype.getInfo = function () {
        var _this = this;
        this.informationProvider.getCountries()
            .then(function (value) {
            _this.countrys = value;
        });
    };
    TransactionPage.prototype.countrySelected = function () {
        var _this = this;
        this.informationProvider.getCurrencies(this.currency)
            .then(function (value) {
            _this.infoCountry = value;
            _this.monedas = value.coins;
        });
    };
    TransactionPage.prototype.monedaSelect = function (moneda) {
        var modalTransaction = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_transaction_modal_transaction__["a" /* ModalTransactionPage */], {
            'moneda': moneda,
            'userCountry': this.userProvider.user_Country,
        });
        modalTransaction.present();
        modalTransaction.onDidDismiss(function (data) {
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TRANSACCIONES</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label class="txtLbl" stacked>Seleccione país de interés</ion-label>\n  <ion-select [(ngModel)]="currency" (ionChange)="countrySelected()">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n      <label stacked>Precio del dolar en el paìs</label>\n      <ion-col col-12>\n        <h6>1 USD = {{infoCountry?.local_usd_value}} {{currency}}</h6>\n      </ion-col>\n      <label stacked>Información de las monedas</label>\n      <ion-card ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-10>\n              <h4>Nombre: {{moneda.full_name}}</h4>\n              <h6>1 {{moneda.full_name}} = {{moneda.usd_value}} USD</h6>\n              <h5 stacked> 1 {{moneda.full_name}} >> {{currency}} </h5>\n              <h5>{{moneda.local_usd_value}}</h5>\n            </ion-col>\n            <ion-col col-2 class="margIcon">\n              <ion-icon name="add"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_load_information_load_information__["a" /* LoadInformationProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ })

});
//# sourceMappingURL=1.js.map