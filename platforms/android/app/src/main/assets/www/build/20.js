<<<<<<< HEAD
webpackJsonp([20],{692:function(l,n,u){"use strict";function a(l){return t._22(0,[(l()(),t.Z(0,0,null,null,20,"ion-content",[["class","BackGRa"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,g.b,g.a)),t.Y(1,4374528,null,0,v.a,[m.a,h.a,Z.a,t.j,t.z,y.a,j.a,t.u,[2,P.a],[2,w.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(3,0,null,1,16,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(5,0,null,null,6,"div",[["class","gradient"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(7,0,null,null,0,"img",[["class","mrg10Top"],["src","assets/imgs/error.png"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(9,0,null,null,1,"p",[["class","mrg5Top"]],null,null,null,null,null)),(l()(),t._20(10,null,["",""])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(13,0,null,null,5,"div",[["class","footer-button"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(15,0,null,null,2,"button",[["class","buttonPayCash"],["ion-button",""],["style","color: white"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.closeModal()&&a}return a},M.b,M.a)),t.Y(16,1097728,null,0,k.a,[[8,""],m.a,t.j,t.z],null,null),(l()(),t._20(-1,0,["Aceptar"])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n"]))],null,function(l,n){var u=n.component;l(n,0,0,t._11(n,1).statusbarPadding,t._11(n,1)._hasRefresher);l(n,10,0,u.obj.message)})}Object.defineProperty(n,"__esModule",{value:!0});var t=u(1),o=(u(0),u(31),function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.viewControll=u,this.obj={field:null,message:null}}return l.prototype.ionViewDidLoad=function(){this.obj=this.navParams.get("Error")},l.prototype.closeModal=function(){this.viewControll.dismiss()},l}()),r=function(){return function(){}}(),e=u(203),s=u(204),i=u(205),c=u(206),_=u(207),d=u(208),f=u(209),p=u(210),b=u(211),g=u(142),v=u(26),m=u(3),h=u(6),Z=u(11),y=u(10),j=u(33),P=u(7),w=u(32),M=u(39),k=u(25),C=u(16),Y=t.X({encapsulation:2,styles:[],data:{}}),q=t.V("page-modal-error",o,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-modal-error",[],null,null,null,a,Y)),t.Y(1,49152,null,0,o,[w.a,C.a,P.a],null,null)],null,null)},{},{},[]),z=u(15),E=u(17),R=u(141),T=u(57);u.d(n,"ModalErrorPageModuleNgFactory",function(){return V});var V=t.W(r,[],function(l){return t._7([t._8(512,t.i,t.S,[[8,[e.a,s.a,i.a,c.a,_.a,d.a,f.a,p.a,b.a,q]],[3,t.i],t.s]),t._8(4608,z.n,z.m,[t.r,[2,z.x]]),t._8(4608,E.v,E.v,[]),t._8(4608,E.d,E.d,[]),t._8(512,z.b,z.b,[]),t._8(512,E.t,E.t,[]),t._8(512,E.i,E.i,[]),t._8(512,E.q,E.q,[]),t._8(512,R.a,R.a,[]),t._8(512,R.b,R.b,[]),t._8(512,r,r,[]),t._8(256,T.a,o,[])])})}});
=======
webpackJsonp([20],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(743);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_social_sharing_social_sharing__ = __webpack_require__(387);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_social_sharing_social_sharing__["a" /* SocialSharingProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=20.js.map
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
