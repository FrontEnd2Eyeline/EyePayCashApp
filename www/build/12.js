webpackJsonp([12],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(704);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_code_select_code__ = __webpack_require__(157);
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
    //===========================================
    function AccountPage(navCtrl, navParams, api, userProvider, toastCtrl, loadingCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.usuario = null;
        this.country = null;
        this.verify = null;
        this.type = 'password';
        this.showPass = false;
        //=================================== controlar visibilidad inputs y botones
        this.isphone = true;
        this.ismail = false;
        //==================================== variables para la verificacion
        this.infoPhone = {
            flag: null,
            type: null,
            value: null,
            country_code: null
        };
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.codeVerify = null;
        this.codeVerifyMail = null;
        this.getInfo();
    }
    AccountPage.prototype.getInfo = function () {
        this.usuario = this.userProvider.user_Info;
        this.country = this.userProvider.user_Country;
        this.verify = this.userProvider.User_Verify;
    };
    AccountPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    AccountPage.prototype.actualizar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
        });
        loading.present();
        var toast = this.toastCtrl.create({
            message: 'Informaciòn personal actualizada correctamente',
            duration: 3000,
        });
        if (this.usuario.first_name != null && this.usuario.last_name != null &&
            this.usuario.first_name != "" && this.usuario.last_name != "") {
            console.log(this.usuario);
            this.api.post('account/update-info', this.usuario, this.userProvider).then(function (data) {
                _this.usuario = data;
                loading.dismiss();
                toast.present();
            }).catch();
        }
        else {
            loading.dismiss();
            var toast_1 = this.toastCtrl.create({
                message: 'Todos los campos son obligatorios',
                duration: 3000,
            });
            toast_1.present();
        }
    };
    AccountPage.prototype.changePhone = function () {
        var _this = this;
        if (this.infoPhone.country_code != null && this.infoPhone.value != null) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            var toast_2 = this.toastCtrl.create({
                message: 'Se ha enviado un código de verificación al nùmero celular.',
                duration: 3000
            });
            loading_1.present();
            this.infoPhone.type = "phone";
            this.infoPhone.value = this.infoPhone.country_code + this.infoPhone.value;
            this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(function (data) {
                console.log(data);
                loading_1.dismiss();
                toast_2.present();
                _this.response_verify = data;
            })
                .catch();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor seleccione el pais e ingrese su nuevo nùmero celular.',
                duration: 3000,
            });
            toast.present();
        }
    };
    AccountPage.prototype.changeMail = function () {
        var _this = this;
        if (this.infoPhone.value != null) {
            var loading_2 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            var toast_3 = this.toastCtrl.create({
                message: 'Se ha enviado un correo electrònico de verificaciòn a su direcciòn email.',
                duration: 3000,
            });
            loading_2.present();
            this.infoPhone.type = 'mail';
            this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(function (data) {
                loading_2.dismiss();
                toast_3.present();
                console.log(data);
                _this.response_verify = data;
            }).catch(function (data) {
                loading_2.dismiss();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese una direcciòn email',
                duration: 3000
            });
            toast.present();
        }
    };
    AccountPage.prototype.pedirMail = function () {
        this.isphone = false;
        this.ismail = true;
    };
    AccountPage.prototype.pedirPhone = function () {
        this.ismail = false;
        this.isphone = true;
    };
    AccountPage.prototype.selectcountry = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__select_code_select_code__["a" /* SelectCodePage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.infoPhone.country_code = data.code;
                _this.infoPhone.flag = data.flag;
            }
        });
    };
    AccountPage.prototype.verifyCode = function () {
        var _this = this;
        if (this.response_verify.phone_code === this.codeVerify) {
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'phone',
            }).then(function (data) {
                _this.clearVar();
                _this.usuario.phone = data.phone;
                var toast = _this.toastCtrl.create({
                    duration: 3000,
                    message: 'Informaciòn actualizada correctamente',
                });
                toast.present();
            }).catch(function (data) {
                console.log(data);
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Código incorrecto.',
                duration: 3000,
            });
            toast.present();
        }
    };
    AccountPage.prototype.verifyCodeMail = function () {
        var _this = this;
        if (this.response_verify.mail_code === this.codeVerifyMail) {
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'mail',
            }).then(function (data) {
                console.log(data);
                _this.usuario.mail = data.mail;
                _this.clearVar();
                var toast = _this.toastCtrl.create({
                    duration: 3000,
                    message: 'Informaciòn actualizada correctamente',
                });
                toast.present();
            }).catch();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Los còdigos de verificaciòn no coinciden',
                duration: 3000
            });
            toast.present();
        }
    };
    AccountPage.prototype.clearVar = function () {
        this.isphone = true;
        this.ismail = false;
        this.infoPhone = {
            flag: null,
            type: null,
            value: null,
            country_code: null
        };
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.codeVerify = null;
        this.codeVerifyMail = null;
    };
    AccountPage.prototype.cerrarSesion = function () {
        window.localStorage.clear();
        this.navCtrl.setRoot('LoginPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        CUENTA\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button (click)="cerrarSesion()" block>CERRAR SESIÓN</button>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="person" item-start></ion-icon>\n      Información personal\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombres</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Género</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">Actualizar</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="key" item-start></ion-icon>\n      Información de cuenta\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>Email</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Teléfono</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="locate" item-start></ion-icon>\n      Información de ubicaciòn\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>País</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de teléfono</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de país</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Moneda del país</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="lock" item-start></ion-icon>\n      Información de seguridad\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf="isphone">\n        <ion-row>\n\n          <label stacked>Seleccione el país e ingrese su nuevo número celular</label>\n          <ion-col col-4>\n            <ion-item class="item-flag">\n              <img [src]="infoPhone.flag" class="flagphone" *ngIf="infoPhone.flag !=null">\n              <button ion-button (click)="selectcountry()">+ {{infoPhone.country_code}}</button>\n            </ion-item>\n          </ion-col>\n          <ion-col col-8>\n              <ion-input required type="text" name="numerocelular" [(ngModel)]="infoPhone.value"\n                         placeholder="Número movil (celular)"></ion-input>\n          </ion-col>\n\n          <ion-col col-12 *ngIf="response_verify.phone_code != null">\n            <label stacked>Por favor ingrese el código de verificación</label>\n            <ion-input name="verifycode" [(ngModel)]="codeVerify"></ion-input>\n            <button class="buttonPayCash" (click)="verifyCode()" ion-button block>Verificar código</button>\n          </ion-col>\n        </ion-row>\n        <button ion-button block class="buttonPayCash" (click)="changePhone()" *ngIf="response_verify.phone_code==null">Actualizar número celular</button>\n        <button ion-button block class="buttonPayCash" (click)="pedirMail()">Cambiar dirección email</button>\n      </div>\n\n\n      <div *ngIf="ismail">\n        <ion-row>\n          <label stacked> Por favor ingrese la nueva dirección email</label>\n          <ion-col col-12 row>\n            <ion-input name="correoelectronico" [(ngModel)]="infoPhone.value" placeholder="Direcciòn email correo electrònico"></ion-input>\n          </ion-col>\n          <ion-col col-12 *ngIf="response_verify.mail_code != null">\n            <label stacked>Por favor ingrese el código de verificación</label>\n            <br>\n            <ion-input name="verifycode" [(ngModel)]="codeVerifyMail"></ion-input>\n            <button class="buttonPayCash" (click)="verifyCodeMail()" ion-button block>Verificar código</button>\n          </ion-col>\n        </ion-row>\n        <button ion-button block class="buttonPayCash" (click)="changeMail()" *ngIf="response_verify.mail_code==null">Actualizar dirección email</button>\n        <button ion-button block class="buttonPayCash" (click)="pedirPhone()">Cambiar número celular</button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=12.js.map