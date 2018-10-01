webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(278);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    function RegisterPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    //  Alerta ragistro
    RegisterPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Registro',
            subTitle: 'Correctamente',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    // Navegación
    RegisterPage.prototype.navCancel = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.navRegister = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.navPoliPage = function () {
        this.navCtrl.push('PoliticsPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/register/register.html"*/'<ion-content class="imgBackground2 vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogoPpal.png"></ion-img>\n  </div>\n  <div style="margin-top:10%" class="center">\n    <ion-list>\n      <ion-item class="≈" style="border-radius:10px">\n        <ion-label fixed>Nombres</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label fixed>Apellidos</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label>Género</ion-label>\n        <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="gender">\n          <ion-option value="f">Femenino</ion-option>\n          <ion-option value="m">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label fixed>Contraseña</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n  <div style="margin-top: -20%" padding class="center">\n    <ion-label (click)="navPoliPage()" style="color:white; font-size: 16px" floating>Políticas de uso</ion-label>\n    <ion-label (click)="presentToast2()" style="color:white; font-size: 16px" floating>Privacidad de la información</ion-label>\n  </div>\n\n  <div style="margin-top: 6%" class="center">\n    <button style="border-radius: 0%" class="buttonBackground" (click)="navCancel()" ion-button small>Cancelar</button>\n    <button style="border-radius: 0%" class="buttonBackground" (click)="presentAlert()" ion-button small>Registrarse</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map