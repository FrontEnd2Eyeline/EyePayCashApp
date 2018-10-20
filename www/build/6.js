webpackJsonp([6],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordPageModule", function() { return RecoveryPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_password__ = __webpack_require__(724);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */]),
            ],
        })
    ], RecoveryPasswordPageModule);
    return RecoveryPasswordPageModule;
}());

//# sourceMappingURL=recovery-password.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPasswordPage; });
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
 * Generated class for the RecoveryPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoveryPasswordPage = /** @class */ (function () {
    function RecoveryPasswordPage(navCtrl, navParams, api, toastCtrl, userProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.isvisible = true;
        this.data = null;
        this.type = 'phone';
        this.codigo = null;
        this.iscodigo = false;
    }
    RecoveryPasswordPage.prototype.sendMessage = function (type) {
        var _this = this;
        this.type = type;
        if (this.data != null) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots'
            });
            loading_1.present();
            this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(function (data) {
                loading_1.dismiss();
                _this.iscodigo = true;
                _this.reset = data;
            }).catch(function (error) {
                loading_1.dismiss();
                var mensaje = "";
                error.error.forEach(function (data) {
                    mensaje += data.message + "\n";
                });
                var toast = _this.toastCtrl.create({
                    message: mensaje,
                    showCloseButton: true,
                    closeButtonText: 'cerrar',
                    position: 'middle',
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese su número celular.',
                showCloseButton: true,
                closeButtonText: 'cerrar',
                position: 'middle',
            });
            toast.present();
        }
    };
    RecoveryPasswordPage.prototype.changeVisible = function () {
        this.isvisible = !this.isvisible;
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
                var toast = this.toastCtrl.create({
                    message: 'El código ingresado no coincide.',
                    showCloseButton: true,
                    closeButtonText: 'cerrar',
                    position: 'middle',
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese el código de verificación',
                showCloseButton: true,
                closeButtonText: 'cerrar',
                position: 'middle',
            });
            toast.present();
        }
    };
    RecoveryPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recovery-password',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/recovery-password/recovery-password.html"*/'<ion-content padding class="back vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n  </div>\n\n  <div *ngIf="isvisible">\n    <ion-item>\n      <ion-label stacked>Ingrese número celular</ion-label>\n      <ion-input type="text" [(ngModel)]="data" name="userdata"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="iscodigo">\n      <ion-label stacked>Ingrese código de verificación</ion-label>\n      <ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n    </ion-item>\n    <ion-row class="divMargin">\n      <ion-col col-12 *ngIf="!iscodigo">\n        <button ion-button (click)="sendMessage(\'phone\')" block class="buttonPayCash">Enviar mensaje</button>\n      </ion-col>\n      <ion-col col-12 *ngIf="iscodigo">\n        <button ion-button (click)="confirmCode()" block class="buttonPayCash">Confirmar código</button>\n      </ion-col>\n    </ion-row>\n    <ion-row class="marginLft divMargin20">\n      <ion-col col-4>\n        <button ion-button (click)="cancelar()" class="buttonPayCash">Cancelar</button>\n      </ion-col>\n      <ion-col col-6 *ngIf="!iscodigo">\n        <button ion-button (click)="changeVisible()" class="buttonPayCash">Recuperar por email</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="!isvisible">\n    <ion-item>\n      <ion-label stacked>Ingrese su email</ion-label>\n      <ion-input type="text" [(ngModel)]="data" name="dataname"></ion-input>\n    </ion-item>\n\n\n    <ion-item *ngIf="iscodigo">\n      <ion-label stacked>Ingrese código de verificación</ion-label>\n      <ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n    </ion-item>\n    <ion-row class="divMargin">\n      <ion-col col-12 *ngIf="!iscodigo">\n        <button ion-button (click)="sendMessage(\'mail\')" block class="buttonPayCash">Enviar email</button>\n      </ion-col>\n      <ion-col col-12 *ngIf="iscodigo">\n        <button ion-button (click)="confirmCode()" block class="buttonPayCash">Confirmar código</button>\n      </ion-col>\n    </ion-row>\n    <ion-row class="marginLft divMargin">\n      <ion-col col-4>\n        <button ion-button (click)="cancelar()" class="buttonPayCash">Cancelar</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button (click)="changeVisible()" class="buttonPayCash">Recuperar por SMS</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/recovery-password/recovery-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RecoveryPasswordPage);
    return RecoveryPasswordPage;
}());

//# sourceMappingURL=recovery-password.js.map

/***/ })

});
//# sourceMappingURL=6.js.map