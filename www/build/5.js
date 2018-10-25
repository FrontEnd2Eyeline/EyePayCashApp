webpackJsonp([5],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecurityPageModule = /** @class */ (function () {
    function SecurityPageModule() {
    }
    SecurityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__security__["a" /* SecurityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__security__["a" /* SecurityPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], SecurityPageModule);
    return SecurityPageModule;
}());

//# sourceMappingURL=security.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(93);
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
 * Generated class for the SecurityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecurityPage = /** @class */ (function () {
    function SecurityPage(navCtrl, navParams, modal, loadingCtrl, api, userProvider, toastCtrl, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.errorProvider = errorProvider;
        this.usuario = null;
        this.infoPhone = {
            flag: null,
            type: null,
            value: null,
            country_code: null
        };
        this.valueMail = {
            value: null,
            type: null,
        };
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.codigoSend = {
            phone_code: null,
            mail_code: null,
        };
        this.codeVerify = null;
        this.codeVerifyMail = null;
        this.type = 'password';
        this.showPass = false;
        this.type2 = 'password';
        this.showPass2 = false;
        this.isphone = true;
        this.ismail = false;
        this.password = {
            old_password: null,
            new_password: null,
            new_password_conf: null,
        };
    }
    SecurityPage.prototype.ionViewWillEnter = function () {
        this.updateInfo = "celular";
    };
    SecurityPage.prototype.selectcountry = function () {
        var _this = this;
        var modal = this.modal.create('SelectCodePage');
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.infoPhone.country_code = data.code;
                _this.infoPhone.flag = data.flag;
            }
        });
    };
    SecurityPage.prototype.verifyCode = function () {
        var _this = this;
        if (this.response_verify.phone_code === this.codeVerify) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'phone',
            }).then(function (data) {
                _this.errorProvider.obj.message = 'Información actualizada correctamente';
                _this.usuario.phone = data.phone;
                loading_1.dismiss();
                _this.errorProvider.presentModal();
                _this.userProvider.user_Info.phone = _this.infoPhone.value;
                _this.userProvider.setUser(_this.userProvider.user_Info);
                _this.usuario = _this.userProvider.user_Info;
                _this.clearVar();
            }).catch(function (error) {
                var mensaje = '';
                error.error.forEach(function (data) {
                    mensaje += data.message;
                });
                loading_1.dismiss();
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            });
        }
        else {
            this.errorProvider.obj.message = 'Código incorrecto';
            this.errorProvider.presentModal();
        }
    };
    SecurityPage.prototype.showPassword2 = function () {
        this.showPass2 = !this.showPass2;
        if (this.showPass2) {
            this.type2 = 'text';
        }
        else {
            this.type2 = 'password';
        }
    };
    SecurityPage.prototype.changePhone = function () {
        var _this = this;
        if (this.infoPhone.country_code != null && this.infoPhone.value != null) {
            var loading_2 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            loading_2.present();
            this.infoPhone.type = "phone";
            this.infoPhone.value = this.infoPhone.country_code + this.infoPhone.value;
            this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(function (data) {
                _this.errorProvider.obj.message = 'Se ha enviado un código de verificación al número celular.';
                loading_2.dismiss();
                _this.errorProvider.presentModal();
                _this.response_verify = data;
                _this.codigoSend.phone_code = _this.response_verify.phone_code;
                _this.codigoSend.mail_code = null;
                console.log('email', _this.codigoSend.mail_code);
            }).catch(function (error) {
                var mensaje = '';
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                loading_2.dismiss();
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            });
        }
        else {
            this.errorProvider.obj.message = 'Por favor seleccione el país e ingrese su nuemo número celular';
            this.errorProvider.presentModal();
        }
    };
    SecurityPage.prototype.verifyCodeMail = function () {
        var _this = this;
        if (this.response_verify.mail_code === this.codeVerifyMail) {
            var loading_3 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            loading_3.present();
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'mail',
            }).then(function (data) {
                _this.errorProvider.obj.message = 'Informacion actualizada correctamente';
                loading_3.dismiss();
                console.log(data);
                _this.usuario.mail = data.mail;
                _this.clearVar();
                _this.errorProvider.presentModal();
                // toast.present();
            }).catch(function (error) {
                var mensaje = '';
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                _this.errorProvider.obj.message = mensaje;
                loading_3.dismiss();
                _this.errorProvider.presentModal();
            });
        }
        else {
            this.errorProvider.obj.message = 'Los códigos de verificación no coinciden';
            this.errorProvider.presentModal();
        }
    };
    SecurityPage.prototype.changeMail = function () {
        var _this = this;
        if (this.valueMail.value != null && this.valueMail.value != '') {
            var loading_4 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            console.log('mail', this.valueMail);
            console.log('phone', this.infoPhone.value);
            this.errorProvider.obj.message = 'Se ha enviado un correo electrónico de verificacioón a su direccioón e-mail';
            this.infoPhone.value = null;
            loading_4.present();
            this.valueMail.type = 'mail';
            this.api.post('account/update-contact', this.valueMail, this.userProvider).then(function (data) {
                loading_4.dismiss();
                _this.errorProvider.presentModal();
                console.log(data);
                _this.response_verify = data;
                _this.codigoSend.phone_code = null;
                _this.codigoSend.mail_code = _this.response_verify.mail_code;
                console.log('code phone', _this.codigoSend.phone_code);
            }).catch(function (error) {
                var mensaje = '';
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                _this.errorProvider.obj.message = mensaje;
                loading_4.dismiss();
                _this.errorProvider.presentModal();
            });
        }
        else {
            this.errorProvider.obj.message = 'Por favor ingrese una direccioón e-mail';
            this.errorProvider.presentModal();
        }
    };
    SecurityPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    SecurityPage.prototype.actualizarPass = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots'
        });
        loading.present();
        this.api.post('account/update-password', this.password, this.userProvider).then(function (data) {
            _this.errorProvider.obj.message = 'Información actualizada correctamente';
            loading.dismiss();
            _this.errorProvider.presentModal();
            _this.password.new_password = null;
            _this.password.new_password_conf = null;
            _this.password.old_password = null;
        }).catch(function (error) {
            loading.dismiss();
            var mensaje = "";
            error.error.forEach(function (data) {
                mensaje += data.message + "\n";
            });
            _this.errorProvider.obj.message = mensaje;
            _this.errorProvider.presentModal();
        });
    };
    SecurityPage.prototype.clearVar = function () {
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
    SecurityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-security',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/security/security.html"*/'<!--\n  Generated template for the SecurityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Seguridad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="lock" item-start></ion-icon>\n      Información de seguridad\n    </ion-card-header>\n    <ion-card-content>\n      <div padding>\n        <ion-segment [(ngModel)]="updateInfo">\n          <ion-segment-button value="celular">\n            Número celular\n          </ion-segment-button>\n          <ion-segment-button value="correo">\n            Dirección email\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div [ngSwitch]="updateInfo">\n        <ion-list *ngSwitchCase="\'celular\'">\n          <ion-row>\n            <label stacked>Seleccione el país e ingrese su nuevo número celular</label>\n            <ion-col col-4>\n              <ion-item class="item-flag">\n                <img [src]="infoPhone.flag" class="flagphone" *ngIf="infoPhone.flag !=null">\n                <button ion-button (click)="selectcountry()">+ {{infoPhone.country_code}}</button>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8>\n              <ion-input required type="number" name="numerocelular" [(ngModel)]="infoPhone.value"\n                         placeholder="Número móvil (celular)" [brmasker]="{len:14}"></ion-input>\n            </ion-col>\n            <ion-col col-12 *ngIf="codigoSend.phone_code != null && infoPhone.value != \'\'">\n              <label stacked>Ingrese el código de verificación (SMS)</label>\n              <ion-input name="verifycode" [(ngModel)]="codeVerify" type="number" [brmasker]="{len:6}"></ion-input>\n              <button class="buttonPayCash" (click)="verifyCode()" ion-button block>Verificar código</button>\n            </ion-col>\n          </ion-row>\n          <button ion-button block class="buttonPayCash" (click)="changePhone()"\n                  *ngIf=" codigoSend.phone_code == null ">\n            Enviar código de verificación\n          </button>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'correo\'">\n          <ion-row>\n            <label stacked> Por favor ingrese la nueva dirección email</label>\n            <ion-col col-12 row>\n              <ion-input name="correoelectronico" [(ngModel)]="valueMail.value"\n                         placeholder="Dirección email correo electrónico" type="mail"></ion-input>\n            </ion-col>\n            <ion-col col-12 *ngIf="codigoSend.mail_code != null && valueMail.value != null">\n              <label stacked>Ingrese el código de verificación (E-mail)</label>\n              <br>\n              <ion-input name="verifycode" [(ngModel)]="codeVerifyMail" [brmasker]="{len:6}" type="number"></ion-input>\n              <button class="buttonPayCash" (click)="verifyCodeMail()" ion-button block>Verificar código</button>\n            </ion-col>\n          </ion-row>\n          <button ion-button block class="buttonPayCash" (click)="changeMail()" *ngIf="codigoSend.mail_code==null">\n            Actualizar dirección email\n          </button>\n        </ion-list>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="key" item-start></ion-icon>\n      Actualizar contraseña\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n\n        <ion-label stacked>Contraseña actual</ion-label>\n        <ion-input type="password" name="useractual"\n                   required [(ngModel)]="password.old_password"></ion-input>\n      </ion-item>\n      <ion-item>\n\n        <ion-label stacked>Contraseña nueva</ion-label>\n        <ion-input type="{{type}}" name="usernueva"\n                   required [(ngModel)]="password.new_password"></ion-input>\n        <button *ngIf="!showPass" class="btn_show" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass" class="btn_show" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Confirmación de contraseña</ion-label>\n        <ion-input type="{{type2}}" name="userconfirmacion"\n                   required [(ngModel)]="password.new_password_conf"></ion-input>\n        <button *ngIf="!showPass2" class="btn_show2" ion-button clear color="dark" type="button" item-right (click)="showPassword2()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass2" class="btn_show2" ion-button clear color="dark" type="button" item-right (click)="showPassword2()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n      </ion-item>\n      <button ion-button block class="buttonPayCash" (click)="actualizarPass()">Confirmar y actualizar</button>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/security/security.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], SecurityPage);
    return SecurityPage;
}());

//# sourceMappingURL=security.js.map

/***/ })

});
//# sourceMappingURL=5.js.map