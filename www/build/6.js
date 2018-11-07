webpackJsonp([6],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_map_map__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* Geocoder */],
                __WEBPACK_IMPORTED_MODULE_5__providers_map_map__["a" /* MapProvider */]
            ]
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mapStyle__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_map__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_modal_error_modal_error__ = __webpack_require__(68);
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
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geolocation, api, user, mapProvider, loadCtl, errorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.api = api;
        this.user = user;
        this.mapProvider = mapProvider;
        this.loadCtl = loadCtl;
        this.errorProvider = errorProvider;
        this.idsLoaded = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loading = this.loadCtl.create({
            spinner: 'hide',
            content: "<img src='assets/imgs/buho.png'>",
        });
        this.loading.present();
        this.loadMap();
        this.loadMarkers();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: this.mapProvider.camera,
            styles: __WEBPACK_IMPORTED_MODULE_6__app_mapStyle__["a" /* mapStyle */]
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMaps */].create('map', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            _this.getPosition();
        })
            .catch(function (error) {
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (value) {
            var mapStop = value[0];
            _this.mapProvider.setCamera({
                target: {
                    lat: mapStop.target.lat,
                    lng: mapStop.target.lng
                },
                zoom: mapStop.zoom,
                tilt: 0,
                bearing: 0
            });
            if (mapStop.zoom >= 10) {
                _this.loadPoints(mapStop.target.lat, mapStop.target.lng);
            }
        });
    };
    MapPage.prototype.loadMarkers = function () {
        var _this = this;
        this.mapProvider.markers.forEach((function (value) {
            if (_this.idsLoaded.indexOf(value.id) == -1) {
                _this.map.addMarker({
                    title: value.company_name + " " + value.address,
                    icon: 'blue',
                    animation: 'DROP',
                    position: new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* LatLng */](value.lat, value.lng)
                }).then().catch(function (data) {
                });
                _this.idsLoaded.push(value.id);
            }
        }));
    };
    MapPage.prototype.loadPoints = function (lat, lng) {
        var _this = this;
        this.api.get('app/find-map', this.user, {
            lat: lat,
            lng: lng,
            rad: 20 //20 km a la redonda
        }).then(function (value) {
            _this.mapProvider.setMarkers(value);
            _this.loadMarkers();
        });
    };
    MapPage.prototype.getPosition = function () {
        var _this = this;
        if (this.mapProvider.userPosition == null) {
            this.map.getMyLocation()
                .then(function (response) {
                _this.map.moveCamera({
                    target: response.latLng,
                    zoom: 14,
                    bearing: 0,
                    tilt: 0,
                    duration: 1000,
                }).then(function () {
                    _this.loading.dismiss();
                });
                _this.mapProvider.userPosition = response.latLng;
                _this.map.addMarker({
                    title: 'Mi ubicación.',
                    icon: 'red',
                    animation: 'DROP',
                    position: response.latLng
                });
            })
                .catch(function (error) {
                _this.loading.dismiss();
                _this.navCtrl.setRoot("HomePage");
                _this.errorProvider.obj.message = 'Por favor, permita el acceso a su ubicación';
                _this.errorProvider.presentModal();
            });
        }
        else {
            this.map.addMarker({
                title: 'Mi ubicación.',
                icon: 'red',
                animation: 'DROP',
                position: this.mapProvider.userPosition
            });
            this.loading.dismiss();
        }
    };
    MapPage.prototype.goPage = function (page) {
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
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Lugares para retirar dinero</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="map"></div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class="center" col-3 (click)="goPage(\'transaction\')">\n        <img width="25" height="25" src="assets/icon/1.png">\n        <p>{{\'TRANSACCION\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-3 (click)="goPage(\'history\')">\n        <!-- <ion-badge item-end>{{count}}</ion-badge> -->\n        <img width="25" height="25" src="assets/icon/2.png">\n        <p>{{\'HISTORIAL\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-3 (click)="goPage(\'maps\')">\n        <img width="25" height="25" src="assets/icon/3.png">\n        <p>{{\'MAPA\'|translate}}</p>\n      </ion-col>\n      <ion-col class="center" col-3 (click)="goPage(\'profile\')">\n        <img width="25" height="25" src="assets/icon/4.png">\n        <p>{{\'CUENTA\'|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapStyle; });
var mapStyle = [{
        "featureType": "water",
        "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }]
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }]
    }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{ "color": "#808080" }, { "lightness": 54 }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{ "color": "#ece2d9" }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{ "color": "#ccdca1" }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#767676" }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#ffffff" }]
    }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }]
    }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, {
        "featureType": "poi.sports_complex",
        "stylers": [{ "visibility": "on" }]
    }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, {
        "featureType": "poi.business",
        "stylers": [{ "visibility": "simplified" }]
    }
];
//# sourceMappingURL=mapStyle.js.map

/***/ })

});
//# sourceMappingURL=6.js.map