webpackJsonp([0],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(384);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_touch_login_touch_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
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
    function AccountPage(navCtrl, navParams, api, userProvider, toastCtrl, loadingCtrl, modal, alertCtrl, errorProvider, camera, loginProvider) {
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
        this.loginProvider = loginProvider;
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
        this.loginProvider.isTouch = false;
        this.camera.getPhoto().then(function (data) {
            _this.enviarServidor(data);
        }).catch(function () {
            _this.loginProvider.isTouch = true;
        });
    };
    AccountPage.prototype.seleccionarFoto = function () {
        var _this = this;
        this.loginProvider.isTouch = false;
        this.camera.getPhotoDirectory().then(function (data) {
            _this.enviarServidor(data);
        }).catch(function (error) {
            var mensaje = "";
            if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isArray"])(error.error)) {
                error.error.forEach(function (data) {
                    mensaje += data.mensaje + "\n";
                });
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            }
            else {
                _this.errorProvider.obj.message = error.message;
                _this.errorProvider.presentModal();
            }
            _this.loginProvider.isTouch = true;
        });
    };
    AccountPage.prototype.enviarServidor = function (data64) {
        var _this = this;
        this.api.post('account/upload-photo', { pic: data64 }, this.userProvider).then(function (data) {
            _this.loginProvider.isTouch = true;
            console.log('data imagen', data);
            _this.userProvider.user_Info.url_img = data;
            var toast = _this.toastCtrl.create({
                message: 'Foto cambiada correctamente',
                duration: 3000,
            });
            toast.present();
        }).catch(function () {
            _this.loginProvider.isTouch = true;
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/'<ion-header>\n  <div class="BackgroundPpal styleDivTitle">\n    <div style="background: transparent">\n      <img (click)="cerrarSesion()"  class="icoClose" icon-end src="assets/newIcons/17.png">\n    </div>\n    <ion-row class="mrgPhoto">\n      <ion-col>\n        <img class="styleLogo " src="{{usuario?.url_img}}" (click)="foto()">\n      </ion-col>\n    </ion-row>\n    <div class="center">\n      <h6 class="styleTextName">{{usuario.first_name}} {{usuario.last_name}}</h6>\n    </div>\n  </div>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Email</ion-label>\n        <ion-input disabled text-right placeholder="{{usuario.mail}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Teléfono</ion-label>\n        <ion-input disabled text-right placeholder="{{usuario.phone}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Sexo</ion-label>\n        <ion-input disabled *ngIf="usuario.gender==\'m\'" text-right placeholder="Masculino"></ion-input>\n        <ion-input disabled *ngIf="usuario.gender==\'f\'" text-right placeholder="Femenino"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>País</ion-label>\n        <ion-input disabled text-right placeholder="{{country.name}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Indicativo</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.phone_code}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Código del país</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.country_code}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap color="primary" fixed>Moneda</ion-label>\n        <ion-input disabled text-right placeholder=" {{country.currency}}"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n  <div>\n    <h1 style="color: red; text-align: center; font-size: 14px">Eliminar cuenta</h1>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col class="center2" col-2 (click)="goPage(\'precios\')">\n          <img width="40" height="40" src="assets/newIcons/11.png">\n          <p>Precios</p>\n        </ion-col>\n        <ion-col class="center2" col-3 (click)="goPage(\'transaction\')">\n          <img width="40" height="40" src="assets/icon/1.png">\n          <p>{{\'TRANSACCION\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2 mar1Left" col-2 (click)="goPage(\'history\')">\n          <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n          <img width="40" height="40" src="assets/icon/2.png">\n          <p>{{\'HISTORIAL\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-2 (click)="goPage(\'maps\')">\n          <img width="40" height="40" src="assets/icon/3.png">\n          <p>{{\'MAPA\'|translate}}</p>\n        </ion-col>\n        <ion-col class="center2" col-2 (click)="goPage(\'profile\')">\n          <img width="40" height="40" src="assets/icon/4.png">\n          <p>{{\'CUENTA\'|translate}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n  <!-- <ion-content padding class="BackGR3">\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button (click)="cerrarSesion()" block class="buttonPayCash">Cerrar sesión</button>\n    </ion-col>\n  </ion-row>\n  <ion-card style="background: transparent">\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Account.png"></ion-img>\n      <ion-icon name="person" item-start></ion-icon>\n    {{\'INFORMACION_PERSONAL\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>{{\'NOMBRES\'|translate}}</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>{{\'APELLIDOS\'|translate}}</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{\'GENERO\'| translate}}</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero"\n            interface="popover">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">{{\'EDITAR_INFORMACION\'|translate}}</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/key.png"></ion-img>\n      {{\'INFORMACION_DE_CUENTA\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>{{\'EMAIL\'|translate}}</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'TELEFONO\'|translate}}</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n      <ion-row *ngIf="view_Verify_Mail">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Mail"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button (click)="validateCode(\'mail\')">{{\'CONFIRMAR_EMAIL\'|translate}}</button>\n          <button ion-button block (click)="cancelValidation()">{{\'CANCELAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="view_Verify_Phone">\n        <ion-col col-12>\n          <ion-input type="text" [(ngModel)]="code_Verify_Phone"></ion-input>\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button block (click)="validateCode(\'phone\')">{{\'CONFIRMAR_CODIGO_TELEFONO\'|translate}}</button>\n          <button ion-button block (click)="cancelValidation()">{{\'CANCELAR\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_phone) && (view_Verify_Phone == false)"\n                (click)="reenviarConfirm(\'phone\')">{{\'REENVIAR_CONFIRMACION_MOVIL\'| translate}}\n        </button>\n\n        <button ion-button block class="buttonPayCash"\n                *ngIf=" (view_Btn_mail) && view_Verify_Mail == false"\n                (click)="reenviarConfirm(\'mail\')">{{\'REENVIAR_CONFIRMACION_EMAIL\'| translate}}\n        </button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <ion-img style="background: transparent" width="15" height="15" src="assets/icon/Ubicacion.png"></ion-img>\n      {{\'INFORMACION_DE_UBICACION\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>{{\'PAIS\'|translate}}</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'CODIGO_DE_TELEFONO\'|translate}}</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'CODIGO_DE_PAIS\'|translate}}</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>{{\'MONEDA_DE_PAIS\'|translate}}</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_error_modal_error__["a" /* ModalErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_touch_login_touch_login__["a" /* TouchLoginProvider */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(746);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(747);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50), __webpack_require__(389)))

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ })

});
//# sourceMappingURL=0.js.map