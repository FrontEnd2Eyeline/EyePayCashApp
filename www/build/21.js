webpackJsonp([21],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__ = __webpack_require__(385);
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
    function AccountPage(navCtrl, navParams, api, userProvider, toastCtrl, loadingCtrl, modal, alertCtrl, errorProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.errorProvider = errorProvider;
        this.camera = camera;
        this.usuario = null;
        this.country = null;
        this.type = 'password';
        this.showPass = false;
        this.type2 = 'password';
        this.showPass2 = false;
        //=========================  CONTROL DE VALIDACIÓN DEL USUARIO
        this.view_Verify_Phone = false;
        this.view_Verify_Mail = false;
        this.view_Btn_phone = false;
        this.view_Btn_mail = false;
        this.code_Verify_Phone = null;
        this.code_Verify_Mail = null;
        this.responseVerify = null;
        //=========================== CONTROL DE INPUTS
        this.control_label = "label";
        this.getInfo();
    }
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
            this.navCtrl.push("ProfilePage");
        else if (page == 'history')
            this.navCtrl.push("HistoryPage");
        else if (page == "maps")
            this.navCtrl.push("MapPage");
        else if (page == "contact")
            this.navCtrl.push("ContactsPage");
        else
            this.navCtrl.push("TransactionPage");
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
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/'<ion-header>\n  <div class="BackgroundPpal styleDivTitle">\n    <div style="background: transparent">\n        <img class="icoClose" icon-end src="assets/newIcons/17.png">\n    </div>\n    <ion-row>\n      <ion-col>\n        <img class="styleLogo " src="assets/newIcons/24.png" (click)="foto()">\n      </ion-col>\n    </ion-row>\n    <div class="center">\n      <h6 class="styleTextName">{{usuario.first_name}} {{usuario.last_name}}</h6>\n    </div>\n  </div>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Email</ion-label>\n        <ion-input disabled text-right placeholder="{{usuario.mail}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Teléfono</ion-label>\n        <ion-input disabled text-right placeholder="{{usuario.phone}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Sexo</ion-label>\n        <ion-input disabled *ngIf="usuario.gender==\'m\'" text-right placeholder="Masculino"></ion-input>\n        <ion-input disabled *ngIf="usuario.gender==\'f\'" text-right placeholder="Femenino"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>País</ion-label>\n        <ion-input disabled text-right placeholder="{{country.name}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Indicativo del país</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.phone_code}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Código del país</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.country_code}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Moneda del país</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.currency}}"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n  <div>\n      <h1 style="color: red; text-align: center; font-size: 14px">Eliminar cuenta</h1>\n  </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col class="center2" col-3 (click)="goPage(\'transaction\')">\n          <img width="25" height="25" src="assets/icon/1.png">\n          <p class="pStyle">{{\'TRANSACCION\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-3 (click)="goPage(\'history\')">\n          <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n          <img width="25" height="25" src="assets/icon/2.png">\n          <p class="pStyle">{{\'HISTORIAL\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-3 (click)="goPage(\'maps\')">\n          <img width="25" height="25" src="assets/icon/3.png">\n          <p class="pStyle">{{\'MAPA\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-3 (click)="goPage(\'profile\')">\n          <img width="25" height="25" src="assets/icon/4.png">\n          <p class="pStyle">{{\'CUENTA\'|translate}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n<!-- <ion-content padding class="BackGR3">\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button (click)="cerrarSesion()" block class="buttonPayCash">Cerrar sesión</button>\n    </ion-col>\n  </ion-row>\n  <ion-card style="background: transparent">\n    <ion-card-header>\n<<<<<<< HEAD\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Account.png"></ion-img>\n      <!-- <ion-icon name="person" item-start></ion-icon> -->\n    {{\'INFORMACION_PERSONAL\'|translate}}\n=======\n      <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Account.png"></ion-img>\n      Información personal\n>>>>>>> 25643b37f3576b268c07d204dc7cdbfa702d89e3\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>{{\'NOMBRES\'|translate}}</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n<<<<<<< HEAD\n          <ion-label stacked>{{\'APELLIDOS\'|translate}}</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n=======\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input type="text" required name="userregistroapellido" [(ngModel)]="usuario.last_name"></ion-input>\n>>>>>>> 25643b37f3576b268c07d204dc7cdbfa702d89e3\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{\'GENERO\'| translate}}</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero"\n            interface="popover">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">{{\'EDITAR_INFORMACION\'|translate}}</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n<<<<<<< HEAD\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/key.png"></ion-img>\n      {{\'INFORMACION_DE_CUENTA\'|translate}}\n=======\n      <ion-img style="background: transparent" width="15" height="15" src="assets/icon/key.png"></ion-img>\n      Información de cuenta\n>>>>>>> 25643b37f3576b268c07d204dc7cdbfa702d89e3\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>{{\'EMAIL\'|translate}}</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'TELEFONO\'|translate}}</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n      <ion-row *ngIf="view_Verify_Mail">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Mail"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button (click)="validateCode(\'mail\')">{{\'CONFIRMAR_EMAIL\'|translate}}</button>\n          <button ion-button block (click)="cancelValidation()">{{\'CANCELAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="view_Verify_Phone">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Phone"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button block (click)="validateCode(\'phone\')">{{\'CONFIRMAR_CODIGO_TELEFONO\'|translate}}</button>\n          <button ion-button block (click)="cancelValidation()">{{\'CANCELAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n<<<<<<< HEAD\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_phone) && (view_Verify_Phone == false)"\n                (click)="reenviarConfirm(\'phone\')">{{\'REENVIAR_CONFIRMACION_MOVIL\'| translate}}\n        </button>\n\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_mail) && view_Verify_Mail == false"\n                (click)="reenviarConfirm(\'mail\')">{{\'REENVIAR_CONFIRMACION_EMAIL\'| translate}}\n=======\n        <button ion-button block class="buttonPayCash" *ngIf=" (view_Btn_phone) && (view_Verify_Phone == false)"\n          (click)="reenviarConfirm(\'phone\')">Reenviar confirmación móvil\n        </button>\n        <button ion-button block class="buttonPayCash" *ngIf=" (view_Btn_mail) && view_Verify_Mail == false" (click)="reenviarConfirm(\'mail\')">Reenviar\n          confirmación email\n>>>>>>> 25643b37f3576b268c07d204dc7cdbfa702d89e3\n        </button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n<<<<<<< HEAD\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Ubicacion.png"></ion-img>\n      {{\'INFORMACION_DE_UBICACION\'|translate}}\n=======\n      <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Ubicacion.png"></ion-img>\n      Información de ubicación\n>>>>>>> 25643b37f3576b268c07d204dc7cdbfa702d89e3\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>{{\'PAIS\'|translate}}</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'CODIGO_DE_TELEFONO\'|translate}}</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'CODIGO_DE_PAIS\'|translate}}</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'MONEDA_DE_PAIS\'|translate}}</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->'/*ion-inline-end:"/Users/santiago/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__["a" /* CameraProvider */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=21.js.map