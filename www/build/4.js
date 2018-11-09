webpackJsonp([4],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdatePageModule", function() { return PasswordUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_update__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(740);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PasswordUpdatePageModule = /** @class */ (function () {
    function PasswordUpdatePageModule() {
    }
    PasswordUpdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_update__["a" /* PasswordUpdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_update__["a" /* PasswordUpdatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], PasswordUpdatePageModule);
    return PasswordUpdatePageModule;
}());

//# sourceMappingURL=password-update.module.js.map

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

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordUpdatePage; });
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
 * Generated class for the PasswordUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordUpdatePage = /** @class */ (function () {
    function PasswordUpdatePage(navCtrl, navParams, api, toastCtrl, userProvider, loadingCtrl, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.errorProvider = errorProvider;
        this.infoRecovery = {
            new_password: null,
            new_password_conf: null,
            reset_id: null,
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            new_password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
            ]),
            new_password_conf: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required
            ]),
            reset_id: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
        });
        this.infoRecovery.reset_id = navParams.get('reset_id');
        this.formGroup.get('reset_id').setValue(this.infoRecovery.reset_id);
    }
    PasswordUpdatePage.prototype.recovery = function () {
        var _this = this;
        if (this.formGroup.valid) {
            var cargando_1 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            cargando_1.present();
            this.api.post('auth/update-password', this.formGroup.value).then(function (data) {
                cargando_1.dismiss();
                _this.errorProvider.obj.message = 'Contraseña actualizada correctamente';
                _this.errorProvider.presentModal();
                _this.navCtrl.setRoot('LoginPage');
            }).catch(function (error) {
                var mensaje = '';
                cargando_1.dismiss();
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            });
        }
        // if (this.infoRecovery.new_password != null && this.infoRecovery.new_password_conf != null) {
        // 	if (this.infoRecovery.new_password_conf == this.infoRecovery.new_password) {
        // 		if (this.infoRecovery.new_password.length >= 6 && this.infoRecovery.new_password_conf.length >= 6) {
        // 			let loading = this.loadingCtrl.create({
        // 				spinner: 'dots',
        // 			});
        // 			loading.present();
        // 			this.api.post('auth/update-password', this.infoRecovery).then((data) => {
        // 				loading.dismiss();
        // 				this.errorProvider.obj.message = 'Contraseña actualizada correctamente';
        // 				this.errorProvider.presentModal();
        // 				this.navCtrl.setRoot('LoginPage');
        // 			}).catch((error) => {
        // 				let mensaje = '';
        // 				loading.dismiss();
        // 				error.error.forEach(data => {
        // 					mensaje += data.message + "\n";
        // 				});
        // 				this.errorProvider.obj.message = mensaje;
        // 				this.errorProvider.presentModal();
        // 			});
        // 		} else {
        // 			this.errorProvider.obj.message = 'La contraseña debe tener mínimo 6 caracteres';
        // 			this.errorProvider.presentModal();
        // 		}
        // 	} else {
        // 		this.errorProvider.obj.message = 'Las contraseñas no cinciden';
        // 		this.errorProvider.presentModal();
        // 	}
        // } else {
        // 	this.errorProvider.obj.message = 'Los datos son obligatorios';
        // 	this.errorProvider.presentModal();
        // }
    };
    PasswordUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password-update',template:/*ion-inline-start:"/Users/frontend/Documents/GitHub/eyepaycashapp/src/pages/password-update/password-update.html"*/'<!--\n  Generated template for the PasswordUpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="fondo_gris">\n  <form [formGroup]="formGroup"  (ngSubmit)="recovery()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Ingrese la nueva contraseña</ion-label>\n        <ion-input type="password" required  name="recovery_pass" formControlName="new_password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Confirme la nueva contraseña</ion-label>\n        <ion-input type="password" required name="recovery_pass2" formControlName="new_password_conf"></ion-input>\n	  </ion-item>\n	  <ion-item no-lines *ngIf="formGroup.invalid">\n			<msg-error [control]="formGroup.controls.new_password" name="Recovery"></msg-error>\n			<msg-error [control]="formGroup.controls.new_password_conf" name="Recovery2"></msg-error>\n		</ion-item>\n      <ion-item>\n        <button ion-button class="buttonPayCash" block>Guardar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/frontend/Documents/GitHub/eyepaycashapp/src/pages/password-update/password-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], PasswordUpdatePage);
    return PasswordUpdatePage;
}());

//# sourceMappingURL=password-update.js.map

/***/ })

});
//# sourceMappingURL=4.js.map