webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_country__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(221);
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
 * Generated class for the SelectCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectCodePage = /** @class */ (function () {
    function SelectCodePage(navCtrl, navParams, country, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.country = country;
        this.view = view;
    }
    SelectCodePage.prototype.ionViewDidLoad = function () {
        this.searchbar.getItems();
    };
    SelectCodePage.prototype.selectItem = function (ev) {
        this.view.dismiss({
            code: ev.callingCodes[0],
            flag: ev.flag
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["a" /* AutoCompleteComponent */])
    ], SelectCodePage.prototype, "searchbar", void 0);
    SelectCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-code',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/select-code/select-code.html"*/'<ion-content padding>\n  <ng-template #withFlags let-attrs="attrs">\n    <img src="{{attrs.data.flag}}" class="flag"/>\n    <span\n        [innerHTML]="\'+\'+attrs.data.callingCodes[0]+\' \'+attrs.data.name"></span>\n  </ng-template>\n  <ion-auto-complete #search item-content [dataProvider]="country"\n                     [options]="{placeholder : \'Search your country\'}"\n                     [template]="withFlags"\n                     [showResultsFirst]="true"\n                     (itemSelected)="selectItem($event)"></ion-auto-complete>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/select-code/select-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_country_country__["a" /* CountryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SelectCodePage);
    return SelectCodePage;
}());

//# sourceMappingURL=select-code.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CountryProvider = /** @class */ (function () {
    function CountryProvider(http) {
        this.http = http;
        this.labelAttribute = "name";
        this.countries = [];
        this.init();
    }
    CountryProvider.prototype.init = function () {
        var _this = this;
        console.log("Loading countries");
        this.http.get("https://restcountries.eu/rest/v2/all/").toPromise()
            .then(function (result) {
            _this.countries = result;
        });
    };
    CountryProvider.prototype.getResults = function (keyword) {
        if (keyword == '') {
            return this.countries;
        }
        else {
            return this.countries
                .filter(function (item) { return item.name.toLowerCase().startsWith(keyword.toLowerCase()); });
        }
    };
    CountryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CountryProvider);
    return CountryProvider;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_country__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeolocationProvider = /** @class */ (function () {
    function GeolocationProvider(http, geoCtrl, geocode, countryProvider) {
        this.http = http;
        this.geoCtrl = geoCtrl;
        this.geocode = geocode;
        this.countryProvider = countryProvider;
        this.basicInformacion = {
            country_code: null,
            flag: null,
        };
        this.fullInformation = null;
        this.load = false;
        this.getInformation();
        this.getBasicInfo();
    }
    GeolocationProvider.prototype.getInformation = function () {
        var _this = this;
        return new Promise((function (resolve, reject) {
            if (!_this.load) {
                _this.geoCtrl.getCurrentPosition({
                    enableHighAccuracy: false,
                    timeout: 10000,
                })
                    .then((function (value) {
                    _this.geocode.reverseGeocode(value.coords.latitude, value.coords.longitude)
                        .then(function (data) {
                        var countries = _this.countryProvider.getResults(data[0].countryName);
                        if (countries.length) {
                            var countryS = _this.countryProvider.getResults(data[0].countryName)[0];
                            _this.fullInformation = countryS;
                            _this.basicInformacion.country_code = countryS.callingCodes[0];
                            _this.basicInformacion.flag = countryS.flag;
                            _this.load = true;
                            resolve(true);
                        }
                    }).catch(function (err) { return console.log("reversegeocode", err); });
                }))
                    .catch(function (err) { return console.log("getcurrentposition", err); });
            }
            else
                resolve(true);
        }));
    };
    GeolocationProvider.prototype.getBasicInfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getInformation().then(function () {
                resolve(_this.basicInformacion);
            });
        });
    };
    GeolocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__country_country__["a" /* CountryProvider */]])
    ], GeolocationProvider);
    return GeolocationProvider;
}());

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		214
	],
	"../pages/history/history.module": [
		314
	],
	"../pages/login/login.module": [
		316
	],
	"../pages/modal-transaction/modal-transaction.module": [
		328
	],
	"../pages/modal-welcome/modal-welcome.module": [
		331
	],
	"../pages/password-update/password-update.module": [
		332
	],
	"../pages/politicas/politicas.module": [
		340
	],
	"../pages/recovery-password/recovery-password.module": [
		333
	],
	"../pages/reg-number-phone/reg-number-phone.module": [
		334
	],
	"../pages/register/register.module": [
		335
	],
	"../pages/select-code/select-code.module": [
		336
	],
	"../pages/terminos/terminos.module": [
		337
	],
	"../pages/transaction-resume/transaction-resume.module": [
		338
	],
	"../pages/transaction/transaction.module": [
		339
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(215);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_code_select_code__ = __webpack_require__(121);
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
    //===========================================
    function AccountPage(navCtrl, navParams, api, userProvider, toastCtrl, loadingCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.usuario = null;
        this.country = null;
        this.verify = null;
        this.type = 'password';
        this.showPass = false;
        //=================================== controlar visibilidad inputs y botones
        this.isphone = true;
        this.ismail = false;
        //==================================== variables para la verificacion
        this.infoPhone = {
            flag: null,
            type: null,
            value: null,
            country_code: null
        };
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.codeVerify = null;
        this.codeVerifyMail = null;
        this.getInfo();
    }
    AccountPage.prototype.getInfo = function () {
        this.usuario = this.userProvider.user_Info;
        this.country = this.userProvider.user_Country;
        this.verify = this.userProvider.User_Verify;
    };
    AccountPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    AccountPage.prototype.actualizar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
        });
        loading.present();
        var toast = this.toastCtrl.create({
            message: 'Informaciòn personal actualizada correctamente',
            duration: 3000,
        });
        if (this.usuario.first_name != null && this.usuario.last_name != null &&
            this.usuario.first_name != "" && this.usuario.last_name != "") {
            console.log(this.usuario);
            this.api.post('account/update-info', this.usuario, this.userProvider).then(function (data) {
                _this.usuario = data;
                loading.dismiss();
                toast.present();
            }).catch();
        }
        else {
            loading.dismiss();
            var toast_1 = this.toastCtrl.create({
                message: 'Todos los campos son obligatorios',
                duration: 3000,
            });
            toast_1.present();
        }
    };
    AccountPage.prototype.changePhone = function () {
        var _this = this;
        if (this.infoPhone.country_code != null && this.infoPhone.value != null) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            var toast_2 = this.toastCtrl.create({
                message: 'Se ha enviado un código de verificación al nùmero celular.',
                duration: 3000
            });
            loading_1.present();
            this.infoPhone.type = "phone";
            this.infoPhone.value = this.infoPhone.country_code + this.infoPhone.value;
            this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(function (data) {
                console.log(data);
                loading_1.dismiss();
                toast_2.present();
                _this.response_verify = data;
            })
                .catch();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor seleccione el pais e ingrese su nuevo nùmero celular.',
                duration: 3000,
            });
            toast.present();
        }
    };
    AccountPage.prototype.changeMail = function () {
        var _this = this;
        if (this.infoPhone.value != null) {
            var loading_2 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            var toast_3 = this.toastCtrl.create({
                message: 'Se ha enviado un correo electrònico de verificaciòn a su direcciòn email.',
                duration: 3000,
            });
            loading_2.present();
            this.infoPhone.type = 'mail';
            this.api.post('account/update-contact', this.infoPhone, this.userProvider).then(function (data) {
                loading_2.dismiss();
                toast_3.present();
                console.log(data);
                _this.response_verify = data;
            }).catch(function (data) {
                loading_2.dismiss();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese una direcciòn email',
                duration: 3000
            });
            toast.present();
        }
    };
    AccountPage.prototype.pedirMail = function () {
        this.isphone = false;
        this.ismail = true;
    };
    AccountPage.prototype.pedirPhone = function () {
        this.ismail = false;
        this.isphone = true;
    };
    AccountPage.prototype.selectcountry = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__select_code_select_code__["a" /* SelectCodePage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.infoPhone.country_code = data.code;
                _this.infoPhone.flag = data.flag;
            }
        });
    };
    AccountPage.prototype.verifyCode = function () {
        var _this = this;
        if (this.response_verify.phone_code === this.codeVerify) {
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'phone',
            }).then(function (data) {
                _this.clearVar();
                _this.usuario.phone = data.phone;
                var toast = _this.toastCtrl.create({
                    duration: 3000,
                    message: 'Informaciòn actualizada correctamente',
                });
                toast.present();
            }).catch(function (data) {
                console.log(data);
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Código incorrecto.',
                duration: 3000,
            });
            toast.present();
        }
    };
    AccountPage.prototype.verifyCodeMail = function () {
        var _this = this;
        if (this.response_verify.mail_code === this.codeVerifyMail) {
            this.api.get('account/confirm-verify', this.userProvider, {
                id: this.response_verify.id,
                type: 'mail',
            }).then(function (data) {
                console.log(data);
                _this.usuario.mail = data.mail;
                _this.clearVar();
                var toast = _this.toastCtrl.create({
                    duration: 3000,
                    message: 'Informaciòn actualizada correctamente',
                });
                toast.present();
            }).catch();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Los còdigos de verificaciòn no coinciden',
                duration: 3000
            });
            toast.present();
        }
    };
    AccountPage.prototype.clearVar = function () {
        this.isphone = true;
        this.ismail = false;
        this.infoPhone = {
            flag: null,
            type: null,
            value: null,
            country_code: null
        };
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.codeVerify = null;
        this.codeVerifyMail = null;
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        CUENTA\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="person" item-start></ion-icon>\n      Información personal\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombres</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Género</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">Actualizar</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="key" item-start></ion-icon>\n      Información de cuenta\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>Email</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Teléfono</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="locate" item-start></ion-icon>\n      Información de ubicaciòn\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>País</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de teléfono</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Código de país</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Moneda del país</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="lock" item-start></ion-icon>\n      Información de seguridad\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf="isphone">\n        <ion-row>\n\n          <label stacked>Seleccione el país e ingrese su nuevo número celular</label>\n          <ion-col col-4>\n            <ion-item class="item-flag">\n              <img [src]="infoPhone.flag" class="flagphone" *ngIf="infoPhone.flag !=null">\n              <button ion-button (click)="selectcountry()">+ {{infoPhone.country_code}}</button>\n            </ion-item>\n          </ion-col>\n          <ion-col col-8>\n              <ion-input required type="text" name="numerocelular" [(ngModel)]="infoPhone.value"\n                         placeholder="Número movil (celular)"></ion-input>\n          </ion-col>\n\n          <ion-col col-12 *ngIf="response_verify.phone_code != null">\n            <label stacked>Por favor ingrese el código de verificación</label>\n            <ion-input name="verifycode" [(ngModel)]="codeVerify"></ion-input>\n            <button class="buttonPayCash" (click)="verifyCode()" ion-button block>Verificar código</button>\n          </ion-col>\n        </ion-row>\n        <button ion-button block class="buttonPayCash" (click)="changePhone()" *ngIf="response_verify.phone_code==null">Actualizar número celular</button>\n        <button ion-button block class="buttonPayCash" (click)="pedirMail()">Cambiar dirección email</button>\n      </div>\n\n\n      <div *ngIf="ismail">\n        <ion-row>\n          <label stacked> Por favor ingrese la nueva dirección email</label>\n          <ion-col col-12 row>\n            <ion-input name="correoelectronico" [(ngModel)]="infoPhone.value" placeholder="Direcciòn email correo electrònico"></ion-input>\n          </ion-col>\n          <ion-col col-12 *ngIf="response_verify.mail_code != null">\n            <label stacked>Por favor ingrese el código de verificación</label>\n            <br>\n            <ion-input name="verifycode" [(ngModel)]="codeVerifyMail"></ion-input>\n            <button class="buttonPayCash" (click)="verifyCodeMail()" ion-button block>Verificar código</button>\n          </ion-col>\n        </ion-row>\n        <button ion-button block class="buttonPayCash" (click)="changeMail()" *ngIf="response_verify.mail_code==null">Actualizar dirección email</button>\n        <button ion-button block class="buttonPayCash" (click)="pedirPhone()">Cambiar número celular</button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Api = /** @class */ (function () {
    function Api(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'http://10.160.170.115/eyepaycash/frontend/web/apiapp/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }
    Api.prototype.get = function (endpoint, user, params) {
        var _this = this;
        if (user != null) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + user.accessParam()
            });
        }
        return new Promise(function (resolve, reject) {
            var url = _this.url + endpoint;
            var urlParams = '';
            if (params) {
                urlParams = _this.jsonToURLEncoded(params);
            }
            _this.http.get(url + '?' + urlParams, { headers: _this.headers }).toPromise()
                .then(function (value) {
                _this.storage.set(endpoint, value);
                resolve(value);
            }).catch(function (err) {
                _this.storage.get(endpoint).then(function (value) {
                    resolve(value);
                }).catch(function (err) {
                    reject("Lo sentimos. No hemos podido mostrar información. Comunícate con nuestro equipo de soporte");
                });
            });
        });
    };
    Api.prototype.post = function (endpoint, body, user) {
        var url = this.url + endpoint;
        if (user != null) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + user.accessParam()
            });
        }
        return this.http.post(url, this.jsonToURLEncoded(body), {
            headers: this.headers
        }).toPromise();
    };
    Api.prototype.jsonToURLEncoded = function (jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, api, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.transactions = null;
        this.links = null;
        this.meta = null;
        this.filtro = {
            status: 0,
            page: null,
            perpage: null
        };
        this.getInfo();
    }
    HistoryPage.prototype.getInfo = function () {
        var _this = this;
        this.api.get('app/transactions?expand=country', this.userProvider, this.filtro).then(function (data) {
            _this.transactions = data.items;
            _this.links = data.links;
            _this.meta = data.meta;
            console.log(data);
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let transaction of transactions">\n      <h2>{{transaction.country.name}}</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(66);
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegNumberPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_code_select_code__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(66);
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
 * Generated class for the RegNumberPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegNumberPhonePage = /** @class */ (function () {
    function RegNumberPhonePage(navCtrl, navParams, modal, api, toastCtrl, loadingCtrl, locationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.locationProvider = locationProvider;
        // hay que pasarle los datos del provier al user en registro.
        this.user_register = {
            country_code: '',
            flag: '',
            value: '',
        };
        this.code_verify = null;
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.imagen = 'assets/backgrounds/Background2.png';
        this.locationProvider.getBasicInfo().then(function (value) {
            _this.user_register.country_code = value.country_code;
            _this.user_register.flag = value.flag;
            // this.user_register = Object.assign(value, this.user_register);
        });
    }
    RegNumberPhonePage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    RegNumberPhonePage.prototype.sendNumberPhone = function () {
        var _this = this;
        if (this.user_register.country_code != "" && this.user_register.value != "") {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
            });
            var toast_1 = this.toastCtrl.create({
                message: 'Se ha enviado un código de verificación al número celular ingresado.',
                duration: 3000
            });
            loading_1.present();
            this.api.post('auth/pre-sign-up', this.user_register).then(function (data) {
                loading_1.dismiss();
                toast_1.present();
                _this.response_verify = data.verify;
                _this.response_verify.country_id = data.country.id;
                console.log(_this.response_verify.phone_code);
            })
                .catch();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Toda la información es obligatoria',
                duration: 3000,
            });
            toast.present();
        }
    };
    RegNumberPhonePage.prototype.selectcountry = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__select_code_select_code__["a" /* SelectCodePage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.user_register.country_code = data.code;
                _this.user_register.flag = data.flag;
            }
        });
    };
    RegNumberPhonePage.prototype.verifyCode = function () {
        if (this.code_verify == this.response_verify.phone_code) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */], { 'response': this.response_verify, 'register': this.user_register });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Código incorrecto.',
                duration: 3000,
            });
            toast.present();
        }
    };
    RegNumberPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reg-number-phone',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/reg-number-phone/reg-number-phone.html"*/'<ion-content class="imgBackground vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img style="margin-bottom: 10%;" class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n    <div class="center">\n      <ion-label style="color:white" class="center"> Enviaremos un CÓDIGO de verificación a el número<br> que registres\n        a continuación.\n      </ion-label>\n    </div>\n  </div>\n\n  <div class="center divMargin">\n    <ion-grid class="center marGrid">\n      <ion-row>\n        <ion-col col-5>\n          <ion-item class="item-flag item-md2 item-ios2">\n            <img [src]="user_register.flag" class="flagphone banderaWidt">\n            <button ion-button (click)="selectcountry()" class="transparente item-md2 item-button2 button-md ">+\n              {{user_register.country_code}}</button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-7>\n          <ion-item class="stylCel">\n            <ion-input required type="text" name="numerocelular" [(ngModel)]="user_register.value" placeholder="Número movil (celular)"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class="inputClass">\n      <ion-input placeholder="Introduce el código" maxlength="6" required style="text-align: center" type="text"\n        [(ngModel)]="code_verify"></ion-input>\n    </ion-item>\n  </div>\n  <div class="center marginBts">\n    <button class="buttonPayCash borderBtns" (click)="cancel()" ion-button small>Cancelar</button>\n    <button class="buttonPayCash borderBtns" (click)="sendNumberPhone()" ion-button small *ngIf="response_verify.phone_code == null">Enviar\n    </button>\n    <button class="buttonPayCash borderBtns" (click)="verifyCode()" ion-button small *ngIf="response_verify.phone_code != null">Continuar\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/reg-number-phone/reg-number-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__["a" /* GeolocationProvider */]])
    ], RegNumberPhonePage);
    return RegNumberPhonePage;
}());

//# sourceMappingURL=reg-number-phone.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__politicas_politicas__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terminos_terminos__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_welcome_modal_welcome__ = __webpack_require__(322);
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
        this.getInfo();
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__politicas_politicas__["a" /* PoliticasPage */]);
    };
    RegisterPage.prototype.privacidad = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terminos_terminos__["a" /* TerminosPage */]);
    };
    RegisterPage.prototype.presentWelcomeModal = function () {
        var _this = this;
        var modalWelcome = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modal_welcome_modal_welcome__["a" /* ModalWelcomePage */], { name: this.userProvider.user_Info.first_name + this.userProvider.user_Info.last_name });
        modalWelcome.onWillDismiss(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        });
        modalWelcome.onDidDismiss(function (data) {
            console.log('close');
        });
        modalWelcome.present();
        this.userProvider.setUser(null);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/register/register.html"*/'<ion-content class="imgBackground vignette">\n  <div style="margin-top:12%" class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n  </div>\n  <div class="center">\n    <ion-list>\n      <ion-item class="marginlists" >\n        <ion-label stacked>Nombres</ion-label>\n        <ion-input type="text" required name="userregistronombre" [(ngModel)]="user_register.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Apellidos</ion-label>\n        <ion-input type="text" required name="userregistroapellido"\n                   [(ngModel)]="user_register.last_name"></ion-input>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Género</ion-label>\n        <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="user_register.gender" name="userregistrogenero">\n          <ion-option value="f">Femenino</ion-option>\n          <ion-option value="m">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" required name="userregistroemail"\n                   [(ngModel)]="user_register.mail"></ion-input>\n      </ion-item>\n\n      <ion-item class="marginlists">\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="{{type}}" name="userregistrocontrasena"\n                   required [(ngModel)]="user_register.password"></ion-input>\n        <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n  <div style="margin-top: -20%" padding class="center">\n    <ion-label (click)="politicas()" style="color:white; font-size: 16px" floating>Políticas de uso</ion-label>\n    <ion-label (click)="privacidad()" style="color:white; font-size: 16px" floating>Privacidad de la información\n    </ion-label>\n  </div>\n\n  <div style="margin-top: 6%" class="center">\n    <button style="border-radius: 0%" class="buttonPayCash" (click)="cancel()" ion-button small>Cancelar</button>\n    <button style="border-radius: 0%" class="buttonPayCash" (click)="register()" ion-button small>Registrarse\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the PoliticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoliticasPage = /** @class */ (function () {
    function PoliticasPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    PoliticasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoliticasPage');
    };
    PoliticasPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Si no acepta estos términos, no debe usar nuestros servicios. Puede utilizar nuestros servicios sólo si puede celebrar legalmente un acuerdo según la ley aplicable. Si utiliza nuestros servicios, acepta hacerlo de conformidad con estos términos y con las leyes y regulaciones aplicables.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.presentToast2 = function () {
        var toast = this.toastCtrl.create({
            message: 'Podemos hacer cambios a estos términos, incluso cuando haya cambios en nuestros servicios, tecnología, regulación y por otros motivos. Si lo hacemos, le enviaremos un aviso de dichos cambios. Publicaremos los términos actualizados en nuestro sitio web.Los cambios realizados por razones legales entrarán en vigencia inmediatamente. El uso continuado de los servicios después de la fecha de vigencia de dichos cambios constituirá su aceptación de los mismos. Si no acepta los términos enmendados, debe dejar de usar los servicios.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.presentToast3 = function () {
        var toast = this.toastCtrl.create({
            message: 'El costo y tiempo de realizar transacciones a través de la red fluctúa constantemente; dado que el costo de procesar las transacciones entrantes y salientes cambia contínuamente, recomendamos que siempre verifique esta información. EyePayCash no se hace responsable del tiempo y costo de las comisiones cobradas por la minería de criptomoneda inherente a cualquier tipo de transacción o tipología transaccional en la que haya cualquier cantidad de criptomonedas implicadas, esta nota también aplica para el servicio de Exchange, Bóveda, las transacciones salientes y entrantes contenidas en los términos de servicios pagados.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.Transacciones = function () {
        var toast = this.toastCtrl.create({
            message: 'EyePayCash no puede y no garantiza el valor de las criptomonedas, usted reconoce y acepta que el valor de las criptomonedas es altamente volátil y qué comprar, vender y mantener criptomonedas implica un alto riesgo. Además, la red de consenso de criptomonedas es la única responsable de verificar y confirmar las transacciones propuestas que se envíen a través de nuestros servicios, EyePayCash solo confirma la finalización de una transacción. La red de criptomonedas es operada por un sistema descentralizado de terceros independientes. Nuestros servicios lo ayudan a enviar su solicitud de transacción de criptomonedas para que sean confirmados por la red de criptomonedas, sin embargo, EyePayCash no tiene control sobre la red de criptomonedas y por lo tanto, no puede y no garantiza que se complete cualquier solicitud de transacción que se envíe a través de los servicios. Usted reconoce y acepta que las solicitudes de transacción que envíe a través de los servicios pueden completarse, o pueden retrasarse sustancialmente, por la red de criptomonedas. Cuando completa una solicitud de transacción a través de los servicios, nos autoriza a enviar su solicitud de transacción a la red de criptomonedas de acuerdo con las instrucciones que usted le brinde a nuestros servicios. EyePayCash no puede garantizar y no garantiza que cualquier transacción de criptomonedas revertida por un tercero, y/o criptomonedas enviadas directamente a cualquier dirección de envío diferente de EyePayCash sea recibida.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.Retrasos = function () {
        var toast = this.toastCtrl.create({
            message: 'Los servicios de EyePayCash implican varias medidas de seguridad para aumentar la seguridad de su almacenamiento de criptomonedas en EyePayCash. Por esta razón, cualquier transacción a una dirección de criptomonedas fuera de EyePayCash para una cantidad significativa, puede tomar más tiempo que una estándar. Usted reconoce y acepta que cualquier transacción dirigida a una dirección de criptomonedas fuera del sistema EyePayCash puede retrasarse y ser costosa.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.DirClave = function () {
        var toast = this.toastCtrl.create({
            message: 'El Cuando crea una cuenta, los servicios generan y almacenan un par de claves públicas y privadas criptográficas que se puede usar para enviar y recibir criptomonedas a través de la red criptomonedas . La clave pública generada por los servicios sirve como su dirección del Monedero Virtual, y puede compartirse en la red de cripto minería y con otros usuarios para completar las transacciones. La clave privada se adapta de manera única a la dirección de la billetera y se debe usar en conexión con la dirección de la billetera para autorizar la transferencia de criptomonedas desde o hacia esa dirección del Monedero Virtual.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.Crypto = function () {
        var toast = this.toastCtrl.create({
            message: 'EyePayCash es custodio de cualquier cantidad de criptomonedas transferidas a EyePayCash o la bóveda. EyePayCash no obtiene ningún derecho, título o interés legal sobre las criptomonedas almacenadas por usted.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    //Ventana de 15 subtitles
    PoliticasPage.prototype.smsText = function () {
        var toast = this.toastCtrl.create({
            message: 'Para usar los servicios de EyePayCash, debe proporcionar un número de teléfono móvil válido. Este número se usa como parte del proceso de autenticación. Como parte del uso de los servicios EyePayCash, acepta recibir mensajes de texto o SMS de nuestra parte. Tenga en cuenta que si bien no le cobramos por mensajes de texto o SMS, se aplicarán las tarifas de mensajería estándar de su operador de telefonía móvil. Si no proporciona un número de teléfono móvil válido, podemos restringir su uso de los servicios de EyePayCash. Si EyePayCash sospecha que su número de teléfono móvil no es válido o que está utilizando un servicio de VOIP para eludir el requisito de proporcionar un número de teléfono móvil válido, EyePayCash puede suspender o restringir el uso de los servicios de EyePayCash. VOIP es un acrónimo de Voz sobre Protocolo de Internet (Voice Over Internet Protocol), el cual por sí mismo significa voz a través de internet. Es una tecnología que proporciona la comunicación de voz y sesiones multimedia (tales como vídeo) sobre Protocolo de Internet (IP).',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.infoPrerequisito = function () {
        var toast = this.toastCtrl.create({
            message: 'EyePayCash se reserva el derecho, a su exclusivo criterio, de no abrir cuentas y suspender cuentas de forma temporal o permanente, incluso cuando sea requerido o recomendado por los requisitos gubernamentales, normativos o de aplicación de la ley, incluso cuando no proporcione información suficiente para verificar su identidad con EyePayCash. Los servicios de EyePayCash son para uso exclusivo del titular de la cuenta registrada. Usted acepta que la información que proporcione a EyePayCash durante la creación de la cuenta y cualquier proceso posterior de verificación de identidad es precisa y completa, y se actualizará según sea necesario para mantenerla. Si es menor de 18 años, no está autorizado a utilizar los servicios de EyePayCash, con o sin registro.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.actividadesProhibidas = function () {
        var toast = this.toastCtrl.create({
            message: 'Usted acepta que no utilizará los servicios de EyePayCash para realizar ningún tipo de actividad ilegal de ningún tipo ni para tomar ninguna medida que afecte negativamente el rendimiento de los servicios de EyePayCash. No puede participar en ninguna de las siguientes actividades a través de los servicios, ni puede ayudar a un tercero en dicha actividad: (1) intentar obtener acceso no autorizado a nuestros servicios o a la cuenta de otro usuario, (2) hacer cualquier intento de evadir o eludir la seguridad, (3) violar cualquier ley, estatuto, ordenanza o regulación, (4) reproducir, duplicar, copiar, vender o revender nuestros servicios para cualquier propósito excepto lo autorizado en estos términos, (5) participar en cualquier actividad que es abusiva o interfiere o interrumpe nuestros servicios. Si EyePayCash le bloquea el acceso a los servicios EyePayCash (incluso a bloquear su dirección IP), usted acepta no implementar ninguna medida para eludir dicho bloqueo (por ejemplo, enmascarando su dirección IP o usando una dirección IP proxy). El uso de nuestros servicios en conexión con cualquier transacción que involucre productos o servicios ilegales está prohibido. EyePayCash se reserva el derecho de suspender temporal o permanentemente su cuenta o restringir el uso de los servicios de EyePayCash si se produce una violación de esta sección.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.cuentasSuspendidas = function () {
        var toast = this.toastCtrl.create({
            message: 'Como se indicó en las secciones anteriores, EyePayCash se reserva el derecho, a su exclusivo criterio, de suspender las cuentas de manera temporal o permanente. El bloqueo o la suspensión de esta cuenta puede ser consecuencia, entre otros, de información inconsistente con respecto a su identidad (que es razonable a exclusivo criterio de EyePayCash), una revisión de cumplimiento pendiente, la solicitud de un tercero, la solicitud y/o el pedido de una autoridad, organismo gubernamental, regulador, entidad de justicia, policía, etc., que a criterio exclusivo de EyePayCash son razonables. Usted entiende y acepta que no puede acceder a fondos si su cuenta se suspende o se limita de otra manera, según se detallan en esta sección. En caso de que se resuelva la causa de la suspensión, EyePayCash puede requerir que proporcione una dirección de billetera virtual externa para enviarle los fondos disponibles en su cuenta, o puede transferir fondos a un tercero por orden de un regulador competente, la justicia. entidad, juez, tribunal u otro que sea razonable a la sola discreción de EyePayCash.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.cuentasEliminadas = function () {
        var toast = this.toastCtrl.create({
            message: 'El usuario es el responsable de respaldar sus fondos, es decir, pasarlos a otra cuenta, ya que una vez elimine su cuenta, el saldo que la persona deje en la billetera será eliminado. Si hace clic en acepto eliminar mi cuenta, sin rescatar el saldo, usted acepta que entiende y es consciente de que perderá el saldo hasta ahora depositado en cualquiera de nuestros servicios (wallet o bóveda); incluyendo las sumas ofertadas o compradas en el Exchange. Si usted elimina su cuenta debe tener presente que su usuario quedara eliminado por completo de la aplicación y que no podrá utilizar nuestro servicio de ninguna forma, perderá de forma permanente todo el historial de transacciones, configuraciones personales y la porción restante de su suscripción.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.descargoGarantias = function () {
        var toast = this.toastCtrl.create({
            message: 'Nuestros servicios se proporcionan “tal cual” sin ninguna garantía de ningún tipo. Su uso de nuestros servicios es bajo su propio riesgo. Nosotros y nuestros otorgantes de licencias, proveedores de servicios o subcontratistas (si corresponde) no hacemos declaraciones ni garantías sobre la idoneidad de la información, software, productos y servicios contenidos en nuestros servicios para ningún propósito o su cumplimiento con las reglas, principios o leyes contables, y expresamente renuncia a cualquier representación o garantía de que los servicios estarán libres de errores, virus u otros componentes dañinos, que las comunicaciones hacia o desde los servicios serán seguras y no interceptadas, que los servicios y otras capacidades ofrecidas por los servicios serán ininterrumpidas, o que su contenido será preciso, completo y oportuno. Salvo que se indique expresamente en estos términos, renunciamos a todas las garantías y condiciones, expresas, implícitas o reglamentadas entre otras, las garantías implícitas de título, no infracción, comerciabilidad e idoneidad para un propósito en particular. usted reconoce que no habrá entrado en este acuerdo en confianza bajo ninguna garantía o representación, excepto las establecidas específicamente en estos términos.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.sinConsejos = function () {
        var toast = this.toastCtrl.create({
            message: 'EyePayCash no está actuando y no puede actuar como asesor, incluidos los asuntos financieros, legales, de inversión, seguros y/o impuestos. Cualquier información proporcionada por EyePayCash es solo para información general. Usted es el único responsable de determinar si una transacción contemplada es apropiada para usted.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.indemnizacion = function () {
        var toast = this.toastCtrl.create({
            message: 'Usted acepta indemnizar a EyePayCash, defendernos y mantenernos a nosotros, a nuestros empleados, agentes, consultores, subsidiarios, socios, afiliados y licenciantes, libres de cualquier reclamo, costo, pérdida, daño, responsabilidad, juicio y gasto (incluidos los honorarios razonables de los abogados y otros profesionales) que surjan o estén relacionados con el uso de nuestros servicios, su violación de estos términos o su violación de cualquier derecho de cualquier otra persona o entidad.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.limiResponsabilidad = function () {
        var toast = this.toastCtrl.create({
            message: 'En ningún caso nosotros, nuestros licenciantes, proveedores de servicios o subcontratistas (si los hubiera) serán responsables de ningún daño indirecto, especial, incidental, punitivo o consecuencial (incluyendo, sin limitación, pérdida de ganancias, pérdida de uso, pérdida de datos o pérdida de buena voluntad), derivada de o en relación con estos términos de uso, o el desempeño, la operación de nuestros servicios, su acceso a, visualización, uso de los servicios, retraso o incapacidad para acceder, visualizar o utilizar los servicios, cualquier virus informático, información, software, sitios vinculados, productos o servicios obtenidos a través de los servicios, acto u omisión de cualquier empresa utilizando nuestros servicios u otros terceros, ya sea dicha responsabilidad derivada de algún reclamo basado en un incumplimiento del contrato, incumplimiento de garantía, agravio (incluyendo negligencia), responsabilidad por productos o de otra manera. Nosotros y nuestros licenciantes, proveedores de servicios o subcontratistas han sido advertidos de la posibilidad de dichos daños. La limitación de responsabilidad refleja la asignación de riesgo entre las partes. Las limitaciones especificadas en esta sección sobrevivirán y se aplicarán incluso si se encuentra que cualquier recurso limitado especificado en estos términos ha fallado en su propósito esencial. Las limitaciones de responsabilidad proporcionadas en estos términos se aplican en beneficio de nosotros, nuestros licenciantes, proveedores de servicios y subcontratistas. Algunas jurisdicciones no permiten ciertas exenciones de responsabilidad o limitaciones de garantía. solamente se aplicarán exclusiones de responsabilidad o limitaciones que son legales en la jurisdicción aplicable y nuestra responsabilidad se limitará al máximo permitido por la ley.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.separabilidad = function () {
        var toast = this.toastCtrl.create({
            message: 'Si, por algún motivo, un tribunal de jurisdicción competente considera que alguna disposición de estos términos es inválida o inaplicable, dicha disposición se aplicará en la máxima medida permitida y las demás disposiciones de estos términos seguirán en pleno vigor y efecto.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.arbAplicable = function () {
        var toast = this.toastCtrl.create({
            message: 'Por favor, lea el siguiente párrafo detenidamente porque requiere arbitrar las disputas con nosotros y limita la manera en la que puede solicitar alivio. Usted y EyePayCash acuerdan arbitrar cualquier disputa que surja de estos términos o su uso de nuestros servicios, a excepción de disputas en las que cualquiera de las partes busque una compensación equitativa y de otro tipo por el supuesto uso ilegal de derechos de autor, marcas comerciales, nombres comerciales, logotipos, secretos comerciales o patentes. el arbitraje le evita usted de juzgar en el tribunal o de tener un juicio con jurado. usted y EyePayCash acuerdan notificarse mutuamente por escrito sobre cualquier disputa dentro de los treinta (30) días posteriores a su surgimiento.El aviso a EyePayCash se enviará a legal@EyePayCash.com. Usted y EyePayCash además acuerdan: (a) intentar una resolución informal antes de cualquier demanda de arbitraje; (b) que cualquier arbitraje ocurrirá en Malta ; (c) que el arbitraje será conducido confidencialmente por un solo árbitro de acuerdo con las reglas de la Ordenanza de Arbitraje de Malta ; y (d) que los tribunales en Malta tienen jurisdicción exclusiva sobre cualquier apelación de un laudo arbitral y sobre cualquier demanda entre las partes no sujetas a arbitraje. Además de los procedimientos y recursos de la clase que se analizan a continuación, el árbitro tiene la autoridad para otorgar cualquier recurso que de otro modo estaría disponible en la corte. Cualquier disputa entre las partes se regirá por estos términos y las leyes de Malta, sin dar efecto a ningún conflicto de principios legales que puedan estipular la aplicación de la ley de otra jurisdicción.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.limitaciones = function () {
        var toast = this.toastCtrl.create({
            message: 'En la medida permitida por la ley aplicable, acepta que presentará cualquier reclamo o causa de acción que surja o esté relacionada con su acceso o uso de nuestros servicios dentro de los dos años posteriores a la fecha en que surgió o se acumuló dicho reclamo o acción, o dicho reclamo o la causa de acción será renunciar irrevocablemente.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.propiedadNReclamada = function () {
        var toast = this.toastCtrl.create({
            message: 'Conforme a la legislación aplicable, después de un período específico de inactividad por su parte con respecto a su cuenta de EyePayCash, se le puede solicitar a EyePayCash que informe y/o remita cualquier criptomonedas que tenga bajo custodia de acuerdo con las leyes de propiedad no reclamada.Nuestra incapacidad para ejercer o hacer cumplir cualquier derecho o disposición de estos términos no constituirá una renuncia a ese derecho o disposición.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.acuerdoCompleto = function () {
        var toast = this.toastCtrl.create({
            message: 'EyePayCash puede asignar estos términos a su compañía matriz, afiliada o subsidiaria, o en relación con una fusión, consolidación o venta u otra disposición de todos o sustancialmente todos sus activos. Estos términos, junto con otros acuerdos que se apliquen a usted.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.politicaPrivacidad = function () {
        var toast = this.toastCtrl.create({
            message: 'Esta Política de privacidad se aplica a la información que recopilamos de los usuarios de nuestro sitio web en https://eyepaycash.co , nuestros servicios en línea, nuestras aplicaciones móviles para Android e iOS, destinatarios de nuestros correos electrónicos o cuando usted interactúa de otra manera con nosotros. Describe los datos que recopilamos sobre usted y cómo usamos, compartimos y protegemos estos datos.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.comEmail = function () {
        var toast = this.toastCtrl.create({
            message: 'Si optó por recibir información sobre nuestros productos, actualizaciones y ofertas, utilizaremos su nombre y dirección de correo electrónico para enviarle esta información. Si ya no desea recibir estas comunicaciones, puede darse de baja siguiendo las instrucciones que figuran en los correos electrónicos que recibe o en nuestro sitio web. Tenga en cuenta que podemos enviarle mensajes transaccionales y de relación, incluso si se canceló la suscripción a nuestras comunicaciones de marketing. Por ejemplo, si nuestro servicio se suspende temporalmente por mantenimiento, podríamos enviarle un correo electrónico para que lo actualice.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.enlServicios = function () {
        var toast = this.toastCtrl.create({
            message: 'Nuestro sitio web puede incluir enlaces a otros sitios web o servicios en línea, Le recomendamos que lea detenidamente la declaración de privacidad de cualquier sitio web que visite.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage.prototype.camPolitica = function () {
        var toast = this.toastCtrl.create({
            message: 'Podemos hacer cambios a esta Política de privacidad. Si hacemos cambios, se lo notificaremos mediante la revisión de la fecha en la parte superior de la política. Si realizamos cambios sustanciales, lo haremos de acuerdo con los requisitos legales aplicables, y publicaremos un aviso en nuestro sitio web y aplicaciones móviles que lo alertarán sobre los cambios sustanciales antes de que dichos cambios entren en vigencia. Le recomendamos que revise periódicamente esta página para obtener la información más reciente sobre nuestras prácticas de privacidad. Para mantener sus datos personales exactos, actualizados y completos, contáctenos como se especifica a continuación. Tomaremos las medidas razonables para actualizar o corregir los datos personales en nuestra posesión que haya enviado previamente utilizando nuestros servicios. Siéntase libre de contactarnos si tiene alguna pregunta sobre nuestra Política de privacidad o las prácticas de información de los Servicios de EyePayCash.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-politicas',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/politicas/politicas.html"*/'<ion-content class="imgBackground">\n  <div padding>\n    <div style="background:white; border-radius:8px; padding: 2%">\n      <!-- <p class="Titles"> Términos de Uso de EyePayCash.</p>\n      <a class="textNomral">Por favor lea estos términos de uso cuidadosamente, al hacer clic en aceptar, acceder o\n        utilizar nuestros servicios, se compromete a respetar estos términos de uso y todos los términos incorporados\n        por referencia.Si está aceptando estos términos en nombre de una entidad, usted confirma que está autorizado en\n        nombre de esa entidad para aceptar y sujetarse a estos términos de uso y a todos los términos incorporados por\n        referencia.</a>\n\n      <p class="Titles"> Alcance.\n      </p>\n      <a class="textNomral">Estos términos de uso se refieren a nosotros como <b>“EyePayCash” </b>ó <b>“nosotros“</b>.\n        <b>EyePayCash</b> es\n        una compañía constituida bajo las leyes de Malta Europa. Estos términos se aplican a cualquier acceso, uso de\n        nuestro sitio web en https://eyepaycash.co, nuestros servicios en línea, nuestras aplicaciones móviles para\n        iOS\n        e Android, y/o cualquiera de nuestros servicios relacionados.\n\n        La República de Malta (en maltés: Repubblika ta’ Malta; en inglés: Republic of Malta) es un país insular\n        miembro de la Unión Europea, densamente poblado, compuesto por un archipiélago y situado en el centro del\n        Mediterráneo, al sur de Italia, al oriente de Túnez y al norte de Libia.</a>\n      <br><br>\n      <a class="textNomral">La República de Malta (en maltés: Repubblika ta’ Malta; en inglés: Republic of Malta) es un\n        país insular\n        miembro de la Unión Europea, densamente poblado, compuesto por un archipiélago y situado en el centro del\n        Mediterráneo, al sur de Italia, al oriente de Túnez y al norte de Libia.</a>\n      <br><br>\n      <a (click)="presentToast()" style="font-weight: bold">ELEGIBILIDAD Y ACUERDO.</a> <br>\n      <br>\n      <a (click)="presentToast2()" style="font-weight: bold">CAMBIOS EN ESTOS TÉRMINOS.</a>\n      <br>\n      <br>\n      <a (click)="presentToast3()" style="font-weight: bold">NOTA ACLARATORIA.</a>\n      <br>\n      <p class="Titles"> Los servicios de EyePayCash.\n      </p>\n      <a class="textNomral"> <b>EyePayCash </b>proporciona una forma de almacenar, usar y administrar\n        criptomonedas:</a>\n      <br>\n      <b>MONEDERO VIRTUAL: EyePayCash</b> es una billetera virtual basada en criptomonedas donde puede\n      enviar, recibir y\n      cambiar su dinero y criptomonedas de manera segura.\n      <br>\n      <b><i>Bóveda</i></b><a class="textNomral">: servicio de almacenamiento y de rentas fijas. Lo contenido\n        en el siguiente link\n        https://eyepaycash.com/boveda/ hace parte de estos términos y condiciones.</a>\n      <br><br>\n      <a class="textNomral"> -El Monto mínimo de de ingreso a la <b><i>Bóveda</i></b> es de 0.01 BTC.</a>\n      <br><br>\n      <a class="textNomral"> -Desde el momento en que ingrese sus criptomonedas debe escoger entre los plazos de\n        retiro que le\n        ofrecemos.</a>\n      <br><br>\n      <a class="textNomral"> -El retorno del capital y renta se realizarán una vez se haya cumplido la fecha de\n        finalización y la\n        respectiva\n        solicitud dentro del término establecido.</a>\n      <br><br>\n      <a class="textNomral"> -Una vez se cumpla la fecha de finalización, el plazo para retirar es de 3 días,\n        incluyendo la fecha de\n        finalización.</a>\n      <br><br>\n      <a class="textNomral"> – En caso de que se cumpla el plazo para retirar y no se haya realizado el retiro, la <b><i>Bóveda</i></b>\n        se renovará de\n        manera automática por el mismo plazo inicial.</a>\n      <br><br>\n      <a class="textNomral"> – El retorno de su capital y renta será realizado una vez se cumpla la fecha de\n        finalización.</a>\n      <br><br>\n      <a class="textNomral"> <b>EXCHANGE:</b> servicio de intercambio de criptomonedas y dinero fiat.</a>\n      <br><br>\n      <b>nota:</b>\n      <a class="textNomral">el usuario del sistema exchange debe ser extremadamente cuidadoso con los datos de cuentas\n        bancarias o\n        cuentas virtuales o cualquier dato solicitado para que exchange funcione y se pueda usar,</a>\n      <br><br>\n      <a class="textNomral">EyePayCash no se hace responsable si el usuario comete yerros al digitar, ingresar, colocar\n        sus datos, es decir\n        que las implicaciones de dichas imprecisiones correrán por cuenta del usuario; por lo tanto EyePayCash no se\n        hace responsable de los mismos.</a>\n      <br><br>\n      <a class="textNomral">Al ingresar a esta opción, puede realizar las siguientes operaciones:</a>\n      <br><br>\n      <b>Oferta de criptomonedas:</b>\n      <br><br>\n      <a class="textNomral">\n        Debe completar la información solicitada por los campos del sistema para vender sus criptomonedas, luego de la\n        publicación de la oferta, las criptomonedas se extraen de la cartera virtual e ingresan a un sistema aislado\n        para\n        asegurar la transacción.</a>\n      <br><br>\n      <b>Comprar criptomonedas:</b>\n      <br><br>\n      <a class="textNomral">\n        Debe ingresar a la lista de opciones de las ofertas y elegir la porción de criptomonedas que desea adquirir,\n        una vez realizada esta elección, el procedimiento requerido por el sistema debe agotarse para que tenga éxito y\n        el usuario obtenga el monto pagado en una manera legal de acuerdo con el orden jurídico del estado donde se\n        realiza la transacción.</a>\n      <br><br>\n      <a class="textNomral">\n        EyePayCash cuenta con una lista de todas las compras y ventas (TRANSACCIONES) realizada por sus usuarios; el\n        sistema EyePayCash funciona bajo la tecnología blockchain.</a>\n      <br><br>\n      <b>COMPRAR</b>\n      <br><br>\n      <a class="textNomral">\n        Para comprar y vender criptomonedas con EyePayCash, simplemente haga clic en el botón Exchange, que lo\n        redireccionará a un proceso que le mostrará distintas opciones. Para comprar criptomonedas utilizando\n        criptomonedas o dinero fiduciario. EyePayCash no se hace responsable en ningún caso por el éxito de las\n        compraventas realizadas por los usuarios en la plataforma.</a>\n      <br><br>\n      <a class="textNomral">\n        Si usted desea que la cantidad o porción de criptomonedas compradas en el sistema Exchange de EyePayCash sea\n        depositada directamente en un monedero virtual diferente a EyePayCash, tendrá un costo adicional de 1% de la\n        cantidad en mención; el proceso de transferencia se podrá demorar un día hábil, es oportuno resaltar que el\n        tiempo final depende del tiempo que tarde la validación de la transacción, hecha por la minería de\n        criptomonedas.</a>\n      <br><br>\n      <b>VENDER</b>\n      <br><br>\n      <a class="textNomral">\n        Una vez usted ofrece una cantidad de criptomonedas en Exchange de EyePayCash usted deberá esperar como mínimo\n        10\n        días hábiles para cancelar la oferta, si usted NO ESPERA DICHO TÉRMINO, se le penalizará con una disminución\n        del 0,4% de la cantidad ofertada; pasados estos 10 días hábiles no habrá penalización por retirar la oferta. La\n        solicitud de cancelación de oferta implica que su cantidad de criptomoneda sale del servicio de Exchange de\n        EyePayCash, pero sigue en el monedero.</a>\n      <br><br>\n      <a class="textNomral">\n        Las únicas criptomonedas admitidas por EyePayCash serán expresadas de forma inequívoca y pública en la página\n        web de EyePayCash. EyePayCash no será responsable de recibir o almacenar monedas digitales que no cumplan con\n        el\n        requisito anteriormente descrito; se le recuerda que si usted intenta hacer una transferencia de criptomonedas\n        que no cumplan el requisito de la referencia, usted puede perder cualquier derecho relacionado con dicha moneda\n        digital o valor sin ningún derecho a reclamar a EyePayCash.</a>\n      <br><br>\n      <a class="textNomral">\n        EyePayCash no se hará responsable por los datos equívocos que se ingresen en el módulo método de pago.</a>\n      <br><br>\n      <b>COSTOS POR EL USO DE EXCHANGE</b>\n      <br><br>\n      <a class="textNomral">\n        Toda transacción exitosa llevada a cabo por intermedio y/o usando nuestro sistema de EXCHANGE; tendrá un costo\n        del 1% del total de las cantidades objeto de cada transacción en concreto.</a>\n      <br><br>\n      <b>ESTADO DE MODERACIÓN</b>\n      <br><br>\n      <a class="textNomral">\n        Una vez se compre una fracción publicada y se allegue el respectivo comprobante de pago, el vendedor tendrá dos\n        horas para validarlo, es decir, aprobarlo o rechazarlo.</a>\n      <br><br>\n      <a class="textNomral">\n        Si el comprobante es rechazado y el comprador no ratifica y/o vuelve a subir el comprobante y el mismo nunca es\n        validado, EyePayCash cambia la compra a un estado de moderación donde ni el vendedor ni el comprador pueden\n        ejecutar alguna acción, ambos deberán esperar 3 días hábiles mientras EyePayCash hace la respectiva\n        investigación para saber qué sucedió.</a>\n      <br>\n      <p class="Titles"> Reserva de EyePayCash.</p>\n      <br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> está diseñada principalmente para cubrir la pérdida de criptomonedas\n        almacenadas por\n        nuestros usuarios en la <b><i>Bóveda</i></b>, nuestro servicio de almacenamiento incorpora múltiples capas de\n        seguridad\n        criptográfica para ayudar a proteger sus criptomonedas. Estos procesos incluyen autenticación de múltiples\n        factores y segmentación de clave privada entre otros.</a>\n      <br><br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> está diseñada para cubrir pérdidas directas y efectivas sufridas por los\n        usuarios como\n        resultado de ataques de hackers a nuestros sistemas, robo por parte de un tercero y/o empleado de <b>EyePayCash</b>\n        y/o\n        nuestra bancarrota. (<b>“Pérdidas que califican o Pérdidas Calificadas“</b>).</a>\n      <br><br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> no cubre casos de piratería de dispositivos de los usuarios y cuentas\n        personales como\n        teléfonos, computadoras, cuentas de correo electrónico, etc. Por ejemplo, una pérdida sufrida como resultado de\n        la falta de mantener la seguridad, el control o la confidencialidad adecuados de su información, incluidos los\n        números de identificación personal <b>PIN</b>, contraseñas, claves <b>API</b> u otros códigos asociados con su\n        cuenta y\n        cualquier actividad que se produzca dentro de esa cuenta, no se considerará una <b>Pérdida admisible</b>.</a>\n      <br><br>\n      <a class="textNomral">\n        Hemos diseñado la reserva de criptomonedas <b>EyePayCash</b> para ayudar a reducir el impacto de las pérdidas\n        de\n        criptomonedas que están fuera del control de nuestros usuarios, no podemos garantizar que la reserva de\n        criptomonedas de <b>EyePayCash</b> tenga un número suficiente de criptomonedas para cubrir cualquiera de las\n        pérdidas\n        sufridas por nuestros usuarios en estas circunstancias.</a>\n      <br><br>\n      <a class="textNomral">\n        En caso de una <b>Pérdida Calificada</b> Los usuarios que tengan almacenadas criptomonedas en nuestra <b><i>Bóveda</i></b>\n        tendrán\n        prioridad frente a los que solo tengan sus criptomonedas en el <b><i>Monedero Virtual</i></b>.</a>\n      <br><br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> cubrirá las <b>Pérdidas Calificadas</b> en el siguiente orden de prioridad:</a>\n      <br><br>\n      <a class="textNomral">\n        Si la Reserva de <b>EyePayCash</b> no es suficiente para cubrir el 100% de las <b>Pérdidas Calificadas</b> de\n        la <b><i>Bóveda</i></b> y\n        luego del <b><i>Monedero Virtual</i></b>, las pérdidas se cubrirán proporcionalmente, en función del valor\n        total de las\n        mismas y en proporción al valor total de criptomonedas perdidas por todos los Usuarios como resultado del\n        incidente.</a>\n      <br><br>\n      <a class="textNomral">\n        El uso de la Reserva <b>EyePayCash</b> es opcional para nuestros usuarios. Como condición para recibir\n        cualquier\n        cantidad de criptomonedas y/o fondos de la cobertura de la Reserva <b>EyePayCash</b> , usted acepta (i)\n        cooperar\n        oportunamente con <b>EyePayCash</b> a petición suya en relación con cualquier reclamación de cobertura\n        relacionada con\n        sus criptomonedas, lo que incluye el suministro oportuno de cualquier información o la documentación que\n        <b>EyePayCash</b> razonablemente solicita, y (ii) firmar cualquier documento que incluye, entre otros, la\n        liberación de\n        reclamos adicionales contra <b>EyePayCash</b> , que EyePayCash podría requerir.</a>\n      <br><br>\n      <a (click)="Transacciones()" style="font-weight: bold">TRANSACCIONES.</a>\n      <br><br>\n      <a (click)="Retrasos()" style="font-weight: bold">RETRASOS.</a>\n      <br><br>\n      <a (click)="DirClave()" style="font-weight: bold">DIRECCIÓN Y CLAVE PERDIDA.</a>\n      <br><br>\n      <a (click)="Crypto()" style="font-weight: bold">CUSTODIA DE CRIPTOMONEDAS.</a>\n      <br>\n      <p class="Titles">Derechos de propiedad intelectual.</p>\n      <br><br>\n      <a class="textNomral">\n        Conservamos todos los derechos, títulos e intereses (incluidos todos los derechos de autor, marcas registradas,\n        patentes, secretos comerciales y todos los demás derechos de propiedad intelectual) en nuestros servicios y\n        todo el contenido de nuestros servicios, incluidas nuestras marcas comerciales, marcas de servicio, diseños,\n        logotipos y URL. y los nombres comerciales que se muestran en nuestro servicio, a los que nos referimos en\n        estos términos, colectivamente, como Materiales de <b>EyePayCash</b>.</a>\n      <br><br>\n      <a class="textNomral">\n        Por la presente, le otorgamos una licencia limitada, no exclusiva y no sublicenciable para acceder y utilizar\n        los materiales de <b>EyePayCash</b> para su uso comercial personal o interno.</a>\n      <br><br>\n      <a class="textNomral">\n        Dicha licencia está sujeta a estos términos y no permite la reventa de los materiales <b>EyePayCash</b> ; la\n        distribución, ejecución pública o exhibición pública de cualquier material de <b>EyePayCash</b> ; modificar o\n        hacer\n        cualquier uso derivado de los Materiales de <b>EyePayCash</b> o cualquier parte del mismo; o cualquier uso de\n        los\n        Materiales <b>EyePayCash</b> que no sea para sus fines previstos. La licencia otorgada en virtud de esta\n        Sección\n        finalizará automáticamente si suspendemos o cancelamos su acceso a los servicios. Tendremos derechos\n        exclusivos, incluidos todos los derechos de propiedad intelectual, sobre cualquier comentario, sugerencia, idea\n        u otra información o material relacionado con <b>EyePayCash</b> , cualquier comentario que envíe no es\n        confidencial y\n        pasará a ser propiedad exclusiva de <b>EyePayCash</b> . Tendremos derecho a la utilización y difusión sin\n        restricciones\n        de dichos comentarios para cualquier fin, comercial o de otro tipo, sin reconocimiento o compensación para\n        usted. No puede usar, copiar o transmitir nada en nuestro sitio web sin nuestro permiso.</a>\n      <br>\n      <p class="Titles">Usos autorizados de nuestros servicios.</p>\n      <br><br>\n      <a class="textNomral">\n        Usted puede usar nuestros servicios únicamente en lo que le hemos autorizado. Usted es responsable de\n        garantizar que la información personal de su perfil en la cuenta sea actual y correcta, incluida su dirección\n        de correo electrónico y número de teléfono móvil. También es responsable de mantener la seguridad, el control y\n        la confidencialidad adecuados de la información de su cuenta, incluidos los números de identificación personal\n        (PIN), contraseñas, claves de API u otros códigos asociados con su cuenta y cualquier actividad que ocurra\n        dentro de esa cuenta. La pérdida o el compromiso de esta información puede ocasionar el acceso no autorizado de\n        su cuenta, lo que puede ocasionar la pérdida o robo de cualquier criptomoneda almacenada en su cuenta. Si cree\n        que su cuenta se ha visto comprometida, necesita informar un incidente de seguridad, si experimenta problemas\n        operacionales o tiene un problema de seguridad, por favor contáctenos inmediatamente describiendo el problema\n        en cuestión lo más detalladamente posible, incluyendo la fecha, el tipo de problema y parte del sitio de\n        <b>EyePayCash</b> o los servicios de <b>EyePayCash</b> donde experimentó ese problema. Usted es responsable de\n        (i) notificarnos\n        inmediatamente de cualquier uso no autorizado de su contraseña, cuenta o de cualquier otra violación de\n        seguridad, y (ii) asegurarse de salir de su cuenta al final de cada sesión al acceder a los servicios de\n        <b>EyePayCash</b>. No tenemos responsabilidad por ninguna pérdida que sufra como resultado de no cumplir con\n        esta\n        sección o su incumplimiento de los avisos o alertas que podamos enviarle.</a>\n      <br><br>\n      <a (click)="smsText()" style="font-weight: bold">USANDO SMS / TEXTO.</a>\n      <br><br>\n      <a (click)="infoPrerequisito()" style="font-weight: bold">INFORMACIÓN PRECISA Y REQUISITOS.</a>\n      <br><br>\n      <a (click)="actividadesProhibidas()" style="font-weight: bold">ACTIVIDADES PROHIBIDAS.</a>\n      <br><br>\n      <a (click)="cuentasSuspendidas()" style="font-weight: bold">CUENTAS SUSPENDIDAS.</a>\n      <br><br>\n      <a (click)="cuentasEliminadas()" style="font-weight: bold">CUENTAS ELIMINADAS.</a>\n      <br><br>\n      <a (click)="descargoGarantias()" style="font-weight: bold">DESCARGO DE GARANTÍAS.</a>\n      <br><br>\n      <a (click)="sinConsejos()" style="font-weight: bold">SIN CONSEJOS.</a>\n      <br><br>\n      <a (click)="indemnizacion()" style="font-weight: bold">INDEMNIZACIÓN.</a>\n      <br><br>\n      <a (click)="limiResponsabilidad()" style="font-weight: bold">LIMITACIÓN DE RESPONSABILIDAD.</a>\n      <br><br>\n      <a (click)="separabilidad()" style="font-weight: bold">SEPARABILIDAD.</a>\n      <br><br>\n      <a (click)="arbAplicable()" style="font-weight: bold">ARBITRAJE Y LEY APLICABLE.</a>\n      <br><br>\n      <a (click)="limitaciones()" style="font-weight: bold">LIMITACIONES.</a>\n      <br><br>\n      <a (click)="propiedadNReclamada()" style="font-weight: bold">PROPIEDAD NO RECLAMADA.</a>\n      <br><br>\n      <a (click)="acuerdoCompleto()" style="font-weight: bold">ASIGNACIÓN: ACUERDO COMPLETO.</a> -->\n      <br><br>\n      <a (click)="politicaPrivacidad()" style="font-weight: bold">POLÍTICA DE PRIVACIDAD.</a>\n      <br>\n      <p class="Titles"><i>Usos autorizados de nuestros servicios.</i></p>\n      <a class="textNomral">\n        <i><b>Datos que nos proporciona.</b> Recopilamos la información que nos proporciona, que incluye:</i></a>\n      <br><br>\n      <a class="textNomral">\n        - Su nombre, dirección de correo electrónico, número de teléfono móvil.</a>\n      <br><br>\n      <a class="textNomral">\n        - Información sobre las transacciones que completa utilizando nuestros servicios, incluida la cantidad de\n        fondos asociados con una transacción de criptomoneda, el tipo de transacción ejecutada y otra información\n        relacionada.</a>\n      <br><br>\n      <a class="textNomral">\n        - Los correos electrónicos y números de teléfono de sus contactos, si elige invitar a sus amigos a usar\n        EyePayCash como parte de nuestro programa de referencia cuando crea su cuenta.</a>\n      <br><br>\n      <a class="textNomral">\n        - Si usa nuestras aplicaciones móviles, recopilamos de su dispositivo móvil una ID única (donde su dispositivo\n        es un iPhone, también recolectamos el CFUUID recomendado por Apple (el identificador universal único de\n        información).</a>\n      <br>\n      <p class="Titles">Otros datos recopilados.</p>\n      <a class="textNomral">\n        También podemos recopilar automáticamente los siguientes datos:</a>\n      <br><br>\n      <b><i> - Analítica.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Cuando visita nuestro sitio web, utilizamos herramientas de análisis de terceros para recopilar datos sobre su\n        computadora y conexión a Internet. Esa información incluye la dirección IP de su computadora y/o proveedor de\n        servicios de Internet, cuando accede a nuestro sitio web, la dirección de Internet de los sitios web desde los\n        cuales se conecta a nuestro sitio web y desde donde llegó antes de aterrizar en nuestro sitio web, el navegador\n        que usted está utilizando, y sus movimientos y preferencias en nuestro sitio web. Toda esta información se usa\n        internamente con el propósito de comprender cómo se está utilizando nuestro sitio web y mejorar nuestro sitio\n        web. También utilizamos herramientas de análisis de terceros para recopilar datos sobre su uso de nuestras\n        aplicaciones móviles. La información recopilada identifica los tipos y el momento de las acciones que realiza\n        dentro de nuestro dispositivo móvil, incluida la instalación, el registro, la carga y ciertos tipos de\n        navegación.</a>\n      <br><br>\n      <b><i> - Etiquetas de acción.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Cuando visita nuestro sitio web, usamos etiquetas de acción (también llamadas etiquetas de píxeles, GIF claro o\n        balizas) para identificar algunas de las páginas que visita y cómo utiliza el contenido de esas páginas. Las\n        etiquetas de acción pueden recopilar y transmitir estos datos de una manera que lo identifique si se ha\n        registrado en nuestro sitio web o si ha iniciado sesión en nuestro sitio web. También usamos etiquetas de\n        acción en nuestros correos electrónicos para determinar si un correo electrónico se abrió o si se reenvió a\n        otra persona. Cuando utiliza nuestras aplicaciones móviles, utilizamos etiquetas de acción en las que accede a\n        sitios web desde enlaces en nuestras aplicaciones móviles. Estos pueden identificar las páginas que visita y\n        cómo utiliza el contenido en esas páginas.</a>\n      <b><i> - Gestión del sitio.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Agregamos datos que recopilamos sobre el uso de nuestro sitio web para administrar, proteger y mejorar nuestro\n        sitio web y nuestros sistemas, para comprender mejor las preferencias de los visitantes de nuestro sitio web y\n        optimizar el contenido que servimos, para identificar problemas del servidor, compilar estadísticas agregadas\n        sobre el uso de nuestro sitio web y para mejorar nuestro marketing e investigación.</a>\n      <b><i> - No Track.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Nuestro Servicio actualmente no responde a las señales de “No rastrear” y funciona como se describe en esta\n        Política de privacidad, ya sea que se reciba o no una señal de No rastrear. Si lo hacemos en el futuro,\n        describiremos cómo lo hacemos en esta Política de privacidad.</a>\n      <br><br>\n      <a class="textNomral">\n        Al proporcionarnos voluntariamente datos personales, usted acepta nuestro uso de acuerdo con esta Política de\n        privacidad. Si nos proporciona datos personales, reconoce y acepta que dichos datos personales pueden\n        transferirse desde su ubicación actual a las oficinas y servidores de <b>EyePayCash</b> y los terceros\n        autorizados\n        mencionados en esta política. Usamos medidas de seguridad físicas, electrónicas y de procedimientos razonables\n        para proteger la información personal que obtenemos de usted contra la pérdida, el uso indebido y el acceso,\n        divulgación, alteración y destrucción no autorizados. Tenga en cuenta que no somos responsables de la seguridad\n        de los datos que está transmitiendo a través de Internet ni de los datos que está almacenando, publicando o\n        proporcionando directamente en el sitio web de un tercero, que se rige por las políticas de esa parte. Tenga en\n        cuenta que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100%\n        seguro. Si tiene más preguntas sobre seguridad, puede <a href="http://eyepaycash.co/contactenos"> Contáctenos</a>.</a>\n      <p class="Titles">Retención de datos.</p>\n      <a class="textNomral">\n        Si desea cerrar su cuenta de EyePayCash por completo, envienos un correo a <a href="http://eyepaycash.co/contactenos">\n          Contáctenos</a>\n        desde su dirección de correo electrónico registrada. Podemos retener información sobre usted en nuestras bases\n        de datos por el tiempo que su cuenta esté activa o según sea necesario para proporcionarle servicios y de\n        acuerdo con las leyes aplicables. Nuestra retención y uso de su información será tan necesaria para cumplir con\n        nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos. El período de retención\n        puede extenderse más allá del final de su relación con nosotros, pero solo será necesario siempre que tengamos\n        suficiente información para responder a cualquier problema que pueda surgir más adelante. Por ejemplo, es\n        posible que necesitemos o se nos solicite que retengamos cierta información para evitar actividades\n        fraudulentas, protegernos de responsabilidad, permitirnos buscar remedios disponibles o limitar cualquier daño\n        que podamos sufrir.</a>\n      <br>\n      <p class="Titles">Acceso a la información.</p>\n      <a class="textNomral">\n        Responderemos a su solicitud de acceso a la información que recopilamos sobre usted dentro del plazo requerido\n        por la ley aplicable.</a>\n      <br><br>\n      <a class="textNomral">\n        <b>Compartir datos.</b>\n        <a class="textNomral">Podemos compartir su información de la siguiente manera:</a>\n        <br><br>\n        <a class="textNomral">\n          - Usted ha consentido o nos ha dado permiso para compartir:</a>\n        <br><br>\n        <a class="textNomral">\n          - Hemos agregado o eliminado la identificación de la información, por lo que no se puede usar\n          razonablemente para identificarlo.</a>\n        <br><br>\n        <a class="textNomral">\n          - Con las empresas afiliadas al Grupo EyePayCash:</a>\n        <br><br>\n        <a class="textNomral">\n          - Con los proveedores de servicios externos que utilizamos para brindar nuestro servicio, incluidos\n          ciertos servicios de publicidad, referencias, operaciones, servicios financieros y tecnología (como\n          proveedores de hosting, verificación de identidad, soporte, pago y proveedores de servicios de correo\n          electrónico):</a>\n        <br><br>\n        <a class="textNomral">\n          - Si así lo requiere la ley o el proceso legal aplicable, o si creemos que está de acuerdo con la\n          ley\n          aplicable o el proceso legal:</a>\n        <br><br>\n        <a class="textNomral">\n          - Para proteger los derechos, propiedad y seguridad de EyePayCash, nuestros usuarios y el\n          público,\n          incluyendo, por ejemplo, en conexión con procedimientos judiciales, o para detectar o prevenir\n          actividad\n          criminal, fraude, tergiversación material, o para establecer nuestros derechos o defendernos\n          contra legal\n          reclamaciones; o En relación con la venta, la fusión, la transferencia o la reorganización de la\n          totalidad o\n          partes de nuestro negocio.</a>\n      </a>\n      <br><br>\n      <!-- <a (click)="comEmail()" style="font-weight: bold">COMUNICACIONES POR EMAIL.</a>\n      <br><br>\n      <a (click)="enlServicios()" style="font-weight: bold">ENLACES Y SERVICIOS.</a>\n      <br><br>\n      <a (click)="camPolitica()" style="font-weight: bold">CAMBIOS A ESTA POLÍTICA.</a>\n      <br><br> -->\n      <div class="center">\n        <button style="border-radius: 0%" (click)= "navHome()" class="buttonPayCash btnStyle" ion-button small>Acepto</button>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/politicas/politicas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PoliticasPage);
    return PoliticasPage;
}());

//# sourceMappingURL=politicas.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosPage = /** @class */ (function () {
    function TerminosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosPage');
    };
    TerminosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terminos',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/terminos/terminos.html"*/''/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/terminos/terminos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TerminosPage);
    return TerminosPage;
}());

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_update_password_update__ = __webpack_require__(324);
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
        this.data = null;
        this.type = 'phone';
        this.isvisible = true;
        this.codigo = null;
        this.iscodigo = false;
    }
    RecoveryPasswordPage.prototype.sendMessage = function () {
        var _this = this;
        this.type = 'phone';
        var loading = this.loadingCtrl.create({
            spinner: 'dots'
        });
        loading.present();
        if (this.data != null) {
            this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(function (data) {
                loading.dismiss();
                if (!_this.iscodigo)
                    _this.iscodigo = true;
                else
                    _this.iscodigo = false;
                _this.userProvider.userRecovery.codigoVerify = data.password_code_req;
                _this.userProvider.userRecovery.user_id = data.user_id;
            }).catch(function (err) {
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'No se encontraron resultados',
                    duration: 3000,
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese su nùmero celular',
                duration: 3000
            });
            toast.present();
        }
    };
    // 3114276555
    RecoveryPasswordPage.prototype.sendMail = function () {
        var _this = this;
        this.type = 'mail';
        var loading = this.loadingCtrl.create({
            spinner: 'dots'
        });
        loading.present();
        if (this.data != null) {
            this.api.post('auth/restar-password', { 'type': this.type, 'data': this.data }).then(function (data) {
                loading.dismiss();
                console.log(data);
                if (!_this.iscodigo)
                    _this.iscodigo = true;
                else
                    _this.iscodigo = false;
                _this.userProvider.userRecovery.codigoVerify = data.password_code_req;
                _this.userProvider.userRecovery.user_id = data.user_id;
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese su direcciòn email',
                duration: 3000
            });
            toast.present();
        }
    };
    // date_request: "2018-10-02 19:44:39"
    // id: 1
    // is_password_change: 0
    // password_code_req: "269680"
    // password_reset_token: "XMmQ9K_88oRs9hjSS6Fv7ksE11MU9TVVgprwE6tA9DuDtmnSxw"
    // user_id: 4
    RecoveryPasswordPage.prototype.changeVisible = function () {
        if (this.isvisible)
            this.isvisible = false;
        else
            this.isvisible = true;
    };
    RecoveryPasswordPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RecoveryPasswordPage.prototype.confirmCode = function () {
        if (this.codigo != null) {
            if (this.userProvider.userRecovery.codigoVerify == this.codigo) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__password_update_password_update__["a" /* PasswordUpdatePage */]);
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'El còdigo ingresado no coincide!',
                    duration: 3000
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Por favor ingrese el còdigo de verificaciòn',
                duration: 3000
            });
            toast.present();
        }
    };
    RecoveryPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recovery-password',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/recovery-password/recovery-password.html"*/'<!--\n  Generated template for the RecoveryPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="fondo_gris">\n  <div *ngIf="isvisible">\n    <ion-item>\n      <ion-label stacked>Ingrese nùmero celular</ion-label>\n      <ion-input type="text" [(ngModel)]="data" name="userdata"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="iscodigo">\n      <ion-label stacked>Ingrese còdigo de verificaciòn</ion-label>\n      <ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col col-12 *ngIf="!iscodigo">\n        <button ion-button (click)="sendMessage()" block class="buttonPayCash">Enviar mensaje</button>\n      </ion-col>\n      <ion-col col-12 *ngIf="iscodigo">\n        <button ion-button (click)="confirmCode()" block class="buttonPayCash">Confirmar còdigo</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button (click)="cancelar()" class="buttonPayCash">Cancelar</button>\n      </ion-col>\n      <ion-col col-6 *ngIf="!iscodigo">\n        <button ion-button (click)="changeVisible()" class="buttonPayCash">Recuperar por email</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="!isvisible">\n    <ion-item>\n      <ion-label stacked>Ingrese su direcciòn email</ion-label>\n      <ion-input type="text" [(ngModel)]="data" name="dataname"></ion-input>\n    </ion-item>\n\n\n    <ion-item *ngIf="iscodigo">\n      <ion-label stacked>Ingrese còdigo de verificaciòn</ion-label>\n      <ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col col-12 *ngIf="!iscodigo">\n        <button ion-button (click)="sendMail()" block class="buttonPayCash">Enviar email</button>\n      </ion-col>\n      <ion-col col-12 *ngIf="iscodigo">\n        <button ion-button (click)="confirmCode()" block class="buttonPayCash">Confirmar còdigo</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n\n      <ion-col col-4>\n        <button ion-button (click)="cancelar()" class="buttonPayCash">Cancelar</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button (click)="changeVisible()" class="buttonPayCash">Recuperar por SMS</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/recovery-password/recovery-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RecoveryPasswordPage);
    return RecoveryPasswordPage;
}());

//# sourceMappingURL=recovery-password.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(66);
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
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

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, api, loadingCtrl, toastCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
    }
    HomePage.prototype.goPage = function (page) {
        if (page == 'account')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
        else if (page == 'history')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__history_history__["a" /* HistoryPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__transaction_transaction__["a" /* TransactionPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/home/home.html"*/'<ion-content class="imgBackground vignette">\n    <div class="center">\n        <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n      </div>\n\n  <div class="center">\n    <ion-img name="add" (click)="goPage(\'transaction\')" class="img-loaded2 img" src="assets/icon/TransaccionIco.png"></ion-img>\n  </div>\n\n  <div class="center">\n    <ion-img name="list-box" (click)="goPage(\'history\')" class="img-loaded2 img" src="assets/icon/HistoryIco.png"></ion-img>\n  </div>\n\n  <div class="center">\n    <ion-img name="person" (click)="goPage(\'account\')" class="img-loaded2 img" src="assets/icon/CuentaIco.png"></ion-img>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_transaction_modal_transaction__ = __webpack_require__(327);
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
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl, navParams, api, userProvider, loadingCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.countrys = [];
        this.currency = null;
        this.infoCountry = null;
        this.monedas = [];
        this.getInfo();
    }
    TransactionPage.prototype.getInfo = function () {
        var _this = this;
        this.currency = this.userProvider.user_Country.currency;
        this.countrySelected();
        this.api.get('app/get-countries').then(function (data) {
            _this.countrys = data;
        }).catch();
    };
    TransactionPage.prototype.countrySelected = function () {
        var _this = this;
        this.api.get('app/get-prices', this.userProvider, {
            currency_code: this.currency,
        }).then(function (data) {
            _this.infoCountry = data;
            console.log(_this.infoCountry);
            _this.monedas = _this.infoCountry.coins;
            console.log(_this.monedas);
        });
    };
    TransactionPage.prototype.monedaSelect = function (moneda) {
        var modalTransaction = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_transaction_modal_transaction__["a" /* ModalTransactionPage */], {
            'moneda': moneda,
            'userCountry': this.userProvider.user_Country,
        });
        modalTransaction.present();
        modalTransaction.onDidDismiss(function (data) {
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TRANSACCIONES</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label class="txtLbl" stacked>Seleccione país de interés</ion-label>\n  <ion-select [(ngModel)]="currency" (ionChange)="countrySelected()">\n    <ion-option *ngFor="let pais of countrys" value="{{pais.currency}}">{{pais.name}}</ion-option>\n  </ion-select>\n\n\n  <ion-card>\n    <ion-card-content>\n      <label stacked>Precio del dolar en el paìs</label>\n      <ion-item>\n        <h6>1 USD = {{infoCountry?.local_usd_value}} {{currency}}</h6>\n      </ion-item>\n      <label stacked>Información de las monedas</label>\n\n      <button ion-item *ngFor="let moneda of monedas" (click)="monedaSelect(moneda)">\n        <ion-row>\n          <ion-col col-10>\n            <h4>Nombre: {{moneda.full_name}}</h4>\n            <h6>1 {{moneda.full_name}} = {{moneda.usd_value}} USD</h6>\n            <h5 stacked> 1 {{moneda.full_name}} >> {{currency}} </h5>\n            <h5>{{moneda.local_usd_value}}</h5>\n          </ion-col>\n          <ion-col col-2 class="margIcon">\n            <ion-icon  name="add"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <hr>\n      </button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_resume_transaction_resume__ = __webpack_require__(696);
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
 * Generated class for the ModalTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTransactionPage = /** @class */ (function () {
    function ModalTransactionPage(navParams, viewCtrl, toastCtrl, loadingCtrl, api, userProvider, navCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.moneda = null;
        this.userCountry = null;
        this.transaction = {
            amount_local: 0,
            phone_user_des: null,
            key_user: null,
            country_id: null,
            coin_id: null,
        };
    }
    ModalTransactionPage.prototype.ionViewWillLoad = function () {
        this.userCountry = this.navParams.get('userCountry');
        this.moneda = this.navParams.get('moneda');
        this.transaction.country_id = this.userCountry.id;
        this.transaction.coin_id = this.moneda.id;
    };
    ModalTransactionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalTransactionPage.prototype.doTrasaction = function () {
        var _this = this;
        if (this.transaction.amount_local != null && this.transaction.phone_user_des != null && this.transaction.key_user != null && this.transaction.country_id != null && this.transaction.coin_id != null) {
            if (this.transaction.key_user.length === 4 && this.transaction.phone_user_des > 9) {
                var loading_1 = this.loadingCtrl.create({
                    spinner: 'dots',
                });
                loading_1.present();
                var objtoSub = this.transaction;
                objtoSub.amount_local = this.transaction.amount_local.replace(new RegExp('\\.', 'g'), '');
                objtoSub.amount_local = this.transaction.amount_local.replace(',', '.');
                this.api.post('app/transaction', objtoSub, this.userProvider).then(function (data) {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Transacciòn solicitada correctamente.',
                        duration: 3000,
                    });
                    _this.closeModal();
                    _this.navCtrl.setPages([{ page: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] }, { page: __WEBPACK_IMPORTED_MODULE_5__transaction_resume_transaction_resume__["a" /* TransactionResumePage */], params: data }]);
                    toast.present();
                }).catch(function (data) {
                    loading_1.dismiss();
                    console.log(data);
                });
            }
        }
        else {
            console.log(this.transaction);
            var toast = this.toastCtrl.create({
                message: 'Todos los datos son obligatorios',
                duration: 3000
            });
            toast.present();
        }
    };
    ModalTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-transaction/modal-transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Transacción</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      {{moneda.full_name}}\n    </ion-card-header>\n    <ion-card-content>\n      <h6>1 {{moneda.full_name}} == {{moneda.local_usd_value | number}} {{userCountry.currency}} </h6>\n      <h6>1 {{moneda.full_name}} == {{moneda.usd_value | number}} USD </h6>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Informaciòn de la transaciòn\n    </ion-card-header>\n    <ion-card-content>\n        <label stacked>Ingresar nùmero celular</label>\n        <ion-input name="transaction-celular" [(ngModel)]="transaction.phone_user_des"   [brmasker]="{type:\'num\'}"\n                   type="text"></ion-input>\n        <label stacked>Ingresar clave de seguridad (4 digitos)</label>\n        <ion-input name="transaction-clave" [brmasker]="{len:4}" [(ngModel)]="transaction.key_user" type="number"></ion-input>\n        <label stacked>Ingresar el valor de la transacciòn</label>\n        <ion-input type="text" name="transaction-valor"\n                   [brmasker]="{money:true,decimal:0,thousand:\',\',type:\'num\'}"\n                   [(ngModel)]="transaction.amount_local">\n\n        </ion-input>\n        <button ion-button (click)="doTrasaction()">Solicitar transacciòn</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/modal-transaction/modal-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__["a" /* AuthUserProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _g || Object])
    ], ModalTransactionPage);
    return ModalTransactionPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=modal-transaction.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTransactionPageModule", function() { return ModalTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_transaction__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalTransactionPageModule = /** @class */ (function () {
    function ModalTransactionPageModule() {
    }
    ModalTransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_transaction__["a" /* ModalTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_transaction__["a" /* ModalTransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], ModalTransactionPageModule);
    return ModalTransactionPageModule;
}());

//# sourceMappingURL=modal-transaction.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthUserProvider = /** @class */ (function () {
    function AuthUserProvider(api, toastCtrl) {
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.user_Info = {
            first_name: null,
            last_name: null,
            phone: null,
            access_token: null,
            is_active: null,
            gender: null,
            mail: null,
        };
        this.user_Country = {
            id: null,
            name: null,
            is_active: null,
            phone_code: null,
            country_code: null,
            currency: null
        };
        this.User_Verify = {
            id: null,
            phone_code: null,
            is_phone_verify: null,
            mail_code: null,
            is_mail_verify: null,
            phone: null,
            mail: null,
            user_id: null
        };
        this.userRecovery = {
            user_id: null,
            codigoVerify: null,
        };
        this.trylogin();
    }
    AuthUserProvider.prototype.login = function (usuario, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.post('auth/login?expand=country,userVerify', { mail: usuario, password: password })
                .then(function (data) {
                if (data.success == 'ok') {
                    _this.setUser(data.user);
                    _this.setUserCountry(data.user.country);
                    _this.setUserVerify(data.user.userVerify);
                    resolve(data);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Usuario o contraseña incorrectos',
                        duration: 3000,
                    });
                    toast.present();
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    AuthUserProvider.prototype.isLogin = function () {
        return this.user_Info !== null;
    };
    AuthUserProvider.prototype.trylogin = function () {
        this.user_Info = JSON.parse(window.localStorage.getItem('user'));
        if (this.user_Info == null)
            this.user_Info = {
                user: null,
            };
    };
    AuthUserProvider.prototype.accessParam = function () {
        if (this.user_Info != null)
            return this.user_Info.access_token;
        return null;
    };
    AuthUserProvider.prototype.setUser = function (Usuario) {
        this.user_Info = Usuario;
        window.localStorage.setItem('user', JSON.stringify(this.user_Info));
    };
    AuthUserProvider.prototype.setUserCountry = function (Country) {
        this.user_Country = Country;
    };
    AuthUserProvider.prototype.setUserVerify = function (Verify) {
        this.User_Verify = Verify;
    };
    AuthUserProvider.prototype.setUserRecovery = function (data) {
        this.userRecovery = data;
    };
    AuthUserProvider.prototype.setTokenNotification = function (tokenId) {
        this.tokenAppId = tokenId;
    };
    AuthUserProvider.prototype.registerTokenForUser = function (user_id) {
        this.api.post('auth/tokenapp', { 'token': this.tokenAppId, 'id': user_id })
            .then().catch();
    };
    AuthUserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], AuthUserProvider);
    return AuthUserProvider;
}());

//# sourceMappingURL=auth-user.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWelcomePageModule", function() { return ModalWelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_welcome__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalWelcomePageModule = /** @class */ (function () {
    function ModalWelcomePageModule() {
    }
    ModalWelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_welcome__["a" /* ModalWelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_welcome__["a" /* ModalWelcomePage */]),
            ],
        })
    ], ModalWelcomePageModule);
    return ModalWelcomePageModule;
}());

//# sourceMappingURL=modal-welcome.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdatePageModule", function() { return PasswordUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_update__ = __webpack_require__(324);
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

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordPageModule", function() { return RecoveryPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_password__ = __webpack_require__(323);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */]),
            ],
        })
    ], RecoveryPasswordPageModule);
    return RecoveryPasswordPageModule;
}());

//# sourceMappingURL=recovery-password.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegNumberPhonePageModule", function() { return RegNumberPhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegNumberPhonePageModule = /** @class */ (function () {
    function RegNumberPhonePageModule() {
    }
    RegNumberPhonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__["a" /* RegNumberPhonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reg_number_phone__["a" /* RegNumberPhonePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], RegNumberPhonePageModule);
    return RegNumberPhonePageModule;
}());

//# sourceMappingURL=reg-number-phone.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(319);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCodePageModule", function() { return SelectCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_code__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectCodePageModule = /** @class */ (function () {
    function SelectCodePageModule() {
    }
    SelectCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_code__["a" /* SelectCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_code__["a" /* SelectCodePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["b" /* AutoCompleteModule */],
            ],
        })
    ], SelectCodePageModule);
    return SelectCodePageModule;
}());

//# sourceMappingURL=select-code.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosPageModule", function() { return TerminosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminos__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TerminosPageModule = /** @class */ (function () {
    function TerminosPageModule() {
    }
    TerminosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terminos__["a" /* TerminosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terminos__["a" /* TerminosPage */]),
            ],
        })
    ], TerminosPageModule);
    return TerminosPageModule;
}());

//# sourceMappingURL=terminos.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResumePageModule", function() { return TransactionResumePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_resume__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionResumePageModule = /** @class */ (function () {
    function TransactionResumePageModule() {
    }
    TransactionResumePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_resume__["a" /* TransactionResumePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_resume__["a" /* TransactionResumePage */]),
            ],
        })
    ], TransactionResumePageModule);
    return TransactionResumePageModule;
}());

//# sourceMappingURL=transaction-resume.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */]),
            ],
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticasPageModule", function() { return PoliticasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__politicas__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PoliticasPageModule = /** @class */ (function () {
    function PoliticasPageModule() {
    }
    PoliticasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__politicas__["a" /* PoliticasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__politicas__["a" /* PoliticasPage */]),
            ],
        })
    ], PoliticasPageModule);
    return PoliticasPageModule;
}());

//# sourceMappingURL=politicas.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_country_country__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_verification_verification__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_account_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_history_history_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home_module__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modal_transaction_modal_transaction_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_modal_welcome_modal_welcome_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_password_update_password_update_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_politicas_politicas_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_recovery_password_recovery_password_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_register_register_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_terminos_terminos_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_transaction_transaction_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_transaction_resume_transaction_resume_module__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-transaction/modal-transaction.module#ModalTransactionPageModule', name: 'ModalTransactionPage', segment: 'modal-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-welcome/modal-welcome.module#ModalWelcomePageModule', name: 'ModalWelcomePage', segment: 'modal-welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-update/password-update.module#PasswordUpdatePageModule', name: 'PasswordUpdatePage', segment: 'password-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'RecoveryPasswordPage', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reg-number-phone/reg-number-phone.module#RegNumberPhonePageModule', name: 'RegNumberPhonePage', segment: 'reg-number-phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-code/select-code.module#SelectCodePageModule', name: 'SelectCodePage', segment: 'select-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos/terminos.module#TerminosPageModule', name: 'TerminosPage', segment: 'terminos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-resume/transaction-resume.module#TransactionResumePageModule', name: 'TransactionResumePage', segment: 'transaction-resume', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/politicas/politicas.module#PoliticasPageModule', name: 'PoliticasPage', segment: 'politicas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__["SelectCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__["RegNumberPhonePageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_account_account_module__["AccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_history_history_module__["HistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_transaction_modal_transaction_module__["ModalTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_modal_welcome_modal_welcome_module__["ModalWelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_password_update_password_update_module__["PasswordUpdatePageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_politicas_politicas_module__["PoliticasPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_recovery_password_recovery_password_module__["RecoveryPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_terminos_terminos_module__["TerminosPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_transaction_transaction_module__["TransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_transaction_resume_transaction_resume_module__["TransactionResumePageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__providers_country_country__["a" /* CountryProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_api__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */], },
                __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_verification_verification__["a" /* VerificationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_number_phone_reg_number_phone__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recovery_password_recovery_password__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(325);
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
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__recovery_password_recovery_password__["a" /* RecoveryPasswordPage */]);
        modal.present();
    };
    LoginPage.prototype.registro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reg_number_phone_reg_number_phone__["a" /* RegNumberPhonePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/login/login.html"*/'<ion-content class="imgBackground vignette">\n  <div class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogo.png"></ion-img>\n  </div>\n  <form #formulario (submit)="login()">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder="Email" class="inputClass marginItems" type="email" required name="correo" [(ngModel)]="mail"> </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder="Contraseña" class="inputClass marginItems" type="password" [(ngModel)]="password" name="userpass"> </ion-input>\n      </ion-item>\n      <ion-item class="center">\n        <button class="buttonPayCash borderBtns" ion-button small>INGRESAR</button>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-item>\n    <ion-col col-6>\n      <button class="textWhite" ion-button (click)="registro()" clear block class="transparente">Registrarme</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button (click)="recuperarcontrasena()" clear block class="transparente">Recuperar contraseña</button>\n    </ion-col>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/login/login.html"*/,
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

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the TransactionResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionResumePage = /** @class */ (function () {
    function TransactionResumePage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.result = null;
        this.transaction = null;
        this.coinhas = null;
        this.coin = null;
        this.country = null;
        this.getIngfo();
    }
    TransactionResumePage.prototype.getIngfo = function () {
        var parametros = this.navParams.data;
        this.result = parametros.result;
        this.transaction = parametros.transaction;
        this.coinhas = parametros.coinhas;
        this.coin = parametros.coin;
        this.country = parametros.country;
    };
    TransactionResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction-resume',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction-resume/transaction-resume.html"*/'<!--\n  Generated template for the TransactionResumePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EYEPAYCASH</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h4>Resumen de la transacciòn</h4>\n<ion-card>\n  <ion-card-content>\n    <ion-row>\n      <label stacked>Nùmero de celular de destino</label>\n      <h4>{{transaction.phone_user_des}}</h4>\n      <label stacked>Nombre de la ciudad</label>\n      <h4>{{country.name}}</h4>\n      <label stacked>Costo local de la transacciòn</label>\n      <h4>{{transaction.amount_local}}</h4>\n      <label stacked>Nombre de la criptomoneda</label>\n      <h4>{{coin.full_name}}</h4>\n      <label stacked>Clave de transacciòn</label>\n      <h4>{{transaction.key_eyecash}}</h4>\n      <label stacked>Total en dolares</label>\n      <h4>{{transaction.amount_usd}}</h4>\n      <label stacked>Total en criptomoneda</label>\n      <h4>{{transaction.amount_btc}}</h4>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/transaction-resume/transaction-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], TransactionResumePage);
    return TransactionResumePage;
}());

// "coin": {
//   "id": 1,
//     "full_name": "Bitcoin",
//     "short_name": "BTC",
//     "usd_value": "6575.4200",
//     "date_update": "2018-10-05 11:31:14",
//     "is_active": 1
// },
// "transaction": {
//   "user_id": 4,
//     "phone_user_des": "320347659",
//     "country_id": "1",
//     "amount_local": 200000,
//     "coin_id": "1",
//     "key_eyecash": "6555",
//     "date_request": "2018-10-05 21:42:42",
//     "key_request": "8448465643098825",
//     "amount_usd": "65.95",
//     "amount_btc": "0.01010582"
// },
// "coinhash": {
//   "id": 1,
//     "coin_id": 1,
//     "country_id": null,
//     "eye_hash": "1JZ7D5sDEibvz7gA1qyu3gMtjXtef1B993"
// },
// "qrlink": "http://10.160.170.115/eyepaycash/frontend/web/qr/1.png" 
//# sourceMappingURL=transaction-resume.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, locationProvider) {
        var _this = this;
        this.locationProvider = locationProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('cordova'))
                _this.getLocation();
        });
    }
    MyApp.prototype.getLocation = function () {
        this.locationProvider.basicInformacion;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__["a" /* GeolocationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the VerificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VerificationProvider = /** @class */ (function () {
    function VerificationProvider(http, toastCtrl, loadingCtrl, api) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.response_verify = {
            id: null,
            is_mail_verify: null,
            mail_code: null,
            phone_code: null,
            country_id: null,
        };
        this.infoPhone = {
            country_code: '',
            flag: '',
            value: '',
        };
    }
    VerificationProvider.prototype.sendNumberPhone = function () {
        var _this = this;
        this.api.post('auth/pre-sign-up', this.infoPhone).then(function (data) {
            _this.response_verify = data.verify;
            _this.response_verify.country_id = data.country.id;
            console.log(_this.response_verify.phone_code);
            return _this.response_verify;
        }).catch(function (data) {
            console.log(data);
        });
    };
    VerificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
    ], VerificationProvider);
    return VerificationProvider;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map