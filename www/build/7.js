webpackJsonp([7],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdatePageModule", function() { return PasswordUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_update__ = __webpack_require__(716);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_update__["a" /* PasswordUpdatePage */]),
            ],
        })
    ], PasswordUpdatePageModule);
    return PasswordUpdatePageModule;
}());

//# sourceMappingURL=password-update.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(46);
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
 * Generated class for the PasswordUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordUpdatePage = /** @class */ (function () {
    function PasswordUpdatePage(navCtrl, navParams, api, toastCtrl, userProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.infoRecovery = {
            new_password: null,
            new_password_conf: null,
            user_id: null,
        };
    }
    PasswordUpdatePage.prototype.recovery = function () {
        var _this = this;
        if (this.infoRecovery.new_password != null && this.infoRecovery.new_password_conf != null) {
            if (this.infoRecovery.new_password_conf == this.infoRecovery.new_password) {
                if (this.infoRecovery.new_password.length >= 6 && this.infoRecovery.new_password_conf.length >= 6) {
                    var loading_1 = this.loadingCtrl.create({
                        spinner: 'dots',
                    });
                    loading_1.present();
                    this.infoRecovery.user_id = this.userProvider.userRecovery.user_id;
                    this.api.post('auth/update-password', this.infoRecovery).then(function (data) {
                        loading_1.dismiss();
                        console.log(data);
                        var toast = _this.toastCtrl.create({
                            message: 'Contraseña actualizada correctamente',
                            duration: 3000,
                        });
                        toast.present();
                        _this.navCtrl.setRoot('LoginPage');
                    }).catch(function (error) {
                        loading_1.dismiss();
                    });
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: 'La constraseña debe tener mìnimo 6 caracteres'
                    });
                    toast.present();
                }
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Las contraseñas no coinciden',
                    duration: 3000,
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Los datos son obligatorios',
                duration: 3000,
            });
            toast.present();
        }
    };
    PasswordUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password-update',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/password-update/password-update.html"*/'<!--\n  Generated template for the PasswordUpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="fondo_gris">\n  <form #formulario (submit)="recovery()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Ingrese la nueva contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="infoRecovery.new_password" name="recovery_pass"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Confirme la nueva contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="infoRecovery.new_password_conf" name="recovery_pass2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button class="buttonPayCash" block>Guardar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/password-update/password-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PasswordUpdatePage);
    return PasswordUpdatePage;
}());

//# sourceMappingURL=password-update.js.map

/***/ })

});
//# sourceMappingURL=7.js.map