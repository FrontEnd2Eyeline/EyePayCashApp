webpackJsonp([9],{

<<<<<<< HEAD
/***/ 692:
=======
/***/ 691:
>>>>>>> 617e80f1d3adcfaa2ff36bb5724e106744f94486
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(709);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(708);
>>>>>>> 617e80f1d3adcfaa2ff36bb5724e106744f94486
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 709:
=======
/***/ 708:
>>>>>>> 617e80f1d3adcfaa2ff36bb5724e106744f94486
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    // imagen = 'assets/backgrounds/Background1.png';
    function LoginPage(navCtrl, loadingCtrl, userProvider, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.mail = null;
        this.password = null;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var cargando = this.loadingCtrl.create({
            spinner: 'dots',
            duration: 3000,
        });
        cargando.present();
        if (this.mail != null && this.password != null) {
            this.userProvider.login(this.mail, this.password)
                .then(function (data) {
                if (data.success == 'ok') {
                    _this.navCtrl.setRoot("HomePage");
                    cargando.dismiss();
                }
                else {
                    cargando.dismiss();
                }
            }).catch(function (data) {
            });
        }
        else {
            cargando.dismiss();
            var toast = this.toastCtrl.create({
                message: 'Todos los datos son requeridos',
                duration: 3000,
            });
            toast.present();
        }
    };
    LoginPage.prototype.recuperarcontrasena = function () {
        var modal = this.modalCtrl.create('RecoveryPasswordPage');
        modal.present();
    };
    LoginPage.prototype.registro = function () {
        this.navCtrl.push("RegNumberPhonePage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-login',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/login/login.html"*/'<ion-content class="imgBackground vignette">\n  <div class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n  </div>\n  <form #formulario (submit)="login()">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder="Email" class="inputClass marginItems" type="email" required name="correo"\n                   [(ngModel)]="mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder="Contraseña" class="inputClass marginItems" type="password" [(ngModel)]="password"\n                   name="userpass"></ion-input>\n      </ion-item>\n      <ion-item class="center">\n        <button class="buttonPayCash borderBtns" ion-button small>INGRESAR</button>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-item>\n    <ion-col col-6>\n      <button class="textWhite" ion-button (click)="registro()" clear block class="transparente">Registrarme</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button (click)="recuperarcontrasena()" clear block class="transparente">Recuperar contraseña</button>\n    </ion-col>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/login/login.html"*/,
=======
            selector: 'page-login',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/login/login.html"*/'<ion-content class="imgBackground vignette">\n  <div class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n  </div>\n  <form #formulario (submit)="login()">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder="Email" class="inputClass marginItems" type="email" required name="correo"\n                   [(ngModel)]="mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder="Contraseña" class="inputClass marginItems" type="password" [(ngModel)]="password"\n                   name="userpass"></ion-input>\n      </ion-item>\n      <ion-item class="center">\n        <button class="buttonPayCash borderBtns" ion-button small>INGRESAR</button>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-item>\n    <ion-col col-6>\n      <button class="textWhite" ion-button (click)="registro()" clear block class="transparente">Registrarme</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button (click)="recuperarcontrasena()" clear block class="transparente">Recuperar contraseña</button>\n    </ion-col>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/login/login.html"*/,
>>>>>>> 617e80f1d3adcfaa2ff36bb5724e106744f94486
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map