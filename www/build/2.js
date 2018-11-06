webpackJsonp([2],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordPageModule", function() { return RecoveryPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_password__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(738);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RecoveryPasswordPageModule = /** @class */ (function () {
    function RecoveryPasswordPageModule() {
    }
    RecoveryPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], RecoveryPasswordPageModule);
    return RecoveryPasswordPageModule;
}());

//# sourceMappingURL=recovery-password.module.js.map

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

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the RecoveryPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoveryPasswordPage = /** @class */ (function () {
    function RecoveryPasswordPage(navCtrl, navParams, api, toastCtrl, userProvider, loadingCtrl, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.errorProvider = errorProvider;
        this.isvisible = true;
        this.data = null;
        this.type = 'phone';
        this.codigo = null;
        this.iscodigo = false;
        this.iscodigo2 = false;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            data: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].maxLength(70),
            ]),
        });
    }
    RecoveryPasswordPage.prototype.sendMessage = function (type) {
        var _this = this;
        this.type = type;
        if ((this.formGroup.value.data != "") || (this.data != "")) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<img src='assets/imgs/buho.png'>",
            });
            loading_1.present();
            if (this.type != 'phone')
                this.data = this.formGroup.value.data;
            // this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(
            this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(function (data) {
                loading_1.dismiss();
                if (type != "phone") {
                    _this.iscodigo = true;
                }
                else {
                    _this.iscodigo2 = true;
                }
                _this.reset = data;
                _this.data = null;
                _this.errorProvider.obj.message = 'Se ha enviado un código de verificación';
                _this.errorProvider.presentModal();
            }).catch(function (error) {
                loading_1.dismiss();
                var mensaje = "";
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            });
        }
        else {
            var mensaje = "número celular";
            if (type != "phone")
                mensaje = "dirección email";
            this.errorProvider.obj.message = 'Por favor ingrese su ' + mensaje;
            this.errorProvider.presentModal();
        }
    };
    RecoveryPasswordPage.prototype.changeVisible = function () {
        this.isvisible = !this.isvisible;
        this.data = null;
    };
    RecoveryPasswordPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RecoveryPasswordPage.prototype.confirmCode = function () {
        if (this.codigo != null) {
            if (this.reset.password_code_req == this.codigo) {
                this.navCtrl.push('PasswordUpdatePage', { 'reset_id': this.reset.id });
            }
            else {
                this.errorProvider.obj.message = 'El código ingresado no coincide';
                this.errorProvider.presentModal();
            }
        }
        else {
            this.errorProvider.obj.message = 'Por favor ingrese el código de verificación';
            this.errorProvider.presentModal();
        }
    };
    RecoveryPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recovery-password',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/recovery-password/recovery-password.html"*/'<ion-content padding class="back vignette">\n	<div style="margin-top:12%" class="center">\n		<ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n	</div>\n\n	<div *ngIf="isvisible">\n		<ion-item>\n			<ion-label stacked>{{\'INGRESE_CELULAR\'|translate}}</ion-label>\n			<ion-input type="text" [(ngModel)]="data" name="userdata"></ion-input>\n		</ion-item>\n		<ion-item *ngIf="iscodigo2">\n			<ion-label stacked>{{\'INGRESE_CODIGO_VERIFICACION\'|translate}}</ion-label>\n			<ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n		</ion-item>\n		<ion-row class="divMargin">\n			<ion-col col-12 *ngIf="!iscodigo2">\n				<button ion-button (click)="sendMessage(\'phone\')" block class="buttonPayCash">{{\'ENVIAR_MENSAJE\'|translate}}</button>\n			</ion-col>\n			<ion-col col-12 *ngIf="iscodigo2">\n				<button ion-button (click)="confirmCode()" block class="buttonPayCash">{{\'CONFIRMAR_CODIGO\'|translate}}Confirmar código</button>\n			</ion-col>\n		</ion-row>\n		<ion-row class="marginLft divMargin20">\n			<ion-col col-4>\n				<button ion-button (click)="cancelar()" class="buttonPayCash">{{\'CANCELAR\'|translate}}</button>\n			</ion-col>\n			<ion-col col-6 *ngIf="!iscodigo2">\n				<button ion-button (click)="changeVisible()" class="buttonPayCash">{{\'RECUPERAR_X_EMAIL\'|translate}}</button>\n			</ion-col>\n		</ion-row>\n	</div>\n\n	<div *ngIf="!isvisible">\n			<div [formGroup]="formGroup">\n		<ion-item>\n			<ion-label stacked>{{\'INGRESE_EMAIL\'|translate}}</ion-label>\n			<ion-input type="text"  name="dataname" required formControlName="data"></ion-input>		\n		</ion-item>\n		<ion-item no-lines *ngIf="formGroup.invalid">\n				<msg-error [control]="formGroup.controls.data"></msg-error>\n		</ion-item>\n	</div>\n		<ion-item *ngIf="iscodigo">\n			<ion-label stacked>{{\'INGRESE_CODIGO_VERIFICACION\'|translate}}</ion-label>\n			<ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n		</ion-item>\n		<ion-row class="divMargin">\n			<ion-col col-12 *ngIf="!iscodigo">\n				<button ion-button (click)="sendMessage(\'mail\')" block class="buttonPayCash">{{\'ENVIAR_EMAIL\'|translate}}</button>\n			</ion-col>\n			<ion-col col-12 *ngIf="iscodigo">\n				<button ion-button (click)="confirmCode()" block class="buttonPayCash">{{\'CONFIRMAR_CODIGO\'|translate}}</button>\n			</ion-col>\n		</ion-row>\n		<ion-row class="marginLft divMargin">\n			<ion-col col-4>\n				<button ion-button (click)="cancelar()" class="buttonPayCash">{{\'CANCELAR\'|translate}}</button>\n			</ion-col>\n			<ion-col col-6>\n				<button ion-button (click)="changeVisible()" class="buttonPayCash">{{\'RECUPERAR_X_SMS\'|translate}}</button>\n			</ion-col>\n		</ion-row>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/recovery-password/recovery-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], RecoveryPasswordPage);
    return RecoveryPasswordPage;
}());

//# sourceMappingURL=recovery-password.js.map

/***/ })

});
//# sourceMappingURL=2.js.map