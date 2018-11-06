webpackJsonp([21],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinsPageModule", function() { return CoinsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins__ = __webpack_require__(740);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(94);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoinsPageModule = /** @class */ (function () {
    function CoinsPageModule() {
    }
    CoinsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coins__["a" /* CoinsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coins__["a" /* CoinsPage */]),
            ],
        })
    ], CoinsPageModule);
    return CoinsPageModule;
}());

//# sourceMappingURL=coins.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__ = __webpack_require__(387);
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
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
 * Generated class for the CoinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoinsPage = /** @class */ (function () {
    function CoinsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
<<<<<<< HEAD
    CoinsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoinsPage');
=======
    AccountPage.prototype.getInfo = function () {
        this.usuario = this.userProvider.user_Info;
        this.country = this.userProvider.user_Country;
        this.controlBtns();
    };
    AccountPage.prototype.actualizar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: '¿Desea actualizar la información?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
                {
                    text: 'Actualizar',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "<img src='assets/imgs/buho.png'>",
                        });
                        loading.present();
                        if (_this.usuario.first_name != null && _this.usuario.last_name != null &&
                            _this.usuario.first_name != "" && _this.usuario.last_name != "") {
                            if (_this.usuario.first_name.length > 2 && _this.usuario.last_name.length > 2) {
                                _this.api.post('account/update-info', _this.usuario, _this.userProvider)
                                    .then(function (data) {
                                    _this.errorProvider.obj.message = 'Información personal acrtualizada correctamente';
                                    _this.errorProvider.presentModal();
                                    _this.usuario = data;
                                    loading.dismiss();
                                }).catch(function (error) {
                                    // let mensaje = 'Por favor corrija lo siguiente \n';
                                    var mensaje = '';
                                    error.error.forEach(function (data) {
                                        mensaje += data.field + ": " + data.message + "\n";
                                    });
                                    _this.errorProvider.obj.message = mensaje;
                                    _this.errorProvider.presentModal();
                                    loading.dismiss();
                                });
                            }
                            else {
                                loading.dismiss();
                                _this.errorProvider.obj.message = 'Nombre y apellido deben contener más de 2 caracteres';
                                _this.errorProvider.presentModal();
                            }
                        }
                        else {
                            _this.errorProvider.obj.message = 'Todos los campos son obligatorios';
                            _this.errorProvider.presentModal();
                            loading.dismiss();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    AccountPage.prototype.cerrarSesion = function () {
        console.log("cualquiercosa");
        window.localStorage.clear();
        this.navCtrl.setRoot('LoginPage');
    };
    AccountPage.prototype.reenviarConfirm = function (tipo) {
        var _this = this;
        this.code_Verify_Phone = null;
        this.code_Verify_Mail = null;
        this.responseVerify = null;
        if (tipo == 'phone') {
            this.view_Verify_Phone = true;
            this.view_Verify_Mail = false;
            this.view_Btn_mail = false;
        }
        else {
            this.view_Verify_Phone = false;
            this.view_Btn_phone = false;
            this.view_Verify_Mail = true;
        }
        this.api.get("account/re-send-verify", this.userProvider, { type: tipo }).then(function (data) {
            _this.responseVerify = data;
        }).catch();
    };
    AccountPage.prototype.validateCode = function (tipo) {
        var _this = this;
        var guardar = false;
        if (tipo == 'mail') {
            if (this.code_Verify_Mail == this.responseVerify.mail_code) {
                guardar = true;
            }
            else {
                guardar = false;
                this.errorProvider.obj.message = 'El código no coincide';
                this.errorProvider.presentModal();
            }
        }
        else {
            if (this.code_Verify_Phone == this.responseVerify.phone_code) {
                guardar = true;
            }
            else {
                guardar = false;
                this.errorProvider.obj.message = 'El código no coincide';
                this.errorProvider.presentModal();
            }
        }
        this.code_Verify_Mail = null;
        this.code_Verify_Phone = null;
        if (guardar)
            this.api.get("account/confirm-verify", this.userProvider, { "type": tipo, id: this.responseVerify.id })
                .then(function (data) {
                if (data.success == "ok") {
                    if (tipo == 'mail')
                        _this.userProvider.User_Verify.is_mail_verify = 1;
                    else
                        _this.userProvider.User_Verify.is_phone_verify = 1;
                }
                _this.responseVerify = null;
                _this.view_Verify_Mail = false;
                _this.view_Verify_Phone = false;
                _this.controlBtns();
            });
    };
    AccountPage.prototype.cancelValidation = function () {
        this.responseVerify = null;
        this.view_Verify_Mail = false;
        this.view_Verify_Mail = false;
        this.code_Verify_Phone = null;
        this.code_Verify_Mail = null;
    };
    AccountPage.prototype.controlBtns = function () {
        if (this.userProvider.User_Verify.is_mail_verify == 0)
            this.view_Btn_mail = true;
        else
            this.view_Btn_mail = false;
        if (this.userProvider.User_Verify.is_phone_verify == 0)
            this.view_Btn_phone = true;
        else
            this.view_Btn_phone = false;
    };
    AccountPage.prototype.goPage = function (page) {
        if (page == 'profile')
            //this.navCtrl.push("ProfilePage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ProfilePage' }]);
        else if (page == 'history')
            //this.navCtrl.push("HistoryPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'HistoryPage' }]);
        else if (page == "maps")
            //this.navCtrl.push("MapPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'MapPage' }]);
        else if (page == "contact")
            //this.navCtrl.push("ContactsPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'ContactsPage' }]);
        else
            //this.navCtrl.push("TransactionPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);
    };
    AccountPage.prototype.foto = function () {
        var _this = this;
        this.alertCtrl.create({
            buttons: [
                {
                    text: 'Tomar una foto',
                    handler: function () { return _this.tomarFoto(); }
                },
                {
                    text: 'Seleccionar una foto',
                    handler: function () { return _this.seleccionarFoto(); }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                }
            ]
        }).present();
    };
    AccountPage.prototype.tomarFoto = function () {
        var _this = this;
        this.camera.getPhoto().then(function (data) {
            _this.enviarServidor(data);
        });
    };
    AccountPage.prototype.seleccionarFoto = function () {
        var _this = this;
        this.camera.getPhotoDirectory().then(function (data) {
            _this.enviarServidor(data);
        });
    };
    AccountPage.prototype.enviarServidor = function (data64) {
        var _this = this;
        this.api.post('account/perfil', { pic: data64 }, this.userProvider).then(function (data) {
            //  AQUI HAY QUE HACER QUE RECIBA LA DATA DEL THEN Y ACTUALIZE LA VARIABLE USER. A LA VARIABLE USER HAY QUE ANEXARLE
            // EL ATTRIBUTO URL_FOTO
            var toast = _this.toastCtrl.create({
                message: 'Foto cambiada correctamente',
                duration: 3000,
            });
            toast.present();
        }).catch();
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
    };
    CoinsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-coins',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/coins/coins.html"*/'<!--\n  Generated template for the CoinsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coins</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/coins/coins.html"*/,
=======
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/'<ion-header>\n  <div class="BackgroundPpal styleDivTitle">\n    <div style="background: transparent">\n      <img (click)="cerrarSesion()"  class="icoClose" icon-end src="assets/newIcons/17.png">\n    </div>\n    <ion-row>\n      <ion-col>\n        <img class="styleLogo mrgTop25" src="assets/newIcons/24.png" (click)="foto()">\n      </ion-col>\n    </ion-row>\n    <div class="center">\n      <h6 class="styleTextName">{{usuario.first_name}} {{usuario.last_name}}</h6>\n    </div>\n  </div>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Email</ion-label>\n        <ion-input disabled text-right placeholder="{{usuario.mail}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Teléfono</ion-label>\n        <ion-input disabled text-right placeholder="{{usuario.phone}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Sexo</ion-label>\n        <ion-input disabled *ngIf="usuario.gender==\'m\'" text-right placeholder="Masculino"></ion-input>\n        <ion-input disabled *ngIf="usuario.gender==\'f\'" text-right placeholder="Femenino"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>País</ion-label>\n        <ion-input disabled text-right placeholder="{{country.name}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Indicativo</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.phone_code}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Código del país</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.country_code}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Moneda</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.currency}}"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n  <div>\n    <h1 style="color: red; text-align: center; font-size: 14px">Eliminar cuenta</h1>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col class="center2" col-2 (click)="goPage(\'precios\')">\n          <img width="40" height="40" src="assets/newIcons/11.png">\n          <p>Precios</p>\n        </ion-col>\n        <ion-col class="center2" col-3 (click)="goPage(\'transaction\')">\n          <img width="40" height="40" src="assets/icon/1.png">\n          <p>{{\'TRANSACCION\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2 mar1Left" col-2 (click)="goPage(\'history\')">\n          <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n          <img width="40" height="40" src="assets/icon/2.png">\n          <p>{{\'HISTORIAL\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-2 (click)="goPage(\'maps\')">\n          <img width="40" height="40" src="assets/icon/3.png">\n          <p>{{\'MAPA\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-2 (click)="goPage(\'profile\')">\n          <img width="40" height="40" src="assets/icon/4.png">\n          <p>{{\'CUENTA\'|translate}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n  <!-- <ion-content padding class="BackGR3">\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button (click)="cerrarSesion()" block class="buttonPayCash">Cerrar sesión</button>\n    </ion-col>\n  </ion-row>\n  <ion-card style="background: transparent">\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Account.png"></ion-img>\n      <ion-icon name="person" item-start></ion-icon>\n    {{\'INFORMACION_PERSONAL\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>{{\'NOMBRES\'|translate}}</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>{{\'APELLIDOS\'|translate}}</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{\'GENERO\'| translate}}</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero"\n            interface="popover">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">{{\'EDITAR_INFORMACION\'|translate}}</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/key.png"></ion-img>\n      {{\'INFORMACION_DE_CUENTA\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>{{\'EMAIL\'|translate}}</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'TELEFONO\'|translate}}</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n      <ion-row *ngIf="view_Verify_Mail">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Mail"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button (click)="validateCode(\'mail\')">{{\'CONFIRMAR_EMAIL\'|translate}}</button>\n          <button ion-button block (click)="cancelValidation()">{{\'CANCELAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="view_Verify_Phone">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Phone"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button block (click)="validateCode(\'phone\')">{{\'CONFIRMAR_CODIGO_TELEFONO\'|translate}}</button>\n          <button ion-button block (click)="cancelValidation()">{{\'CANCELAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_phone) && (view_Verify_Phone == false)"\n                (click)="reenviarConfirm(\'phone\')">{{\'REENVIAR_CONFIRMACION_MOVIL\'| translate}}\n        </button>\n\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_mail) && view_Verify_Mail == false"\n                (click)="reenviarConfirm(\'mail\')">{{\'REENVIAR_CONFIRMACION_EMAIL\'| translate}}\n        </button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Ubicacion.png"></ion-img>\n      {{\'INFORMACION_DE_UBICACION\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>{{\'PAIS\'|translate}}</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'CODIGO_DE_TELEFONO\'|translate}}</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'CODIGO_DE_PAIS\'|translate}}</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'MONEDA_DE_PAIS\'|translate}}</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/,
>>>>>>> 37eb0e44b3acf691339d2ba9b5488093c1dfc764
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CoinsPage);
    return CoinsPage;
}());

//# sourceMappingURL=coins.js.map

/***/ })

});
//# sourceMappingURL=21.js.map