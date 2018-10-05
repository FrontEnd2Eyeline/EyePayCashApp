webpackJsonp([10],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_country__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(226);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["a" /* AutoCompleteComponent */])
    ], SelectCodePage.prototype, "searchbar", void 0);
    SelectCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-code',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/select-code/select-code.html"*/'<ion-content padding>\n  <ng-template #withFlags let-attrs="attrs">\n    <img src="{{attrs.data.flag}}" class="flag"/>\n    <span\n        [innerHTML]="\'+\'+attrs.data.callingCodes[0]+\' \'+attrs.data.name"></span>\n  </ng-template>\n  <ion-auto-complete #search item-content [dataProvider]="country"\n                     [options]="{placeholder : \'Search your country\'}"\n                     [template]="withFlags"\n                     [showResultsFirst]="true"\n                     (itemSelected)="selectItem($event)"></ion-auto-complete>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/select-code/select-code.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(59);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__country_country__["a" /* CountryProvider */]])
    ], GeolocationProvider);
    return GeolocationProvider;
}());

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Eyepaycash\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="person" item-start></ion-icon>\n      Informaciòn personal\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombres</ion-label>\n          <ion-input type="text" required name="userregistronombre" [(ngModel)]="usuario.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input type="text" required name="userregistroapellido"\n                     [(ngModel)]="usuario.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Género</ion-label>\n          <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="usuario.gender" name="userregistrogenero">\n            <ion-option value="f">Femenino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button block class="buttonPayCash" (click)="actualizar()">Actualizar</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="key" item-start></ion-icon>\n      Informaciòn de cuenta\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>Email</ion-label>\n        {{usuario.mail}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Telèfono</ion-label>\n        {{usuario.phone}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="locate" item-start></ion-icon>\n      Informaciòn de ubicaciòn\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-label stacked>Paìs</ion-label>\n        {{country.name}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Còdigo de telèfono</ion-label>\n        {{country.phone_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Còdigo de paìs</ion-label>\n        {{country.country_code}}\n      </ion-row>\n      <ion-row>\n        <ion-label stacked>Moneda del paìs</ion-label>\n        {{country.currency}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="lock" item-start></ion-icon>\n      Informaciòn de seguridad\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf="isphone">\n        <ion-row>\n\n          <label stacked>Seleccione el paìs e ingrese su nuevo nùmero celular</label>\n          <ion-col col-4>\n            <ion-item class="item-flag">\n              <img [src]="infoPhone.flag" class="flagphone">\n              <button ion-button (click)="selectcountry()">+ {{infoPhone.country_code}}</button>\n            </ion-item>\n          </ion-col>\n          <ion-col col-8>\n              <ion-input required type="text" name="numerocelular" [(ngModel)]="infoPhone.value"\n                         placeholder="Número movil (celular)"></ion-input>\n          </ion-col>\n\n          <ion-col col-12 *ngIf="response_verify.phone_code != null">\n            <label stacked>Por favor ingrese el còdigo de verificaciòn</label>\n            <ion-input name="verifycode" [(ngModel)]="codeVerify"></ion-input>\n            <button class="buttonPayCash" (click)="verifyCode()" ion-button block>Verificar còdigo</button>\n          </ion-col>\n        </ion-row>\n        <button ion-button block class="buttonPayCash" (click)="changePhone()" *ngIf="response_verify.phone_code==null">Actualizar nùmero celular</button>\n        <button ion-button block class="buttonPayCash" (click)="pedirMail()">Cambiar direcciòn email</button>\n      </div>\n\n\n      <div *ngIf="ismail">\n        <ion-row>\n          <label stacked> Por favor ingrese la nueva direcciòn email</label>\n          <ion-col col-12 row>\n            <ion-input name="correoelectronico" [(ngModel)]="infoPhone.value" placeholder="Direcciòn email correo electrònico"></ion-input>\n          </ion-col>\n          <ion-col col-12 *ngIf="response_verify.mail_code != null">\n            <label stacked>Por favor ingrese el còdigo de verificaciòn</label>\n            <br>\n            <ion-input name="verifycode" [(ngModel)]="codeVerifyMail"></ion-input>\n            <button class="buttonPayCash" (click)="verifyCodeMail()" ion-button block>Verificar còdigo</button>\n          </ion-col>\n        </ion-row>\n        <button ion-button block class="buttonPayCash" (click)="changeMail()" *ngIf="response_verify.mail_code==null">Actualizar direcciòn email</button>\n        <button ion-button block class="buttonPayCash" (click)="pedirPhone()">Cambiar nùmero celular</button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/account/account.html"*/,
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__politicas_politicas__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terminos_terminos__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_welcome_modal_welcome__ = __webpack_require__(162);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/register/register.html"*/'<ion-content [ngStyle]="{\'background-image\':\'url(\'+imagen+\')\'}">\n  <div style="margin-top:12%" class="center">\n    <ion-img class="logo" src="assets/imgs/EPCLogoPpal.png"></ion-img>\n  </div>\n  <div style="margin-top:10%" class="center">\n    <ion-list>\n      <ion-item class="≈" style="border-radius:10px">\n        <ion-label stacked>Nombres</ion-label>\n        <ion-input type="text" required name="userregistronombre" [(ngModel)]="user_register.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label stacked>Apellidos</ion-label>\n        <ion-input type="text" required name="userregistroapellido"\n                   [(ngModel)]="user_register.last_name"></ion-input>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label stacked>Género</ion-label>\n        <ion-select okText="Guardar" cancelText="Cancelar" [(ngModel)]="user_register.gender" name="userregistrogenero">\n          <ion-option value="f">Femenino</ion-option>\n          <ion-option value="m">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" required name="userregistroemail"\n                   [(ngModel)]="user_register.mail"></ion-input>\n      </ion-item>\n\n      <ion-item style="border-radius:10px">\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="{{type}}" name="userregistrocontrasena"\n                   required [(ngModel)]="user_register.password"></ion-input>\n        <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-off-outline"></ion-icon>\n        </button>\n        <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="ios-eye-outline"></ion-icon>\n        </button>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n  <div style="margin-top: -20%" padding class="center">\n    <ion-label (click)="politicas()" style="color:white; font-size: 16px" floating>Políticas de uso</ion-label>\n    <ion-label (click)="privacidad()" style="color:white; font-size: 16px" floating>Privacidad de la información\n    </ion-label>\n  </div>\n\n  <div style="margin-top: 6%" class="center">\n    <button style="border-radius: 0%" class="buttonPayCash" (click)="cancel()" ion-button small>Cancelar</button>\n    <button style="border-radius: 0%" class="buttonPayCash" (click)="register()" ion-button small>Registrarse\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/register/register.html"*/,
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-welcome',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/modal-welcome/modal-welcome.html"*/'<!--\n  Generated template for the ModalWelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="tamano">\n  <ion-row>\n    <ion-col col-10>\n      <h4>Bienvenido {{name}}</h4>\n    </ion-col>\n    <ion-col col-2>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="closeModal()">\n          <ion-icon item-right name="ios-close-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n\n  <img src="assets/imgs/ok.png">\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/modal-welcome/modal-welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalWelcomePage);
    return ModalWelcomePage;
}());

//# sourceMappingURL=modal-welcome.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_update_password_update__ = __webpack_require__(164);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recovery-password',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/recovery-password/recovery-password.html"*/'<!--\n  Generated template for the RecoveryPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="fondo_gris">\n  <div *ngIf="isvisible">\n    <ion-item>\n      <ion-label stacked>Ingrese nùmero celular</ion-label>\n      <ion-input type="text" [(ngModel)]="data" name="userdata"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="iscodigo">\n      <ion-label stacked>Ingrese còdigo de verificaciòn</ion-label>\n      <ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col col-12 *ngIf="!iscodigo">\n        <button ion-button (click)="sendMessage()" block class="buttonPayCash">Enviar mensaje</button>\n      </ion-col>\n      <ion-col col-12 *ngIf="iscodigo">\n        <button ion-button (click)="confirmCode()" block class="buttonPayCash">Confirmar còdigo</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button (click)="cancelar()" class="buttonPayCash">Cancelar</button>\n      </ion-col>\n      <ion-col col-6 *ngIf="!iscodigo">\n        <button ion-button (click)="changeVisible()" class="buttonPayCash">Recuperar por email</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="!isvisible">\n    <ion-item>\n      <ion-label stacked>Ingrese su direcciòn email</ion-label>\n      <ion-input type="text" [(ngModel)]="data" name="dataname"></ion-input>\n    </ion-item>\n\n\n    <ion-item *ngIf="iscodigo">\n      <ion-label stacked>Ingrese còdigo de verificaciòn</ion-label>\n      <ion-input type="text" [(ngModel)]="codigo" name="usercodigo"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col col-12 *ngIf="!iscodigo">\n        <button ion-button (click)="sendMail()" block class="buttonPayCash">Enviar email</button>\n      </ion-col>\n      <ion-col col-12 *ngIf="iscodigo">\n        <button ion-button (click)="confirmCode()" block class="buttonPayCash">Confirmar còdigo</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n\n      <ion-col col-4>\n        <button ion-button (click)="cancelar()" class="buttonPayCash">Cancelar</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button (click)="changeVisible()" class="buttonPayCash">Recuperar por SMS</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/recovery-password/recovery-password.html"*/,
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(47);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-update',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/password-update/password-update.html"*/'<!--\n  Generated template for the PasswordUpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="fondo_gris">\n  <form #formulario (submit)="recovery()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Ingrese la nueva contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="infoRecovery.new_password" name="recovery_pass"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Confirme la nueva contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="infoRecovery.new_password_conf" name="recovery_pass2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button class="buttonPayCash" block>Guardar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/password-update/password-update.html"*/,
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function TransactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionPage');
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/transaction/transaction.html"*/'<!--\n  Generated template for the TransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>transaction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		697,
		9
	],
	"../pages/history/history.module": [
		698,
		8
	],
	"../pages/login/login.module": [
		699,
		7
	],
	"../pages/modal-welcome/modal-welcome.module": [
		700,
		6
	],
	"../pages/password-update/password-update.module": [
		701,
		5
	],
	"../pages/politicas/politicas.module": [
		702,
		4
	],
	"../pages/recovery-password/recovery-password.module": [
		703,
		3
	],
	"../pages/reg-number-phone/reg-number-phone.module": [
		322
	],
	"../pages/register/register.module": [
		704,
		2
	],
	"../pages/select-code/select-code.module": [
		323
	],
	"../pages/terminos/terminos.module": [
		705,
		1
	],
	"../pages/transaction/transaction.module": [
		706,
		0
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
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegNumberPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_code_select_code__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(47);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reg-number-phone',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/'<ion-content [ngStyle]="{\'background-image\':\'url(\'+imagen+\')\'}">\n  <div style="margin-top:12%" class="center">\n    <ion-img style="margin-bottom: 10%;" class="logo" src="assets/imgs/EPCLogoPpal.png"></ion-img>\n    <div class="center" style="margin-top: -30%">\n      <ion-label style="color:white" class="center"> Enviaremos un CÓDIGO de verificación a el número<br> que registres\n        a continuación.\n      </ion-label>\n    </div>\n  </div>\n\n  <div style="margin-top:10%" class="center">\n    <ion-grid class="center">\n      <ion-row>\n        <ion-col col-5>\n          <ion-item class="item-flag">\n            <img [src]="user_register.flag" class="flagphone">\n            <button ion-button (click)="selectcountry()" class="transparente">+ {{user_register.country_code}}</button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-7>\n          <ion-item style="border-radius:10px; width: 122%; margin-left: -20%">\n            <ion-input required type="text" name="numerocelular" [(ngModel)]="user_register.value"\n                       placeholder="Número movil (celular)"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item style="border-radius:10px; color: white; background: transparent; text-align: center;">\n      <ion-input placeholder="Introduce el código" maxlength="6" required\n                 style="text-align: center" type="text" [(ngModel)]="code_verify"></ion-input>\n    </ion-item>\n  </div>\n  <div class="center">\n    <button style="border-radius: 0" class="buttonPayCash" (click)="cancel()" ion-button small>Cancelar</button>\n    <button style="border-radius: 0" class="buttonPayCash" (click)="sendNumberPhone()" ion-button small\n            *ngIf="response_verify.phone_code == null">Enviar\n    </button>\n    <button style="border-radius: 0" class="buttonPayCash" (click)="verifyCode()" ion-button small\n            *ngIf="response_verify.phone_code != null">Continuar\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/,
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(223);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user_auth_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__ = __webpack_require__(165);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Eyepaycash\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-4 (click)="goPage(\'transaction\')">\n        <ion-icon name="add"></ion-icon>\n        Transacciòn</ion-col>\n      <ion-col col-4 (click)="goPage(\'history\')"> <ion-icon name="list-box"></ion-icon> Historial </ion-col>\n      <ion-col col-4 (click)="goPage(\'account\')"> <ion-icon name="person"></ion-icon> Mi cuenta </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/home/home.html"*/
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegNumberPhonePageModule", function() { return RegNumberPhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__ = __webpack_require__(319);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCodePageModule", function() { return SelectCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_code__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(226);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function PoliticasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PoliticasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoliticasPage');
    };
    PoliticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-politicas',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/politicas/politicas.html"*/'<!--\n  Generated template for the PoliticasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>politicas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/politicas/politicas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PoliticasPage);
    return PoliticasPage;
}());

//# sourceMappingURL=politicas.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminos',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/terminos/terminos.html"*/'<!--\n  Generated template for the TerminosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>terminos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/terminos/terminos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TerminosPage);
    return TerminosPage;
}());

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_country_country__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recovery_password_recovery_password__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_password_update_password_update__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_account_account__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_history_history__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transaction_transaction__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modal_welcome_modal_welcome__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_verification_verification__ = __webpack_require__(696);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_recovery_password_recovery_password__["a" /* RecoveryPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_password_update_password_update__["a" /* PasswordUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modal_welcome_modal_welcome__["a" /* ModalWelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-welcome/modal-welcome.module#ModalWelcomePageModule', name: 'ModalWelcomePage', segment: 'modal-welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-update/password-update.module#PasswordUpdatePageModule', name: 'PasswordUpdatePage', segment: 'password-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/politicas/politicas.module#PoliticasPageModule', name: 'PoliticasPage', segment: 'politicas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'RecoveryPasswordPage', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reg-number-phone/reg-number-phone.module#RegNumberPhonePageModule', name: 'RegNumberPhonePage', segment: 'reg-number-phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-code/select-code.module#SelectCodePageModule', name: 'SelectCodePage', segment: 'select-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos/terminos.module#TerminosPageModule', name: 'TerminosPage', segment: 'terminos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__["SelectCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__["RegNumberPhonePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_recovery_password_recovery_password__["a" /* RecoveryPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_password_update_password_update__["a" /* PasswordUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modal_welcome_modal_welcome__["a" /* ModalWelcomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__providers_country_country__["a" /* CountryProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_api__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */], },
                __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_verification_verification__["a" /* VerificationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], AuthUserProvider);
    return AuthUserProvider;
}());

//# sourceMappingURL=auth-user.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_number_phone_reg_number_phone__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recovery_password_recovery_password__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(321);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, userProvider, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.mail = null;
        this.password = null;
        this.imagen = 'assets/backgrounds/Background1.png';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content [ngStyle]="{\'background-image\':\'url(\'+imagen+\')\'}">\n\n  <div class="center">\n    <ion-img class="logo" src="assets/icon/EYEPAYCASHAPP.png" text-center></ion-img>\n  </div>\n  <form #formulario (submit)="login()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Ingrese direcciòn email</ion-label>\n        <ion-input type="email" required name="correo" [(ngModel)]="mail"> </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Ingrese contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="userpass"> </ion-input>\n      </ion-item>\n      <ion-item>\n        <button class="buttonPayCash" ion-button small style="border-radius: 0%; margin-left: 0%;">INGRESAR</button>\n      </ion-item>\n    </ion-list>\n  </form>\n   <ion-item>\n     <ion-col col-6>\n       <button ion-button (click)="registro()" clear block class="transparente">Registrarme</button>\n     </ion-col>\n     <ion-col col-6>\n       <button ion-button (click)="recuperarcontrasena()" clear block class="transparente">Recuperar contraseña</button>\n     </ion-col>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/pages/login/login.html"*/,
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

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(47);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__["a" /* GeolocationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(32);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
    ], VerificationProvider);
    return VerificationProvider;
}());

//# sourceMappingURL=verification.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map