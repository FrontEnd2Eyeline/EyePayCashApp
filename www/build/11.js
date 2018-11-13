webpackJsonp([11],{

<<<<<<< HEAD
/***/ 733:
=======
<<<<<<< HEAD
/***/ 730:
=======
/***/ 731:
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(758);
=======
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(755);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(759);
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 758:
=======
<<<<<<< HEAD
/***/ 755:
=======
/***/ 759:
>>>>>>> 3950783bd88485802166fcda61286b84fb77c589
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goPage = function (page) {
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
        else if (page == "security")
            //this.navCtrl.push("SecurityPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'SecurityPage' }]);
        else if (page == "account")
            //this.navCtrl.push("AccountPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'AccountPage' }]);
        else if (page == "HomePage")
            this.navCtrl.setRoot('HomePage');
        else
            //this.navCtrl.push("TransactionPage");
            this.navCtrl.setPages([{ page: 'HomePage' }, { page: 'TransactionPage' }]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/profile/profile.html"*/'<ion-content class="BackGRa" padding>\n	<div class="center">\n		<img class="logo mrgLogoTopBut" src="assets/imgs/EPCLogo.png" />\n	</div>\n	<div class="center mrg36Top">\n		<ion-row>\n			<ion-col (click)="goPage(\'account\')" class="lineRight lineRight2 linerig" col-6>\n				<img class="tamaIcos" src="assets/newIcons/13.png" />\n				<h6 class="colWhite">{{\'MI_CUENTA\'|translate}}</h6>\n			</ion-col>\n			<ion-col (click)="goPage(\'security\')" class="lineRight2" col-6>\n				<img class="tamaIcos" src="assets/newIcons/14.png" />\n				<h6 class="colWhite">{{\'SEGURIDAD\'|translate}}</h6>\n			</ion-col>\n		</ion-row>\n		<ion-row class="mr10Top">\n			<ion-col (click)="goPage(\'HomePage\')" col-12>\n				<img class="icoCenter" src="assets/newIcons/38.png" />\n			</ion-col>\n		</ion-row>\n		<ion-row class="margtop2">\n			<ion-col (click)="goPage(\'TransactionPage\')" class="lineRight" col-6>\n				<img class="tamaIcos" src="assets/newIcons/15.png" />\n				<h6 class="colWhite">{{\'TRANSACCION\'|translate}}</h6>\n			</ion-col>\n			<ion-col (click)="goPage(\'history\')">\n				<img class="tamaIcos" src="assets/newIcons/16.png" />\n				<h6 class="colWhite">Historial</h6>\n			</ion-col>\n		</ion-row>\n		<ion-item class="center bacTransp">\n			<button class="buttonPayCash borderBtns" ion-button small>CONOCE MÁS</button>\n		</ion-item>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=11.js.map