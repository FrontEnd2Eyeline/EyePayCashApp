webpackJsonp([10],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTransactionPageModule", function() { return ModalTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_transaction__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalTransactionPageModule = /** @class */ (function () {
    function ModalTransactionPageModule() {
    }
    ModalTransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_transaction__["a" /* ModalTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_transaction__["a" /* ModalTransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], ModalTransactionPageModule);
    return ModalTransactionPageModule;
}());

//# sourceMappingURL=modal-transaction.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
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
    function ModalTransactionPage(navParams, viewCtrl, toastCtrl, loadingCtrl, api, userProvider, navCtrl, alertCtrl, pipe) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pipe = pipe;
        this.moneda = null;
        this.userCountry = null;
        this.currency = null;
        this.transaction = {
            amount_local: null,
            phone_user_des: null,
            key_user: null,
            country_id: null,
            coin_id: null,
            code_phone: null,
        };
    }
    ModalTransactionPage.prototype.ionViewWillLoad = function () {
        this.userCountry = this.navParams.get('infoCountry');
        this.moneda = this.navParams.get('moneda');
        this.currency = this.navParams.get('currency');
        console.log(this.currency);
        this.transaction.country_id = this.navParams.get('pais_id');
        this.transaction.code_phone = this.navParams.get('code_phohe');
        this.transaction.coin_id = this.moneda.id;
        this.country = this.navParams.get('country');
    };
    ModalTransactionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalTransactionPage.prototype.doTrasaction = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
        });
        loading.present();
        // let objtoSub = this.transaction;
        // let amount = objtoSub.amount_local + "";
        // let index = amount.indexOf(',');
        // if (index > 0) {
        // objtoSub.amount_local = this.transaction.amount_local.replace(new RegExp('\\.', 'g'), '');
        //   objtoSub.amount_local = this.transaction.amount_local.replace(',', '.');
        this.api.post('app/transaction', this.transaction, this.userProvider).then(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Transacción solicitada correctamente.',
                showCloseButton: true,
                closeButtonText: 'cerrar',
                position: 'middle',
            });
            _this.closeModal();
            _this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionResumePage', params: data }]);
            loading.dismiss();
            toast.present();
        }).catch(function (error) {
            loading.dismiss();
            var mensaje = "";
            error.error.forEach(function (data) {
                mensaje += data.message + "\n";
            });
            var toast = _this.toastCtrl.create({
                message: mensaje,
                showCloseButton: true,
                closeButtonText: 'cerrar',
            });
            toast.present();
        });
        // } else {
        //   loading.dismiss();
        //   let toast = this.toastCtrl.create({
        //     message: 'Por favor ingrese un valor mayor a cero.',
        //     showCloseButton: true,
        //     closeButtonText: 'cerrar',
        //     position: 'middle',
        //   });
        //   toast.present();
        // }
    };
    ModalTransactionPage.prototype.confirmTrasaction = function () {
        var _this = this;
        if (this.transaction.amount_local != null && this.transaction.phone_user_des != null && this.transaction.key_user != null && this.transaction.country_id != null && this.transaction.coin_id != null) {
            if (this.transaction.phone_user_des > 8) {
                if (this.transaction.amount_local > 0) {
                    var alerta = this.alertCtrl.create({
                        title: 'Confirmar transacción',
                        message: 'Destino: ' + this.transaction.phone_user_des + ' <br> Clave:' + this.transaction.key_user + '<br>' +
                            'Monto:' + this.getCurrency(this.transaction.amount_local) + " " + this.country.currency_code,
                        buttons: [
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                            },
                            {
                                text: 'Solicitar',
                                handler: function () {
                                    _this.doTrasaction();
                                }
                            }
                        ]
                    });
                    alerta.present();
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: 'El monto de la transacción debe ser mayor a cero.',
                        showCloseButton: true,
                        closeButtonText: 'cerrar',
                        position: 'middle',
                    });
                    toast.present();
                }
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Número telefónico más de 9 digitos.',
                    showCloseButton: true,
                    closeButtonText: 'cerrar',
                    position: 'middle',
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Todos los datos son obligatorios.',
                showCloseButton: true,
                closeButtonText: 'cerrar',
                position: 'middle',
            });
            toast.present();
        }
    };
    ModalTransactionPage.prototype.getCurrency = function (amount) {
        return this.pipe.transform(amount, '$ ', true, '1.0-0');
    };
    ModalTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-modal-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-transaction/modal-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Solicitar transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      {{moneda.full_name}}\n    </ion-card-header>\n    <ion-card-content>\n      <h6>1 {{moneda.full_name}} ={{moneda?.usd_value | currency}} USD </h6>\n      <h6 *ngIf="currency != \'USD\'">1 {{moneda?.full_name}} = {{moneda?.local_usd_value| currency}} {{currency}} </h6>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Información de la transacción\n    </ion-card-header>\n    <ion-card-content>\n      <label stacked>Ingresar número celular de destino</label>\n      <ion-row>\n        <ion-col col-3><h2 style="margin-top: 40%!important;">(+{{transaction.code_phone}})</h2></ion-col>\n        <ion-col col-9>\n          <ion-input type="number" class="margBott" name="transaction-celular" [(ngModel)]="transaction.phone_user_des" [brmasker]="{len:12}"></ion-input>\n        </ion-col>\n      </ion-row>\n      <label stacked>Ingresar una clave de seguridad</label>\n      <ion-input class="margBott" name="transaction-clave" [brmasker]="{len:4}" [(ngModel)]="transaction.key_user"\n                 type="number"></ion-input>\n      <label stacked>Ingresar valor de transacción en {{currency}}</label>\n      <ion-input class="margBott" name="transaction-valor" type="number" value=""\n                 [(ngModel)]="transaction.amount_local">\n\n      </ion-input>\n      <button class="buttonPayCash" ion-button (click)="confirmTrasaction()" block>Solicitar transacción</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-transaction/modal-transaction.html"*/,
=======
            selector: 'page-modal-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-transaction/modal-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Solicitar transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      {{moneda.full_name}}\n    </ion-card-header>\n    <ion-card-content>\n      <h6>1 {{moneda.full_name}} ={{moneda?.usd_value | currency}} USD </h6>\n      <h6 *ngIf="currency != \'USD\'">1 {{moneda?.full_name}} = {{moneda?.local_usd_value| currency}} {{country.currency_}} </h6>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Información de la transacción\n    </ion-card-header>\n    <ion-card-content>\n      <label stacked>Ingresar número celular de destino</label>\n      <ion-row>\n        <ion-col col-3><h2 style="margin-top: 40%!important;">(+{{transaction.code_phone}})</h2></ion-col>\n        <ion-col col-9>\n          <ion-input type="number" class="margBott" name="transaction-celular" [(ngModel)]="transaction.phone_user_des" [brmasker]="{len:12}"></ion-input>\n        </ion-col>\n      </ion-row>\n      <label stacked>Ingresar una clave de seguridad</label>\n      <ion-input class="margBott" name="transaction-clave" [brmasker]="{len:4}" [(ngModel)]="transaction.key_user"\n                 type="number"></ion-input>\n      <label stacked>Ingresar valor de transacción en {{currency}}</label>\n      <ion-input class="margBott" name="transaction-valor" type="number" value=""\n                 [(ngModel)]="transaction.amount_local">\n\n      </ion-input>\n      <button class="buttonPayCash" ion-button (click)="confirmTrasaction()" block>Solicitar transacción</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-transaction/modal-transaction.html"*/,
>>>>>>> 5efbfb4d94adbcf5e328e988192ca032d7d01ed0
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CurrencyPipe */]])
    ], ModalTransactionPage);
    return ModalTransactionPage;
}());

//# sourceMappingURL=modal-transaction.js.map

/***/ })

});
//# sourceMappingURL=10.js.map