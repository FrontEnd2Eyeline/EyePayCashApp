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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(91);
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
    //==================================== variables para la verificacion
    //===========================================
    function AccountPage(navCtrl, navParams, api, userProvider, toastCtrl, loadingCtrl, modal, locationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.locationProvider = locationProvider;
        this.usuario = null;
        this.country = null;
        this.verify = null;
        this.type = 'password';
        this.showPass = false;
        this.type2 = 'password';
        this.showPass2 = false;
        //=================================== controlar visibilidad inputs y botones
        this.isphone = true;
        this.ismail = false;
        this.getInfo();
    }
    AccountPage.prototype.getInfo = function () {
        this.usuario = this.userProvider.user_Info;
        this.country = this.userProvider.user_Country;
        this.verify = this.userProvider.User_Verify;
    };
    AccountPage.prototype.actualizar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
        });
        loading.present();
        if (this.usuario.first_name != null && this.usuario.last_name != null &&
            this.usuario.first_name != "" && this.usuario.last_name != "") {
            if (this.usuario.first_name.length > 2 && this.usuario.last_name.length > 2) {
                this.api.post('account/update-info', this.usuario, this.userProvider).then(function (data) {
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
                var toast = this.toastCtrl.create({
                    message: 'Nombre y apellido deben contener más de 2 caracteres.',
                    showCloseButton: true,
                    closeButtonText: 'cerrar',
                    position: 'middle',
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Todos los campos son obligatorios.',
                showCloseButton: true,
                closeButtonText: 'cerrar',
                position: 'middle',
            });
            loading.dismiss();
            toast.present();
        }
    };
    AccountPage.prototype.clearVar = function () {
        this.isphone = true;
        this.ismail = false;
    };
    AccountPage.prototype.cerrarSesion = function () {
        window.localStorage.clear();
        this.navCtrl.setRoot('LoginPage');
    };
    AccountPage.prototype.reenviarConfirm = function (tipo) {
        this.api.get("account/re-send-verify", this.userProvider, { type: tipo }).then(function (data) {
            console.log(data);
        }).catch();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Información de cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button (click)="cerrarSesion()" block class="buttonPayCash">Cerrar sesión</button>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Account.png"></ion-img>\n      <!-- <ion-icon name="person" item-start></ion-icon> -->\n      Información personal\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombres</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Género</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero" interface="popover">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">Actualizar información</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/key.png"></ion-img>\n      Información de cuenta\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>Email</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Teléfono</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n      <ion-row>\n        <button ion-button class="buttonPayCash" *ngIf="usuario.userVerify.is_phone_verify ==0" (click)="reenviarConfirm(\'phone\')">Reenviar confirmación móvil</button>\n        <button ion-button class="buttonPayCash" *ngIf="usuario.userVerify.is_mail_verify ==0" (click)="reenviarConfirm(\'mail\')">Reenviar confirmación email</button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Ubicacion.png"></ion-img>\n      Información de ubicación\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>País</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de teléfono</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de país</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Moneda del país</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__["a" /* GeolocationProvider */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=14.js.map