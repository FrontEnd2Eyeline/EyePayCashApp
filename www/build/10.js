webpackJsonp([10],{

<<<<<<< HEAD
/***/ 720:
=======
/***/ 722:
>>>>>>> 20c3dc4197dea109fe7ff7ba0ace49e6ef5ad4a4
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTransactionPageModule", function() { return ModalTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_transaction__ = __webpack_require__(741);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_transaction__ = __webpack_require__(743);
>>>>>>> 20c3dc4197dea109fe7ff7ba0ace49e6ef5ad4a4
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(91);
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
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], ModalTransactionPageModule);
    return ModalTransactionPageModule;
}());

//# sourceMappingURL=modal-transaction.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 741:
=======
/***/ 743:
>>>>>>> 20c3dc4197dea109fe7ff7ba0ace49e6ef5ad4a4
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__ = __webpack_require__(93);
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
    function ModalTransactionPage(navParams, viewCtrl, toastCtrl, loadingCtrl, api, userProvider, navCtrl, alertCtrl, pipe, errorProvider) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pipe = pipe;
        this.errorProvider = errorProvider;
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
        if (this.userProvider.accessParam() != null) {
            this.api.post('app/transaction', this.transaction, this.userProvider).then(function (data) {
                _this.closeModal();
                _this.errorProvider.obj.message = 'Transacción solicitada correctamente';
                _this.errorProvider.presentModal();
                _this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionResumePage', params: data }]);
                loading.dismiss();
            }).catch(function (error) {
                loading.dismiss();
                var mensaje = "";
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            });
        }
        else {
            this.errorProvider.obj.message = 'No se pudo realizar la solicitud. Por favor intentelo de nuevo.';
            this.errorProvider.presentModal();
        }
    };
    ModalTransactionPage.prototype.confirmTrasaction = function () {
        var _this = this;
        if (this.transaction.amount_local != null &&
            this.transaction.phone_user_des != null &&
            this.transaction.key_user != null &&
            this.transaction.key_user != '' &&
            this.transaction.country_id != null &&
            this.transaction.coin_id != null) {
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
                    this.errorProvider.obj.message = 'El monto de la transacción debe ser mayor a cero';
                    this.errorProvider.presentModal();
                }
            }
            else {
                this.errorProvider.obj.message = 'Número telefónico debe tener más de 9 dígitos';
                this.errorProvider.presentModal();
            }
        }
        else {
            this.errorProvider.obj.message = 'Todos los datos son obligatorios';
            this.errorProvider.presentModal();
        }
    };
    ModalTransactionPage.prototype.getCurrency = function (amount) {
        return this.pipe.transform(amount, '$ ', true, '1.0-0');
    };
    ModalTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-transaction/modal-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Solicitar transacción</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="BackGR3">\n  <ion-card>\n    <ion-card-header>\n      {{moneda.full_name}}\n    </ion-card-header>\n    <ion-card-content>\n      <h6>1 {{moneda.full_name}} ={{moneda?.usd_value | currency}} USD </h6>\n      <h6 *ngIf="currency != \'USD\'">1 {{moneda?.full_name}} = {{moneda?.local_usd_value| currency}} {{currency}} </h6>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Información de la transacción\n    </ion-card-header>\n    <ion-card-content>\n      <label stacked>Ingresar número celular de destino</label>\n      <ion-row>\n        <ion-col col-3><h2 style="margin-top: 40%!important;">(+{{transaction.code_phone}})</h2></ion-col>\n        <ion-col col-9>\n          <ion-input type="number" class="margBott" name="transaction-celular" [(ngModel)]="transaction.phone_user_des" [brmasker]="{len:12}"></ion-input>\n        </ion-col>\n      </ion-row>\n      <label stacked>Ingresar una clave de seguridad</label>\n      <ion-input class="margBott" name="transaction-clave" [brmasker]="{len:4}" [(ngModel)]="transaction.key_user"\n                 type="number"></ion-input>\n      <label stacked>Ingresar valor de transacción en {{currency}}</label>\n      <ion-input class="margBott" name="transaction-valor" type="number" value=""\n                 [(ngModel)]="transaction.amount_local">\n\n      </ion-input>\n      <button class="buttonPayCash" ion-button (click)="confirmTrasaction()" block>Solicitar transacción</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/modal-transaction/modal-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], ModalTransactionPage);
    return ModalTransactionPage;
}());

//# sourceMappingURL=modal-transaction.js.map

/***/ })

});
//# sourceMappingURL=10.js.map