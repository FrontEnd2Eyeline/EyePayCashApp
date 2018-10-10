webpackJsonp([2],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(357);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* Geocoder */]
            ]
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mapStyle__ = __webpack_require__(710);
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
    function MapPage(navCtrl, navParams, geolocation, api, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.api = api;
        this.user = user;
        this.markers = [];
        this.loadMap();
    }
    MapPage.prototype.ionViewDidLoad = function () {
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 1.178720,
                    lng: -77.313249
                },
                zoom: 5,
                tilt: 0,
                bearing: 0
            },
            styles: __WEBPACK_IMPORTED_MODULE_6__app_mapStyle__["a" /* mapStyle */]
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMaps */].create('map', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            _this.getPosition();
        })
            .catch(function (error) {
            console.log(error);
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (value) {
            var mapStop = value[0];
            if (mapStop.zoom >= 5) {
                _this.loadPoints(mapStop.target.lat, mapStop.target.lng);
            }
        });
    };
    MapPage.prototype.loadPoints = function (lat, lng) {
        var _this = this;
        this.api.get('app/find-map', this.user, {
            lat: lat,
            lng: lng,
            rad: 20 //20 km a la redonda
        }).then(function (value) {
            console.log(value);
            value.forEach(function (item) {
                if (_this.markers.indexOf(item.id) < 0)
                    _this.map.addMarker({
                        title: item.company_name + " \n " + item.address,
                        icon: 'blue',
                        animation: 'DROP',
                        position: new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* LatLng */](item.lat, item.lng)
                    }).catch(function (erro) {
                        console.log(erro);
                    })
                        .then(function (value1) { return console.log(value1); });
                _this.markers.push(item.id);
            });
        });
    };
    MapPage.prototype.getPosition = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (response) {
            console.log(response);
            _this.map.moveCamera({
                target: response.latLng,
                zoom: 14,
                bearing: 0,
                tilt: 0,
                duration: 1000,
            });
            _this.map.addMarker({
                title: 'My Position',
                icon: 'red',
                animation: 'DROP',
                position: response.latLng
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 710:
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
//# sourceMappingURL=2.js.map