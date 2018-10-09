webpackJsonp([1],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(715);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the ModalWelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalWelcomePage = /** @class */ (function () {
    function ModalWelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = null;
        this.getInfo();
    }
    ModalWelcomePage.prototype.getInfo = function () {
        this.name = this.navParams.get('name');
    };
    ModalWelcomePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalWelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-welcome',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-welcome/modal-welcome.html"*/'<!--\n  Generated template for the ModalWelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="tamano">\n  <ion-row>\n    <ion-col col-10>\n      <h4>Bienvenido {{name}}</h4>\n    </ion-col>\n    <ion-col col-2>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="closeModal()">\n          <ion-icon item-right name="ios-close-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n\n  <img src="assets/imgs/ok.png">\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-welcome/modal-welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalWelcomePage);
    return ModalWelcomePage;
}());

//# sourceMappingURL=modal-welcome.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_welcome_modal_welcome__ = __webpack_require__(700);
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
    function RegisterPage(navCtrl, navParams, toastCtl, api, userProvider, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtl = toastCtl;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.responseParams = null;
        this.registerParams = null;
        this.user_register = {
            first_name: null,
            last_name: null,
            gender: null,
            mail: null,
            password: null,
            //datos obtenidos por el params
            phone: null,
            country_id: null,
            user_verify_id: null,
            confirm_verify: null,
        };
        this.type = 'password';
        this.showPass = false;
        this.imagen = 'assets/backgrounds/Background3.png';
        this.ischecked = this.userProvider.check_terminos;
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
    RegisterPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.user_register.first_name != null && this.user_register.last_name != null && this.user_register.gender != null && this.user_register.password != null && this.user_register.mail != null) {
            var size = this.user_register.password;
            if (size.length >= 6) {
                if (this.userProvider.check_terminos) {
                    var loading_1 = this.loadingCtrl.create({
                        spinner: 'dots',
                    });
                    loading_1.present();
                    this.user_register.phone = this.registerParams.value;
                    this.user_register.country_id = this.responseParams.country_id;
                    this.user_register.user_verify_id = this.responseParams.id;
                    this.user_register.confirm_verify = 'phone';
                    this.api.post('auth/sign-up', this.user_register).then(function (data) {
                        _this.userProvider.setUser(data);
                        _this.verifyConfirm();
                        loading_1.dismiss();
                        _this.presentWelcomeModal();
                    });
                }
                else {
                    var toast = this.toastCtl.create({
                        message: 'Por favor lea y acepte las políticas de uso y tratamiento de datos.',
                        duration: 3000
                    });
                    toast.present();
                }
            }
            else {
                var toast = this.toastCtl.create({
                    message: 'Contraseña debe tener mínimo 6 letras o números.',
                    duration: 3000,
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtl.create({
                message: 'Toda la información es requerida',
                duration: 3000,
            });
            toast.present();
        }
    };
    RegisterPage.prototype.verifyConfirm = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
        });
        loading.present();
        this.api.get('account/confirm-verify', this.userProvider, {
            id: this.responseParams.id,
            type: 'phone'
        }).then(function (data) {
            loading.dismiss();
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
        var modalWelcome = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_welcome_modal_welcome__["a" /* ModalWelcomePage */], { name: this.userProvider.user_Info.first_name + " " + this.userProvider.user_Info.last_name });
        modalWelcome.onWillDismiss(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
        modalWelcome.onDidDismiss(function (data) {
            console.log('close');
        });
        modalWelcome.present();
        this.userProvider.setUser(null);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/register/register.html"*/'<ion-content class="imgBackground vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n  </div>\n  <div class="center">\n    <ion-list>\n      <ion-item class="marginlists" >\n        <ion-label stacked>Nombres</ion-label>\n        <ion-input type="text" required name="userregistronombre" [(ngModel)]="user_register.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Apellidos</ion-label>\n        <ion-input type="text" required name="userregistroapellido"\n                   [(ngModel)]="user_register.last_name"></ion-input>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Género</ion-label>\n        <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="user_register.gender" name="userregistrogenero">\n          <ion-option value="f">Femenino</ion-option>\n          <ion-option value="m">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" required name="userregistroemail"\n                   [(ngModel)]="user_register.mail"></ion-input>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="{{type}}" name="userregistrocontrasena"\n                   required [(ngModel)]="user_register.password"></ion-input>\n        <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n  <ion-list>\n\n      <ion-col col-2>\n        <!--<ion-checkbox (ionChange)="aceptarTerminos()"></ion-checkbox>-->\n        <ion-checkbox [(ngModel)]="ischecked"></ion-checkbox>\n      </ion-col>\n      <ion-col col-10><span (click)="politicas()"> Leí y acepto las políticas de uso  y privacidad de la información</span></ion-col>\n\n  </ion-list>\n  <div style="margin-top: 6%" class="center">\n    <button style="border-radius: 0%" class="buttonPayCash" (click)="cancel()" ion-button small>Cancelar</button>\n    <button style="border-radius: 0%" class="buttonPayCash" (click)="register()" ion-button small>Registrarse\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _g || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map