webpackJsonp([1],{

<<<<<<< HEAD
/***/ 733:
=======
/***/ 734:
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(382);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(381);
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__security__["a" /* SecurityPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* ReactiveFormsModule */]
            ],
        })
    ], SecurityPageModule);
    return SecurityPageModule;
}());

//# sourceMappingURL=security.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msg_error_msg_error__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__msg_error_msg_error__["a" /* MsgErrorComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__msg_error_msg_error__["a" /* MsgErrorComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validation_validation__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MsgErrorComponent = /** @class */ (function () {
    function MsgErrorComponent() {
    }
    Object.defineProperty(MsgErrorComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__providers_validation_validation__["a" /* ValidationProvider */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.name);
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], MsgErrorComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MsgErrorComponent.prototype, "name", void 0);
    MsgErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'msg-error',
            template: '<div><span *ngIf="errorMessage !== false">{{errorMessage}}</span></div>'
        }),
        __metadata("design:paramtypes", [])
    ], MsgErrorComponent);
    return MsgErrorComponent;
}());

//# sourceMappingURL=msg-error.js.map

/***/ }),

<<<<<<< HEAD
/***/ 758:
=======
/***/ 762:
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
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
    function SecurityPage(navCtrl, navParams, modal, loadingCtrl, api, userProvider, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.userProvider = userProvider;
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
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormGroup */]({
            value: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].email,
            ]),
            type: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](),
        });
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
    //  VERIFICAR POR SMS
    SecurityPage.prototype.verifyCode = function () {
        var _this = this;
        if (this.response_verify.phone_code === this.codeVerify) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<img src='assets/imgs/buho.png'>",
            });
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'phone',
            }).then(function (data) {
                loading_1.dismiss();
                _this.errorProvider.obj.message = 'Información actualizada correctamente';
                _this.usuario.phone = data.phone;
                _this.errorProvider.presentModal();
                _this.userProvider.user_Info.phone = _this.infoPhone.value;
                _this.userProvider.setUser(_this.userProvider.user_Info);
                _this.usuario = _this.userProvider.user_Info;
                _this.clearVar();
            }).catch(function (error) {
                var mensaje = '';
                if (Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__["e" /* isArray */])(error.error)) {
                    error.error.forEach(function (data) {
                        mensaje += data.message;
                    });
                }
                else {
                    mensaje = error.error;
                    loading_1.dismiss();
                    _this.errorProvider.obj.message = mensaje;
                    _this.errorProvider.presentModal();
                }
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
                spinner: 'hide',
                content: "<img src='assets/imgs/buho.png'>",
            });
            loading_2.present();
            this.infoPhone.type = "phone";
            this.infoPhone.value = this.infoPhone.country_code + this.infoPhone.value;
            this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(function (data) {
                loading_2.dismiss();
                _this.errorProvider.obj.message = 'Se ha enviado un código de verificación al número celular.';
                _this.errorProvider.presentModal();
                _this.response_verify = data;
                _this.codigoSend.phone_code = _this.response_verify.phone_code;
                _this.codigoSend.mail_code = null;
            }).catch(function (error) {
                loading_2.dismiss();
                var mensaje = '';
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
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
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'mail',
                mail: this.valueMail.value
            }).then(function (data) {
                _this.errorProvider.obj.message = 'Informacion actualizada correctamente';
                _this.errorProvider.presentModal();
                // this.usuario.mail = data.mail;
                _this.clearVar();
            }).catch(function (error) {
                var mensaje = '';
                if (Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__["e" /* isArray */])(error.error)) {
                    error.error.forEach(function (data) {
                        mensaje += data.message + "\n";
                    });
                }
                else {
                    mensaje = error.error;
                    _this.errorProvider.obj.message = mensaje;
                    _this.errorProvider.presentModal();
                }
            });
        }
        else {
            this.errorProvider.obj.message = 'Los códigos de verificación no coinciden';
            this.errorProvider.presentModal();
        }
    };
    SecurityPage.prototype.changeMail = function () {
        var _this = this;
        if (this.formGroup.valid) {
            var cargando_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<img src='assets/imgs/buho.png'>",
            });
            cargando_1.present();
            this.infoPhone.value = null;
            this.formGroup.get('type').setValue("mail");
            this.api.post('account/update-contact', this.formGroup.value, this.userProvider)
                .then(function (data) {
                cargando_1.dismiss();
                _this.errorProvider.obj.message = 'Se ha enviado un correo electrónico de verificacioón a su direccioón e-mail';
                _this.errorProvider.presentModal();
                _this.response_verify = data;
                _this.codigoSend.phone_code = null;
                _this.codigoSend.mail_code = _this.response_verify.mail_code;
                console.log('variable control', _this.valueMail.value);
            }).catch(function (error) {
                var mensaje = '';
                if (Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__["e" /* isArray */])(error.error)) {
                    error.error.forEach(function (data) {
                        mensaje += data.message + "\n";
                    });
                }
                else {
                    mensaje = error.error;
                    _this.errorProvider.obj.message = mensaje;
                }
                cargando_1.dismiss();
                _this.errorProvider.presentModal();
            });
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
            spinner: 'hide',
            content: "<img src='assets/imgs/buho.png'>",
        });
        loading.present();
        this.api.post('account/update-password', this.password, this.userProvider).then(function (data) {
            loading.dismiss();
            _this.errorProvider.obj.message = 'Información actualizada correctamente';
            _this.errorProvider.presentModal();
            _this.password.new_password = null;
            _this.password.new_password_conf = null;
            _this.password.old_password = null;
        }).catch(function (error) {
            loading.dismiss();
            var mensaje = "";
            if (Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__["e" /* isArray */])(error.error)) {
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
            }
            else {
                mensaje = error.error;
            }
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
            selector: 'page-security',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/security/security.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'SEGURIDAD\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="BackGR3" padding>\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/37.png"></ion-img>\n      {{\'INFORMACION_SEGURIDAD\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <div padding>\n        <ion-segment [(ngModel)]="updateInfo">\n          <ion-segment-button value="celular">\n            {{\'NUMERO_CELULAR\'|translate}}\n          </ion-segment-button>\n          <ion-segment-button value="correo">\n            {{\'DIRECCION_EMAIL\'|translate}}\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      <div [ngSwitch]="updateInfo">\n        <ion-list *ngSwitchCase="\'celular\'">\n          <ion-row>\n            <label stacked>{{\'NUEVO_CELULAR\'|translate}}</label>\n            <ion-col col-2>\n              <div class="marTop24">\n                <ion-item class="item-flag flagWid backTransp">\n                  <img [src]="infoPhone.flag" class="flagphone heigFlag" *ngIf="infoPhone.flag !=null">\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col col-4>\n              <div class="marTop24">\n                <ion-item class="backTransp">\n                  <button class="btnFlagCountry" ion-button (click)="selectcountry()">+ {{infoPhone.country_code}}</button>\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col col-6 class="marleft8">\n              <ion-input class="wid120" required type="number" name="numerocelular" [(ngModel)]="infoPhone.value" placeholder="Número móvil (celular)"\n                [brmasker]="{len:14}"></ion-input>\n            </ion-col>\n            <ion-col col-12 *ngIf="codigoSend.phone_code != null && infoPhone.value != \'\'">\n              <label stacked>{{\'CODIGO_VERIFICACION_SMS\'|translate}}</label>\n              <ion-input name="verifycode" [(ngModel)]="codeVerify" type="number" [brmasker]="{len:6}"></ion-input>\n              <button class="buttonPayCash" (click)="verifyCode()" ion-button block>{{\'VERIFICAR_CODIGO\'|translate}}</button>\n            </ion-col>\n          </ion-row>\n          <button ion-button block class="buttonPayCash" (click)="changePhone()" *ngIf=" codigoSend.phone_code == null ">\n            {{\'ENVIAR_CODIGO_VERIFICACION\'|translate}}\n          </button>\n        </ion-list>\n        <form [formGroup]="formGroup">\n          <ion-list *ngSwitchCase="\'correo\'">\n            <ion-row>\n              <label stacked>{{\'NUEVA_DIRECCION_EMAIL\'|translate}}</label>\n              <ion-col col-12 row>\n                <ion-input name="correoelectronico" placeholder="Dirección email correo electrónico" formControlName="value"\n                  type="mail"></ion-input>\n              </ion-col>\n              <ion-item no-lines *ngIf="formGroup.invalid">\n                <msg-error [control]="formGroup.controls.value" name="update-email"></msg-error>\n              </ion-item>\n              <ion-col col-12 *ngIf="codigoSend.mail_code != null && valueMail.value == null">\n                <label stacked>Ingrese el código de verificación (E-mail)</label>\n                <br>\n                <ion-input name="verifycode" [(ngModel)]="codeVerifyMail" [brmasker]="{len:6}" type="number"></ion-input>\n                <button class="buttonPayCash" (click)="verifyCodeMail()" ion-button block>Verificar código</button>\n              </ion-col>\n            </ion-row>\n            <button ion-button block class="buttonPayCash martopBtns" (click)="changeMail()" *ngIf="codigoSend.mail_code==null">\n              {{\'ACTUALIZAR_EMAIL\'|translate}}\n            </button>\n          </ion-list>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="backCardsTransp">\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/newIcons/36.png"></ion-img>\n      {{\'ACTUALIZAR_CONTRASEÑA\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label stacked>{{\'CONTRASEÑA_ACTUAL\'|translate}}</ion-label>\n        <ion-input type="password" name="useractual" required [(ngModel)]="password.old_password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{\'NUEVA_CONTRASEÑA\'|translate}}</ion-label>\n        <ion-input type="{{type}}" name="usernueva" required [(ngModel)]="password.new_password"></ion-input>\n        <button *ngIf="!showPass" class="btn_show" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass" class="btn_show" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{\'CONFIRMACION_CONTRASEÑA\'|translate}}</ion-label>\n        <ion-input type="{{type2}}" name="userconfirmacion" required [(ngModel)]="password.new_password_conf"></ion-input>\n        <button *ngIf="!showPass2" class="btn_show2" ion-button clear color="dark" type="button" item-right (click)="showPassword2()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass2" class="btn_show2" ion-button clear color="dark" type="button" item-right (click)="showPassword2()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n      </ion-item>\n      <button ion-button block class="buttonPayCash" (click)="actualizarPass()">{{\'CONFIRMAR_ACTUALIZAR\'|translate}}</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/security/security.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], SecurityPage);
    return SecurityPage;
}());

//# sourceMappingURL=security.js.map

/***/ })

});
//# sourceMappingURL=1.js.map