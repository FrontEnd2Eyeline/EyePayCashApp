webpackJsonp([22],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_country__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(140);
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
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
        if (!this.countries.length)
            this.http.get("assets/countries.json").toPromise()
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchLoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_user_auth_user__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TouchLoginProvider = /** @class */ (function () {
    function TouchLoginProvider(http, faio, modalCtrl, platform, splashScreen, app, isLogin) {
        this.http = http;
        this.faio = faio;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.app = app;
        this.isLogin = isLogin;
        this.isTouch = true;
        this.initialized = false;
        this.isLocked = false;
        this.navCtrl = app.getActiveNav();
        console.log('Hello TouchLoginProvider Provider');
    }
    TouchLoginProvider.prototype.init = function () {
        var _this = this;
        if (this.initialized) {
            return;
        }
        this.platform.ready().then(function () {
            _this.onPauseSubscription = _this.platform.pause.subscribe(function () {
                _this.splashScreen.show();
            });
            _this.onResumeSubscription = _this.platform.resume.subscribe(function () {
                if (!_this.isLocked) {
                    _this.isLocked = true;
                    if (_this.login = _this.isLogin.isLogin) {
                        if (_this.isTouch) {
                            _this.showFingerPrint();
                            _this.login();
                            console.log('bloqueado', _this.isLocked);
                        }
                    }
                    else {
                        var nav = _this.app.getActiveNav();
                        nav.setRoot('LoginPage');
                        nav.popToRoot;
                    }
                }
                console.log('no bloqueado', _this.isLocked);
                _this.splashScreen.hide();
                _this.isLocked = false;
            });
        });
    };
    // isActive() {
    // 	const path: string[] = this.platform.url().split('/');
    // 	return (String)(path[path.length - 1]);
    // }
    TouchLoginProvider.prototype.showFingerPrint = function () {
        var _this = this;
        this.faio.isAvailable()
            .then(function (result) {
            _this.faio.show({
                clientId: 'Identificar de huella',
                clientSecret: 'password',
                disableBackup: false,
                localizedFallbackTitle: 'Use Pin',
                localizedReason: 'Please authenticate',
            })
                .then(function (result) {
                _this.login();
                _this.isLocked = false;
            }).catch(function (error) {
                _this.exitApp();
            });
        }).catch(function (error) { return console.log(error); });
    };
    TouchLoginProvider.prototype.login = function () {
        var nav = this.app.getActiveNav();
        nav.setRoot('HomePage');
        nav.popToRoot;
    };
    TouchLoginProvider.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    TouchLoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], TouchLoginProvider);
    return TouchLoginProvider;
}());

//# sourceMappingURL=touch-login.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(http, network, eventCtrl, alertCtrl, toastCtrl) {
        this.http = http;
        this.network = network;
        this.eventCtrl = eventCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.buttonDisabled = false;
        this.networkState();
        // stop connect watch
        this.connected.unsubscribe();
        this.disconnected.unsubscribe();
    }
    NetworkProvider.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        if (this.network.type != 'none') {
            this.buttonDisabled = false;
            this.toastCtrl.create({
                message: "You are now " + connectionState + " via " + networkType,
                duration: 3000
            }).present();
        }
        else {
            this.buttonDisabled = true;
            this.toastCtrl.create({
                message: 'no connection, please, turn on your connection internet',
                showCloseButton: true,
            }).present();
        }
    };
    NetworkProvider.prototype.networkState = function () {
        var _this = this;
        this.connected = this.network.onConnect().subscribe(function (data) {
            console.log('conectado', data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.disconnected = this.network.onDisconnect().subscribe(function (data) {
            console.log('no conectado', data);
            _this.displayNetworkUpdate(data.type);
            setTimeout(function () {
                console.log('conexion');
            }, 3000);
        }, function (error) { return console.error(error); });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LenguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(94);
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
  Generated class for the LenguageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LenguageProvider = /** @class */ (function () {
    function LenguageProvider(http, translate) {
        this.http = http;
        this.translate = translate;
    }
    LenguageProvider.prototype.seleccionar = function (lenguaje) {
        window.localStorage.removeItem('language');
        window.localStorage.setItem('language', lenguaje);
    };
    LenguageProvider.prototype.setLenguage = function () {
        var lang = window.localStorage.getItem('language');
        console.log(lang);
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
    };
    LenguageProvider.prototype.verifyIsLanguage = function () {
        if (window.localStorage.getItem('language') != null)
            return true;
        return false;
    };
    LenguageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], LenguageProvider);
    return LenguageProvider;
}());

//# sourceMappingURL=lenguage.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadInformationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(49);
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
  Generated class for the LoadInformationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadInformationProvider = /** @class */ (function () {
    function LoadInformationProvider(http, auth, api) {
        this.http = http;
        this.auth = auth;
        this.api = api;
        this.infoCurrencies = [];
        this.date = new Date().getTime();
    }
    LoadInformationProvider.prototype.init = function () {
        this.getCountries();
    };
    LoadInformationProvider.prototype.getCountries = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.countrys == undefined) {
                _this.api.get('app/get-countries', _this.auth).then(function (data) {
                    _this.countrys = data;
                    resolve(_this.countrys);
                }).catch();
            }
            else
                resolve(_this.countrys);
        });
    };
    LoadInformationProvider.prototype.getCurrencies = function (currency) {
        var _this = this;
        return new Promise(function (resolve) {
            var dif = new Date().getTime() - _this.date;
            if (dif > 300000 || _this.infoCurrencies[currency] == undefined) {
                _this.date = new Date().getTime();
                _this.api.get('app/get-prices', _this.auth, {
                    currency_code: currency,
                }).then(function (data) {
                    _this.infoCurrencies[currency] = data;
                    resolve(data);
                });
            }
            else
                resolve(_this.infoCurrencies[currency]);
        });
    };
    LoadInformationProvider.prototype.getCountriesID = function (currency) {
        var value = {
            id: null,
            phone_code: null,
            currency_code: null
        };
        this.countrys.forEach(function (data) {
            if (data.currency == currency) {
                value.id = data.id;
                value.phone_code = data.phone_code;
                value.currency_code = data.currency;
            }
        });
        return value;
    };
    LoadInformationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
    ], LoadInformationProvider);
    return LoadInformationProvider;
}());

//# sourceMappingURL=load-information.js.map

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		720,
		0
	],
	"../pages/coins/coins.module": [
		721,
		21
	],
	"../pages/contacts/contacts.module": [
		722,
		20
	],
	"../pages/history-resume/history-resume.module": [
		723,
		19
	],
	"../pages/history/history.module": [
		724,
		18
	],
	"../pages/home/home.module": [
		725,
		17
	],
	"../pages/language/language.module": [
		726,
		16
	],
	"../pages/login/login.module": [
		727,
		5
	],
	"../pages/map/map.module": [
		728,
		6
	],
	"../pages/modal-error/modal-error.module": [
		729,
		15
	],
	"../pages/modal-transaction/modal-transaction.module": [
		730,
		14
	],
	"../pages/modal-welcome/modal-welcome.module": [
		731,
		13
	],
	"../pages/password-update/password-update.module": [
		732,
		4
	],
	"../pages/politicas/politicas.module": [
		741,
		12
	],
	"../pages/profile/profile.module": [
		733,
		11
	],
	"../pages/recovery-password/recovery-password.module": [
		734,
		3
	],
	"../pages/reg-number-phone/reg-number-phone.module": [
		256
	],
	"../pages/register/register.module": [
		735,
		2
	],
	"../pages/security/security.module": [
		736,
		1
	],
	"../pages/select-code/select-code.module": [
		257
	],
	"../pages/touch-login/touch-login.module": [
		737,
		10
	],
	"../pages/transaction-resume/transaction-resume.module": [
		740,
		9
	],
	"../pages/transaction/transaction.module": [
		739,
		8
	],
	"../pages/update-acount/update-acount.module": [
		738,
		7
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
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegNumberPhonePageModule", function() { return RegNumberPhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reg_number_phone__["a" /* RegNumberPhonePage */]),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__["a" /* BrMaskerModule */],
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

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCodePageModule", function() { return SelectCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_code__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(258);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_code__["a" /* SelectCodePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["b" /* AutoCompleteModule */],
            ],
        })
    ], SelectCodePageModule);
    return SelectCodePageModule;
}());

//# sourceMappingURL=select-code.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
  Generated class for the ValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ValidationProvider = /** @class */ (function () {
    function ValidationProvider() {
    }
    ValidationProvider.getValidatorErrorMessage = function (validatorName, validatorValue, name) {
        var config = {
            'required': name + " is Required",
            'minlength': "The " + name + " minimum length " + validatorValue.requiredLength,
            // 'pattern': `The ${name}`,
            'pattern': "The " + name + " character and number",
            'email': "The " + name + " no es v\u00E1lido",
        };
        return config[validatorName];
    };
    ValidationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidationProvider);
    return ValidationProvider;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapProvider = /** @class */ (function () {
    function MapProvider(http) {
        this.http = http;
        this.markers = [];
        this.camera = {
            target: {
                lat: 1.178720,
                lng: -77.313249
            },
            zoom: 5,
            tilt: 0,
            bearing: 0
        };
        this.markersId = [];
        this.userPosition = null;
    }
    MapProvider.prototype.setCamera = function (camera) {
        this.camera = camera;
    };
    MapProvider.prototype.setMarkers = function (newMarkers) {
        var _this = this;
        newMarkers.forEach(function (value) {
            if (_this.markersId.indexOf(value.id) == -1) {
                _this.markers.push(value);
                _this.markersId.push(value.id);
            }
        });
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(231);
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
  Generated class for the LocalCameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera) {
        this.camera = camera;
        this.options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: false,
            targetWidth: 500,
            targetHeight: 500,
        };
        console.log('Hello LocalCameraProvider Provider');
    }
    CameraProvider.prototype.getPhoto = function (options) {
        var _this = this;
        this.options.sourceType = this.camera.PictureSourceType.CAMERA;
        if (options) {
            this.options = Object.assign(this.options, options);
        }
        return new Promise(function (resolve, reject) {
            _this.camera.getPicture(_this.options)
                .then(function (value) {
                if (_this.options.destinationType == _this.camera.DestinationType.DATA_URL)
                    resolve('data:image/jpeg;base64,' + value);
                else
                    resolve(value);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    CameraProvider.prototype.getPhotoDirectory = function (options) {
        var _this = this;
        this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        if (options) {
            this.options = Object.assign(this.options, options);
        }
        return new Promise(function (resolve, reject) {
            _this.camera.getPicture(_this.options)
                .then(function (value) {
                if (_this.options.destinationType == _this.camera.DestinationType.DATA_URL)
                    resolve('data:image/jpeg;base64,' + value);
                else
                    resolve(value);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSharingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(253);
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
  Generated class for the SocialSharingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SocialSharingProvider = /** @class */ (function () {
    function SocialSharingProvider(http, socialSharing) {
        this.http = http;
        this.socialSharing = socialSharing;
        this.phoneNumber = null;
        console.log('Hello SocialSharingProvider Provider');
    }
    SocialSharingProvider.prototype.socialShare = function () {
        var msg = "Hola";
        this.socialSharing.share(msg, null, null, null);
    };
    SocialSharingProvider.prototype.whatsAppShare = function (phoneNumber) {
        var mensaje = "Hola, te invitamos a que descargues nuestra Aplicación EyePayCash™:";
        var link = "http://globalone2onemarketing.com/frontend/web/apk.apk";
        this.socialSharing.shareViaWhatsAppToReceiver(phoneNumber, mensaje, null, link);
    };
    SocialSharingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], SocialSharingProvider);
    return SocialSharingProvider;
}());

//# sourceMappingURL=social-sharing.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatterDateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
  Generated class for the FormatterDateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FormatterDateProvider = /** @class */ (function () {
    function FormatterDateProvider() {
    }
    FormatterDateProvider.prototype.getDateLocale = function (tr) {
        var date = new Date(Date.parse(tr));
        return (date.getTime() - (date.getTimezoneOffset() * 60000));
    };
    FormatterDateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FormatterDateProvider);
    return FormatterDateProvider;
}());

//# sourceMappingURL=formatter-date.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(398);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_country_country__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_verification_verification__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_load_information_load_information__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_validation_validation__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_formatter_date_formatter_date__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_clipboard__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_map_map__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_contacts__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ngx_translate_http_loader__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_lenguage_lenguage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_fingerprint_aio__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_touch_login_touch_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_camera_camera__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_social_sharing__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_social_sharing_social_sharing__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_network_network__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_network__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_25__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coins/coins.module#CoinsPageModule', name: 'CoinsPage', segment: 'coins', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history-resume/history-resume.module#HistoryResumePageModule', name: 'HistoryResumePage', segment: 'history-resume', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'app', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-error/modal-error.module#ModalErrorPageModule', name: 'ModalErrorPage', segment: 'modal-error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-transaction/modal-transaction.module#ModalTransactionPageModule', name: 'ModalTransactionPage', segment: 'modal-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-welcome/modal-welcome.module#ModalWelcomePageModule', name: 'ModalWelcomePage', segment: 'modal-welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-update/password-update.module#PasswordUpdatePageModule', name: 'PasswordUpdatePage', segment: 'password-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'RecoveryPasswordPage', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reg-number-phone/reg-number-phone.module#RegNumberPhonePageModule', name: 'RegNumberPhonePage', segment: 'reg-number-phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-code/select-code.module#SelectCodePageModule', name: 'SelectCodePage', segment: 'select-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/security/security.module#SecurityPageModule', name: 'SecurityPage', segment: 'security', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/touch-login/touch-login.module#TouchLoginPageModule', name: 'TouchLoginPage', segment: 'touch-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-acount/update-acount.module#UpdateAcountPageModule', name: 'UpdateAcountPage', segment: 'update-acount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-resume/transaction-resume.module#TransactionResumePageModule', name: 'TransactionResumePage', segment: 'transaction-resume', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/politicas/politicas.module#PoliticasPageModule', name: 'PoliticasPage', segment: 'politicas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__["SelectCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__["RegNumberPhonePageModule"],
                __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */], },
                __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_verification_verification__["a" /* VerificationProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_load_information_load_information__["a" /* LoadInformationProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__["b" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_19__providers_validation_validation__["a" /* ValidationProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_formatter_date_formatter_date__["a" /* FormatterDateProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_22__providers_map_map__["a" /* MapProvider */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common__["c" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_27__providers_lenguage_lenguage__["a" /* LenguageProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_modal_error_modal_error__["a" /* ModalErrorProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_30__providers_touch_login_touch_login__["a" /* TouchLoginProvider */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_32__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_34__providers_social_sharing_social_sharing__["a" /* SocialSharingProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegNumberPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geolocation_geolocation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__ = __webpack_require__(68);
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
    function RegNumberPhonePage(navCtrl, navParams, modal, api, toastCtrl, loadingCtrl, locationProvider, errorProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.locationProvider = locationProvider;
        this.errorProvider = errorProvider;
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
        this.navCtrl.setRoot('LoginPage');
    };
    RegNumberPhonePage.prototype.sendNumberPhone = function () {
        var _this = this;
        if ((this.user_register.country_code != "") && (this.user_register.country_code != null) && (this.user_register.value != "")) {
            var loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<img src='assets/imgs/buho.png'>",
            });
            this.errorProvider.obj.message = 'Se ha enviado un código de verificación al número celular ingresado';
            loading.present();
            this.api.post('auth/pre-sign-up', { 'value': this.user_register.value, 'type': 'phone', 'country_code': this.user_register.country_code }).then(function (data) {
                if (data.country != null) {
                    _this.errorProvider.presentModal();
                    _this.response_verify = data.verify;
                    _this.response_verify.country_id = data.country.id;
                }
                else {
                    _this.errorProvider.obj.message = 'Lo sentimos, nuestra aplicacioón no está habilitada aún en tu país';
                    _this.errorProvider.presentModal();
                }
            }).catch(function (error) {
                var mensaje = "";
                if (Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__["e" /* isArray */])(error.error))
                    error.error.forEach(function (data) {
                        mensaje += data.message + "\n";
                    });
                else
                    console.log('el error ', error);
                _this.errorProvider.obj.message = mensaje;
                _this.errorProvider.presentModal();
            });
            loading.dismiss();
        }
        else {
            this.errorProvider.obj.message = 'Toda la informacioón es obligatoria';
            this.errorProvider.presentModal();
        }
    };
    RegNumberPhonePage.prototype.selectcountry = function () {
        var _this = this;
        var modal = this.modal.create("SelectCodePage");
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data !== undefined) {
                _this.user_register.country_code = data.code;
                _this.user_register.flag = data.flag;
            }
        });
    };
    RegNumberPhonePage.prototype.verifyCode = function () {
        if (this.code_verify == this.response_verify.phone_code) {
            this.navCtrl.push('RegisterPage', { 'response': this.response_verify, 'register': this.user_register });
        }
        else {
            this.errorProvider.obj.message = 'Código incorrecto';
            this.errorProvider.presentModal();
        }
    };
    RegNumberPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reg-number-phone',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/'<ion-content class="imgBackground vignette">\n  <div style="margin-top:20%" class="center">\n    <img style="margin-bottom: 15%" class="Lgo center" src="assets/imgs/EPCLogo.png">\n    <div class="center">\n      <ion-label class="whiteText"> {{\'MENSAJE_CODIGO_VERIFICACION1\'|translate}}<br>\n        {{\'MENSAJE_CODIGO_VERIFICACION2\'|translate}}\n      </ion-label>\n    </div>\n  </div>\n\n  <div class="center divMargin">\n    <ion-grid class="center marGrid">\n      <ion-row>\n        <ion-col col-3 class="mar3Left">\n          <ion-item class="item-flag item-md2 item-ios2 mrgtop12">\n            <img [src]="user_register.flag" class="flagphone banderaWidt widflag">\n          </ion-item>\n        </ion-col>\n        <ion-col col-3 class="marlef3">\n          <ion-item class="item-flag item-md2 item-ios2 martop20">\n            <button ion-button (click)="selectcountry()" class="transparente item-md2 item-button2 button-md btnFlagCountry">+\n              {{user_register.country_code}}\n            </button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 class="marleft8">\n          <ion-item class="stylCel">\n            <ion-input required type="number" name="numerocelular" [(ngModel)]="user_register.value" placeholder="Número movil (celular)"\n              [brmasker]="{len:12}"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class="inputClass" *ngIf="response_verify.mail_code != null || response_verify.phone_code != null">\n      <ion-input placeholder="Introduce el código" maxlength="6" required style="text-align: center" type="number"\n        [(ngModel)]="code_verify" [brmasker]="{len:6}"></ion-input>\n    </ion-item>\n  </div>\n  <div class="center marginBts">\n    <button class="buttonPayCash borderBtns" (click)="cancel()" ion-button small>{{\'CANCELAR\'|translate}}</button>\n    <button class="buttonPayCash borderBtns" (click)="sendNumberPhone()" ion-button small *ngIf="response_verify.phone_code == null">{{\'CONFIRMAR_CELULAR\'|translate}}\n    </button>\n    <button class="buttonPayCash borderBtns" (click)="verifyCode()" ion-button small *ngIf="response_verify.phone_code != null">{{\'CONTINUAR\'|translate}}\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/reg-number-phone/reg-number-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], RegNumberPhonePage);
    return RegNumberPhonePage;
}());

//# sourceMappingURL=reg-number-phone.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_country__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(258);
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
            selector: 'page-select-code',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/select-code/select-code.html"*/'<ion-content padding>\n  <ng-template #withFlags let-attrs="attrs">\n    <img src="{{attrs.data.flag}}" class="flag"/>\n    <span\n        [innerHTML]="\'+\'+attrs.data.callingCodes[0]+\' \'+attrs.data.name"></span>\n  </ng-template>\n  <ion-auto-complete #search item-content [dataProvider]="country"\n                     [options]="{placeholder : \'Search your country\'}"\n                     [template]="withFlags"\n                     [showResultsFirst]="true"\n                     (itemSelected)="selectItem($event)"></ion-auto-complete>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/select-code/select-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_country_country__["a" /* CountryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SelectCodePage);
    return SelectCodePage;
}());

//# sourceMappingURL=select-code.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
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
    function Api(http, storage, errorProvider, app) {
        this.http = http;
        this.storage = storage;
        this.errorProvider = errorProvider;
        this.app = app;
        //    url: string = 'http://globalone2onemarketing.com/frontend/web/apiapp/';
        // url: string = 'http://10.160.170.114/eyepaycash/frontend/web/apiapp/';
        this.url = 'http://f24369a5.ngrok.io/eyepaycash/frontend/web/apiapp/';
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
                resolve(value);
            }).catch(function (error) {
                if (Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__["e" /* isArray */])(!error.error)) {
                    if (error.error.name == "Unauthorized") {
                        _this.goHome();
                        _this.errorProvider.obj.message = "Upps!! El usuario no tiene permisos";
                        _this.errorProvider.presentModal();
                    }
                }
            });
        });
    };
    Api.prototype.post = function (endpoint, body, user) {
        var _this = this;
        var url = this.url + endpoint;
        if (user != null) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + user.accessParam()
            });
        }
        return this.http.post(url, this.jsonToURLEncoded(body), {
            headers: this.headers
        }).toPromise().catch(function (error) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__["e" /* isArray */])(!error.error)) {
                if (error.error.name == "Unauthorized") {
                    _this.goHome();
                    _this.errorProvider.obj.message = "Upps!! El usuario no tiene permisos";
                    _this.errorProvider.presentModal();
                }
            }
        });
    };
    Api.prototype.jsonToURLEncoded = function (jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    };
    Api.prototype.goHome = function () {
        var nav = this.app.getActiveNavs();
        nav[0].setRoot("LoginPage");
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__modal_error_modal_error__["a" /* ModalErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
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
    function AuthUserProvider(api, toastCtrl, errorProvider, storage) {
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.errorProvider = errorProvider;
        this.storage = storage;
        this.user_Info = {
            first_name: null,
            last_name: null,
            phone: null,
            access_token: null,
            is_active: null,
            gender: null,
            mail: null,
            url_img: null,
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
        this.check_terminos = false;
        this.trylogin();
    }
    AuthUserProvider.prototype.login = function (usuario, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.post('auth/login?expand=country,userVerify', { mail: usuario, password: password })
                .then(function (data) {
                if (data.success == 'ok') {
                    _this.setUser(data.user);
                    _this.setActivo(_this.user_Info.is_active);
                    _this.setUserCountry(data.user.country);
                    _this.setUserVerify(data.user.userVerify);
                    resolve(data);
                }
                else {
                    _this.errorProvider.obj.message = 'Usuario o contraseña incorrectos';
                    _this.errorProvider.presentModal();
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    AuthUserProvider.prototype.isLogin = function () {
        return (this.user_Info != null);
    };
    AuthUserProvider.prototype.trylogin = function () {
        var _this = this;
        // this.user_Info = JSON.parse(window.localStorage.getItem('user'));
        this.storage.get('user').then(function (data) {
            _this.user_Info = JSON.parse(data);
            if (_this.user_Info != null) {
                _this.setUserCountry(_this.user_Info.country);
                _this.setUserVerify(_this.user_Info.userVerify);
            }
            return true;
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthUserProvider.prototype.accessParam = function () {
        if (this.user_Info != null)
            return this.user_Info.access_token;
        return null;
    };
    AuthUserProvider.prototype.setUser = function (Usuario) {
        this.user_Info = Usuario;
        this.storage.set('user', JSON.stringify(this.user_Info));
        // window.localStorage.setItem('user', JSON.stringify(this.user_Info));
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
    AuthUserProvider.prototype.setCheck_Terminos = function (check) {
        this.check_terminos = check;
    };
    AuthUserProvider.prototype.setActivo = function (estado) {
        if (estado == 0)
            estado = false;
        else if (estado == 1)
            estado = true;
        this.isActivo = estado;
    };
    AuthUserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__modal_error_modal_error__["a" /* ModalErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AuthUserProvider);
    return AuthUserProvider;
}());

//# sourceMappingURL=auth-user.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalErrorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
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
  Generated class for the ModalErrorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ModalErrorProvider = /** @class */ (function () {
    function ModalErrorProvider(http, modalCtrl) {
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.cambiarFoto = false;
        this.obj = { field: null, icon: null, message: null };
    }
    ModalErrorProvider.prototype.presentModal = function () {
        (this.cambiarFoto == false) ? this.obj.icon = '../assets/imgs/error.png' : this.obj.icon = "../assets/img/ok.png";
        var modalPresent = this.modalCtrl.create('ModalErrorPage', {
            'Error': this.obj
        });
        modalPresent.present();
    };
    ModalErrorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], ModalErrorProvider);
    return ModalErrorProvider;
}());

//# sourceMappingURL=modal-error.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_load_information_load_information__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_lenguage_lenguage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_touch_login_touch_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_network_network__ = __webpack_require__(170);
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
    function MyApp(platform, statusBar, splashScreen, locationProvider, auth, informationProvider, langProvider, menuCtrl, storage, loockScreen, networkProvider) {
        var _this = this;
        this.locationProvider = locationProvider;
        this.auth = auth;
        this.informationProvider = informationProvider;
        this.langProvider = langProvider;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.networkProvider = networkProvider;
        //   rootPage: string = 'LoginPage';
        this.rootPage = 'RegisterPage';
        this.seleccionar('es');
        if (!this.langProvider.verifyIsLanguage())
            // this.rootPage = 'TouchLoginPage';
            this.rootPage = 'LoginPage';
        else {
            this.langProvider.setLenguage();
            //   this.rootPage = 'TouchLoginPage';
            this.rootPage = 'LoginPage';
        }
        if (auth.trylogin()) {
            this.langProvider.setLenguage();
            this.rootPage = 'LoginPage';
            this.informationProvider.init();
        }
        platform.ready().then(function () {
            loockScreen.init();
            _this.networkProvider.networkState();
        });
    }
    MyApp.prototype.getLocation = function () {
        this.locationProvider.basicInformacion;
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setPages([{ page: 'HomePage' }, { page: page }]);
        this.menuCtrl.toggle();
    };
    MyApp.prototype.cerrarSesion = function () {
        window.localStorage.clear();
        this.storage.remove('user');
        this.storage.clear();
        this.menuCtrl.toggle();
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.seleccionar = function (idioma) {
        this.langProvider.seleccionar(idioma);
        this.langProvider.setLenguage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background-color: #f5f5f5">\n    <ion-row class="gradient">\n      <ion-col>\n        <img style="width: 60%" src="assets/imgs/EPCLogo.png" alt="">\n      </ion-col>\n    </ion-row>\n    <ion-list>\n      <button ion-item (click)="openPage(\'HomePage\')">{{\'INICIO\'|translate}}</button>\n      <button ion-item (click)="openPage(\'TransactionPage\')">{{\'TRANSACCION\'|translate}}</button>\n      <button ion-item (click)="openPage(\'HistoryPage\')">{{\'HISTORIAL\'|translate}}</button>\n      <button ion-item (click)="openPage(\'MapPage\')">{{\'MAPA\'|translate}}</button>\n      <button ion-item (click)="openPage(\'AccountPage\')">{{\'MI_CUENTA\'|translate}}</button>\n      <button ion-item (click)="openPage(\'SecurityPage\')">{{\'SEGURIDAD\'|translate}}</button>\n      <button ion-item (click)="cerrarSesion()">{{\'CERRAR_SESION\'|translate}}</button>\n    </ion-list>\n    <ion-list style="text-align: center">\n      <ion-item class="center" style="background: transparent; border-top: 0px solid #c8c7cc !important; border-bottom: 0px solid #c8c7cc !important;">\n        <button ion-button  (click)="seleccionar(\'es\')" class="buttonPayCash">Español</button>\n        <button ion-button  (click)="seleccionar(\'en\')" class="buttonPayCash">English</button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_load_information_load_information__["a" /* LoadInformationProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_lenguage_lenguage__["a" /* LenguageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_touch_login_touch_login__["a" /* TouchLoginProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_network_network__["a" /* NetworkProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(49);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
    ], VerificationProvider);
    return VerificationProvider;
}());

//# sourceMappingURL=verification.js.map

/***/ })

},[393]);
//# sourceMappingURL=main.js.map