webpackJsonp([1],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msg_error_msg_error__ = __webpack_require__(739);
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

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validation_validation__ = __webpack_require__(380);
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

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, api, userProvider, loadingCtrl, modalCtrl, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.errorProvider = errorProvider;
        this.responseParams = null;
        this.registerParams = null;
        this.user_register = {
            //datos obtenidos por el params
            phone: null,
            country_id: null,
            user_verify_id: null,
            confirm_verify: null,
        };
        this.type = 'password';
        this.showPass = false;
        this.type2 = 'password';
        this.showPass2 = false;
        this.imagen = 'assets/backgrounds/Background3.png';
        this.ischecked = this.userProvider.check_terminos;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            first_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(3),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(20)
            ]),
            last_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(20)
            ]),
            gender: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required
            ]),
            mail: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email,
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
                // Validators.pattern("^(?=.{8,32}$)(?=.[A-Z])(?=.[a-z])(?=.[0-9]).")
            ]),
            password_conf: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
                // Validators.pattern("^(?=.{8,32}$)(?=.[A-Z])(?=.[a-z])(?=.[0-9]).")
            ]),
            mail_conf: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](),
            country_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](),
            user_verify_id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](),
            confirm_verify: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]()
        });
        this.getInfo();
        this.ischecked = this.userProvider.check_terminos;
    }
    RegisterPage.prototype.getInfo = function () {
        this.responseParams = this.navParams.get('response');
        this.registerParams = this.navParams.get('register');
    };
    RegisterPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    RegisterPage.prototype.showPassword2 = function () {
        this.showPass2 = !this.showPass2;
        if (this.showPass2) {
            this.type2 = 'text';
        }
        else {
            this.type2 = 'password';
        }
    };
    RegisterPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.formGroup.valid) {
            this.formGroup.get('phone').setValue(this.registerParams.value);
            this.formGroup.get('country_id').setValue(this.responseParams.country_id);
            this.formGroup.get('user_verify_id').setValue(this.responseParams.id);
            this.formGroup.get('confirm_verify').setValue("phone");
            if ((this.formGroup.value.mail == this.formGroup.value.mail_conf) && (this.formGroup.value.password == this.formGroup.value.password_conf)) {
                var loading_1 = this.loadingCtrl.create({
                    spinner: 'hide',
                    content: "<img src='assets/imgs/buho.png'>",
                });
                if (this.userProvider.check_terminos) {
                    loading_1.present();
                    this.user_register.phone = this.registerParams.value;
                    this.user_register.country_id = this.responseParams.country_id;
                    this.user_register.user_verify_id = this.responseParams.id;
                    this.user_register.confirm_verify = 'phone';
                    this.api.post('auth/sign-up', this.formGroup.value).then(function (data) {
                        _this.userProvider.setUser(data);
                        _this.verifyConfirm();
                        loading_1.dismiss();
                        _this.presentWelcomeModal();
                    }).catch(function (error) {
                        var mensaje = "";
                        error.error.forEach(function (data) {
                            mensaje += data.message + "\n";
                        });
                        _this.errorProvider.obj.message = mensaje;
                        _this.errorProvider.presentModal();
                        loading_1.dismiss();
                    });
                }
                else {
                    this.errorProvider.obj.message = 'Por favor lea y acepte las políticas de uso y tratamiento de datos';
                    this.errorProvider.presentModal();
                }
            }
            else {
                // this.formGroup.setErrors(this.formGroup.errors)
            }
        }
    };
    RegisterPage.prototype.verifyConfirm = function () {
        var _this = this;
        this.api.get('account/confirm-verify', this.userProvider, {
            id: this.responseParams.id,
            type: 'phone',
            mail: this.userProvider.user_Info.mail,
        }).then(function (data) {
        }).catch(function (error) {
            var mensaje = "";
            error.error.forEach(function (data) {
                mensaje += data.message + "\n";
            });
            _this.errorProvider.obj.message = mensaje;
            _this.errorProvider.presentModal();
        });
    };
    RegisterPage.prototype.politicas = function () {
        var _this = this;
        var poli = this.modalCtrl.create('PoliticasPage');
        poli.present();
        poli.onDidDismiss((function (data) {
            _this.ischecked = true;
        }));
    };
    RegisterPage.prototype.presentWelcomeModal = function () {
        var _this = this;
        var modalWelcome = this.modalCtrl.create('ModalWelcomePage', { name: this.userProvider.user_Info.first_name + " " + this.userProvider.user_Info.last_name });
        modalWelcome.onWillDismiss(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
        modalWelcome.onDidDismiss(function (data) {
        });
        modalWelcome.present();
        this.userProvider.setUser(null);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/register/register.html"*/'<ion-content class="imgBackground vignette">\n	<div style="margin-top:12%" class="center">\n		<ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n	</div>\n	<div class="center">\n		<form [formGroup]="formGroup" (ngSubmit)="register()">\n			<ion-list>\n				<ion-item class="marginlists">\n					<ion-label stacked>{{\'NOMBRES\'|translate}}</ion-label>\n					<ion-input type="text" required name="userregistronombre" formControlName="first_name"></ion-input>\n				</ion-item>\n				<ion-item no-lines *ngIf="formGroup.invalid">\n					<msg-error [control]="formGroup.controls.first_name" name="Nombres"></msg-error>\n				</ion-item>\n				<ion-item class="marginlists">\n					<ion-label stacked>{{\'APELLIDOS\'||translate}}</ion-label>\n					<ion-input type="text" required name="userregistroapellido" formControlName="last_name">\n					</ion-input>\n				</ion-item>\n				<ion-item no-lines *ngIf="formGroup.invalid">\n					<msg-error [control]="formGroup.controls.last_name" name="Apellidos"></msg-error>\n				</ion-item>\n				<ion-item class="marginlists">\n					<ion-label stacked>{{\'GENERO\'|translate}}</ion-label>\n					<ion-select okText="Guardar" cancelText="Cancelar" formControlName="gender" name="userregistrogenero" interface="popover">\n						<ion-option value="f">Femenino</ion-option>\n						<ion-option value="m">Masculino</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item class="marginlists">\n					<ion-label stacked>{{\'EMAIL\'|translate}}</ion-label>\n					<ion-input type="email" required name="userregistroemail" formControlName="mail"></ion-input>\n				</ion-item>\n				<ion-item no-lines *ngIf="formGroup.invalid">\n					<msg-error [control]="formGroup.controls.mail" name="Email"></msg-error>\n				</ion-item>\n				<ion-item class="marginlists">\n					<ion-label stacked>{{\'CONFIRMAR_EMAIL\'|translate}}</ion-label>\n					<ion-input type="email" required name="confirmacionmail" formControlName="mail_conf"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-label stacked>{{\'CONTRASEÑA\'|translate}}</ion-label>\n					<ion-input type="{{type}}" name="contrasena" formControlName="password">\n					</ion-input>\n					<button *ngIf="!showPass" class="btn_show" ion-button clear color="dark" type="button" required item-right (click)="showPassword()">\n						<ion-icon name="ios-eye-off-outline"></ion-icon>\n					</button>\n					<button *ngIf="showPass" class="btn_show" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n						<ion-icon name="ios-eye-outline"></ion-icon>\n					</button>\n				</ion-item>\n\n				<ion-item no-lines *ngIf="formGroup.invalid">\n					<msg-error [control]="formGroup.controls.password" name="Contraseña"></msg-error>\n				</ion-item>\n\n				<ion-item class="marginlists">\n					<ion-label stacked>{{\'CONFIRMACION_CONTRASEÑA\'|translate}}</ion-label>\n					<ion-input type="{{type2}}" name="confirmacontrasena" formControlName="password_conf">\n					</ion-input>\n					<button *ngIf="!showPass2" class="btn_show2" ion-button clear color="dark" type="button" required item-right\n					 (click)="showPassword2()">\n						<ion-icon name="ios-eye-off-outline"></ion-icon>\n					</button>\n					<button *ngIf="showPass2" class="btn_show2" ion-button clear color="dark" type="button" item-right (click)="showPassword2()">\n						<ion-icon name="ios-eye-outline"></ion-icon>\n					</button>\n				</ion-item>\n				<div >\n					<button class="buttonPayCash" ion-button small type="submit">{{\'REGISTRARSE\'|translate}}</button>\n				</div>\n			</ion-list>\n		</form>\n	</div>\n	<ion-list>\n		<ion-col col-2>\n			<ion-checkbox [(ngModel)]="ischecked"></ion-checkbox>\n		</ion-col>\n		<ion-col col-10><span (click)="politicas()">{{\'POLITICAS_USO\'|translate}}</span></ion-col>\n	</ion-list>\n	<div style="margin-top: 6%" class="center">\n		<button class="buttonPayCash" (click)="cancel()" ion-button small>{{\'CANCELAR\'|translate}}</button>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map