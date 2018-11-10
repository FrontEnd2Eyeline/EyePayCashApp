webpackJsonp([20],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_social_sharing_social_sharing__ = __webpack_require__(389);
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
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams, contacts, loadingCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = contacts;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.listaContactos = [];
        this.avatar = "./assets/icon/avatar.png";
        this.cargarListaContactos();
    }
    ContactsPage.prototype.cargarListaContactos = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src='assets/imgs/buho.png'>",
        });
        loading.present();
        this.contacts.find(["*"])
            .then(function (data) {
            var datosMostar = [];
            data.map(function (item) {
                if (item.displayName != null && item.phoneNumbers != null) {
                    var indicative = item.phoneNumbers[0].value.toString().substring(0, 1);
                    console.log('indicativo', indicative);
                    console.log('items', item);
                    if (indicative == "+") {
                        datosMostar.push({
                            displayName: item.displayName,
                            phoneNumbers: item.phoneNumbers,
                        });
                    }
                }
                loading.dismiss();
            });
            _this.listaContactos = datosMostar;
        }, function (error) {
            console.log({ error: error });
            loading.dismiss();
        });
    };
    ContactsPage.prototype.sharing = function () {
        this.socialSharing.socialShare();
    };
    ContactsPage.prototype.whatsAppInvite = function (phoneNumbers) {
        this.socialSharing.whatsAppShare(phoneNumbers);
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/contacts/contacts.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Listado de contactos\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item (click)="sharing()" class="center2">\n			<ion-icon name="logo-whatsapp"></ion-icon>\n			<ion-icon name="logo-facebook"></ion-icon>\n			<ion-icon name="logo-twitter"></ion-icon>\n		</ion-item>\n		<ion-item *ngFor="let contacto of listaContactos">\n			<div (click)="whatsAppInvite(contacto.phoneNumbers[0].value)">\n				<ion-avatar item-start>\n					<img src="assets/imgs/contacto.png">\n				</ion-avatar>\n				<h2>{{contacto.displayName | uppercase }}</h2>\n				<p>{{contacto.phoneNumbers[0].value}}</p>\n			</div>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/contacts/contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_social_sharing_social_sharing__["a" /* SocialSharingProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=20.js.map