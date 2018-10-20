webpackJsonp([14],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(89);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, api, userProvider, toastCtrl, loadingCtrl, modal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.usuario = null;
        this.country = null;
        this.type = 'password';
        this.showPass = false;
        this.type2 = 'password';
        this.showPass2 = false;
        //=========================  CONTROL DE VALIDACIÓN DEL USUARIO
        this.view_Verify_Phone = false;
        this.view_Verify_Mail = false;
        this.view_Btn_phone = false;
        this.view_Btn_mail = false;
        this.code_Verify_Phone = null;
        this.code_Verify_Mail = null;
        this.responseVerify = null;
        //=========================== CONTROL DE INPUTS
        this.control_label = "label";
        this.getInfo();
    }
    AccountPage.prototype.getInfo = function () {
        this.usuario = this.userProvider.user_Info;
        this.country = this.userProvider.user_Country;
        this.controlBtns();
    };
    AccountPage.prototype.actualizar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: '¿Desea actualizar la información?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
                {
                    text: 'Actualizar',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'dots',
                        });
                        loading.present();
                        if (_this.usuario.first_name != null && _this.usuario.last_name != null &&
                            _this.usuario.first_name != "" && _this.usuario.last_name != "") {
                            if (_this.usuario.first_name.length > 2 && _this.usuario.last_name.length > 2) {
                                _this.api.post('account/update-info', _this.usuario, _this.userProvider)
                                    .then(function (data) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'Información personal actualizada correctamente.',
                                        showCloseButton: true,
                                        closeButtonText: 'cerrar',
                                        position: 'middle',
                                    });
                                    _this.usuario = data;
                                    loading.dismiss();
                                    toast.present();
                                }).catch(function (error) {
                                    // let mensaje = 'Por favor corrija lo siguiente \n';
                                    var mensaje = '';
                                    error.error.forEach(function (data) {
                                        mensaje += data.field + ": " + data.message + "\n";
                                    });
                                    var toast = _this.toastCtrl.create({
                                        message: mensaje,
                                        showCloseButton: true,
                                        closeButtonText: 'cerrar',
                                        position: 'middle'
                                    });
                                    loading.dismiss();
                                    toast.present();
                                });
                            }
                            else {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Nombre y apellido deben contener más de 2 caracteres.',
                                    showCloseButton: true,
                                    closeButtonText: 'cerrar',
                                    position: 'middle',
                                });
                                toast.present();
                            }
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'Todos los campos son obligatorios.',
                                showCloseButton: true,
                                closeButtonText: 'cerrar',
                                position: 'middle',
                            });
                            loading.dismiss();
                            toast.present();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    AccountPage.prototype.cerrarSesion = function () {
        window.localStorage.clear();
        this.navCtrl.setRoot('LoginPage');
    };
    AccountPage.prototype.reenviarConfirm = function (tipo) {
        var _this = this;
        this.code_Verify_Phone = null;
        this.code_Verify_Mail = null;
        this.responseVerify = null;
        if (tipo == 'phone') {
            this.view_Verify_Phone = true;
            this.view_Verify_Mail = false;
            this.view_Btn_mail = false;
        }
        else {
            this.view_Verify_Phone = false;
            this.view_Btn_phone = false;
            this.view_Verify_Mail = true;
        }
        this.api.get("account/re-send-verify", this.userProvider, { type: tipo }).then(function (data) {
            _this.responseVerify = data;
        }).catch();
    };
    AccountPage.prototype.validateCode = function (tipo) {
        var _this = this;
        var guardar = false;
        if (tipo == 'mail') {
            if (this.code_Verify_Mail == this.responseVerify.mail_code) {
                guardar = true;
            }
            else {
                guardar = false;
                var toast = this.toastCtrl.create({
                    message: 'Códigos no coinciden',
                    position: 'middle',
                    showCloseButton: true,
                    closeButtonText: 'Cerrar'
                });
                toast.present();
            }
        }
        else {
            if (this.code_Verify_Phone == this.responseVerify.phone_code) {
                guardar = true;
            }
            else {
                guardar = false;
                var toast = this.toastCtrl.create({
                    message: 'Códigos no coinciden',
                    position: 'middle',
                    showCloseButton: true,
                    closeButtonText: 'Cerrar'
                });
                toast.present();
            }
        }
        this.code_Verify_Mail = null;
        this.code_Verify_Phone = null;
        if (guardar)
            this.api.get("account/confirm-verify", this.userProvider, { "type": tipo, id: this.responseVerify.id })
                .then(function (data) {
                if (data.success == "ok") {
                    if (tipo == 'mail')
                        _this.userProvider.User_Verify.is_mail_verify = 1;
                    else
                        _this.userProvider.User_Verify.is_phone_verify = 1;
                }
                _this.responseVerify = null;
                _this.view_Verify_Mail = false;
                _this.view_Verify_Phone = false;
                _this.controlBtns();
            });
    };
    AccountPage.prototype.cancelValidation = function () {
        this.responseVerify = null;
        this.view_Verify_Mail = false;
        this.view_Verify_Mail = false;
        this.code_Verify_Phone = null;
        this.code_Verify_Mail = null;
    };
    AccountPage.prototype.controlBtns = function () {
        if (this.userProvider.User_Verify.is_mail_verify == 0)
            this.view_Btn_mail = true;
        else
            this.view_Btn_mail = false;
        if (this.userProvider.User_Verify.is_phone_verify == 0)
            this.view_Btn_phone = true;
        else
            this.view_Btn_phone = false;
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Información de cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="BackGR3">\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button (click)="cerrarSesion()" block class="buttonPayCash">Cerrar sesión</button>\n    </ion-col>\n  </ion-row>\n  <ion-card style="background: transparent">\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Account.png"></ion-img>\n      <!-- <ion-icon name="person" item-start></ion-icon> -->\n      Información personal\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombres</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Género</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero"\n                      interface="popover">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">Editar información</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/key.png"></ion-img>\n      Información de cuenta\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>Email</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Teléfono</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n\n\n      <ion-row *ngIf="view_Verify_Mail">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Mail"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button (click)="validateCode(\'mail\')">Confirmar código email</button>\n          <button ion-button block (click)="cancelvalidation()">Cancelar</button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row *ngIf="view_Verify_Phone">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Phone"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button block (click)="validateCode(\'phone\')">Confirmar código telefono</button>\n          <button ion-button block (click)="cancelvalidation()">Cancelar</button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_phone) && (view_Verify_Phone == false)"\n                (click)="reenviarConfirm(\'phone\')">Reenviar confirmación móvil\n        </button>\n\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_mail) && view_Verify_Mail == false"\n                (click)="reenviarConfirm(\'mail\')">Reenviar confirmación email\n        </button>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Ubicacion.png"></ion-img>\n      Información de ubicación\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>País</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de teléfono</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de país</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Moneda del país</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=14.js.map