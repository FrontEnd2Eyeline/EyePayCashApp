<<<<<<< HEAD
webpackJsonp([24],{100:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(58),l(51);var t=function(){function n(n,e,l){this.http=n,this.auth=e,this.api=l,this.infoCurrencies=[],this.date=(new Date).getTime()}return n.prototype.init=function(){this.getCountries()},n.prototype.getCountries=function(){var n=this;return new Promise(function(e){void 0==n.countrys?n.api.get("app/get-countries",n.auth).then(function(l){n.countrys=l,e(n.countrys)}).catch():e(n.countrys)})},n.prototype.getCurrencies=function(n){var e=this;return new Promise(function(l){(new Date).getTime()-e.date>3e5||void 0==e.infoCurrencies[n]?(e.date=(new Date).getTime(),e.api.get("app/get-prices",e.auth,{currency_code:n}).then(function(t){e.infoCurrencies[n]=t,l(t)})):l(e.infoCurrencies[n])})},n.prototype.getCountriesID=function(n){var e={id:null,phone_code:null,currency_code:null};return this.countrys.forEach(function(l){l.currency==n&&(e.id=l.id,e.phone_code=l.phone_code,e.currency_code=l.currency)}),e},n.prototype.getCriptos=function(){var n=this;return new Promise(function(e){n.api.get("app/criptomonedas",n.auth).then(function(n){e(n)})})},n}()},101:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(89);var t=function(){function n(n,e){this.http=n,this.translate=e}return n.prototype.seleccionar=function(n){window.localStorage.removeItem("language"),window.localStorage.setItem("language",n)},n.prototype.setLenguage=function(){var n=window.localStorage.getItem("language");console.log(n),this.translate.setDefaultLang(n),this.translate.use(n)},n.prototype.verifyIsLanguage=function(){return null!=window.localStorage.getItem("language")},n}()},102:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(69),l(149),l(31),l(58);var t=function(){function n(n,e,l,t,o,a,r){this.http=n,this.faio=e,this.modalCtrl=l,this.platform=t,this.splashScreen=o,this.app=a,this.isLogin=r,this.isTouch=!0,this.initialized=!1,this.isLocked=!1,this.navCtrl=a.getActiveNav(),console.log("Hello TouchLoginProvider Provider")}return n.prototype.init=function(){var n=this;this.initialized||this.platform.ready().then(function(){n.onPauseSubscription=n.platform.pause.subscribe(function(){n.splashScreen.show()}),n.onResumeSubscription=n.platform.resume.subscribe(function(){if(!n.isLocked)if(n.isLocked=!0,n.login=n.isLogin.isLogin)n.isTouch&&(n.showFingerPrint(),n.login(),console.log("bloqueado",n.isLocked));else{var e=n.app.getActiveNav();e.setRoot("LoginPage")}console.log("no bloqueado",n.isLocked),n.splashScreen.hide(),n.isLocked=!1})})},n.prototype.showFingerPrint=function(){var n=this;this.faio.isAvailable().then(function(e){n.faio.show({clientId:"Identificar de huella",clientSecret:"password",disableBackup:!1,localizedFallbackTitle:"Use Pin",localizedReason:"Please authenticate"}).then(function(e){n.login(),n.isLocked=!1}).catch(function(e){n.exitApp()})}).catch(function(n){return console.log(n)})},n.prototype.login=function(){var n=this.app.getActiveNav();n.setRoot("HomePage")},n.prototype.exitApp=function(){this.platform.exitApp()},n}()},150:function(n,e,l){"use strict";l.d(e,"a",function(){return o});l(0),l(31);var t=l(4),o=function(){function n(n,e,l,t,o,a,r,u){var i=this;this.navCtrl=n,this.navParams=e,this.modal=l,this.api=t,this.toastCtrl=o,this.loadingCtrl=a,this.locationProvider=r,this.errorProvider=u,this.user_register={country_code:"",flag:"",value:""},this.code_verify=null,this.response_verify={id:null,is_mail_verify:null,mail_code:null,phone_code:null,country_id:null},this.imagen="assets/backgrounds/Background2.png",this.locationProvider.getBasicInfo().then(function(n){i.user_register.country_code=n.country_code,i.user_register.flag=n.flag})}return n.prototype.cancel=function(){this.navCtrl.setRoot("LoginPage")},n.prototype.sendNumberPhone=function(){var n=this;if(""!=this.user_register.country_code&&null!=this.user_register.country_code&&""!=this.user_register.value){var e=this.loadingCtrl.create({spinner:"hide",content:"<img src='assets/imgs/buho.png'>"});this.errorProvider.obj.message="Se ha enviado un código de verificación al número celular ingresado",e.present(),this.api.post("auth/pre-sign-up",{value:this.user_register.value,type:"phone",country_code:this.user_register.country_code}).then(function(e){null!=e.country?(n.errorProvider.presentModal(),n.response_verify=e.verify,n.response_verify.country_id=e.country.id):(n.errorProvider.obj.message="Lo sentimos, nuestra aplicacioón no está habilitada aún en tu país",n.errorProvider.presentModal())}).catch(function(e){var l="";Object(t.e)(e.error)?e.error.forEach(function(n){l+=n.message+"\n"}):console.log("el error ",e),n.errorProvider.obj.message=l,n.errorProvider.presentModal()}),e.dismiss()}else this.errorProvider.obj.message="Toda la informacioón es obligatoria",this.errorProvider.presentModal()},n.prototype.selectcountry=function(){var n=this,e=this.modal.create("SelectCodePage");e.present(),e.onDidDismiss(function(e){console.log(e),void 0!==e&&(n.user_register.country_code=e.code,n.user_register.flag=e.flag)})},n.prototype.verifyCode=function(){this.code_verify==this.response_verify.phone_code?this.navCtrl.push("RegisterPage",{response:this.response_verify,register:this.user_register}):(this.errorProvider.obj.message="Código incorrecto",this.errorProvider.presentModal())},n}()},217:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0);var t=function(){function n(){}return n.getValidatorErrorMessage=function(n,e,l){return{required:l+" is Required",minlength:"The "+l+" minimum length "+e.requiredLength,pattern:"The "+l+" character and number",email:"The "+l+" no es válido"}[n]},n}()},222:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0);var t=function(){function n(n){this.http=n,this.markers=[],this.camera={target:{lat:1.17872,lng:-77.313249},zoom:5,tilt:0,bearing:0},this.markersId=[],this.userPosition=null}return n.prototype.setCamera=function(n){this.camera=n},n.prototype.setMarkers=function(n){var e=this;n.forEach(function(n){-1==e.markersId.indexOf(n.id)&&(e.markers.push(n),e.markersId.push(n.id))})},n}()},228:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(194);var t=function(){function n(n,e){this.http=n,this.socialSharing=e,this.phoneNumber=null,console.log("Hello SocialSharingProvider Provider")}return n.prototype.socialShare=function(){this.socialSharing.share("Hola",null,null,null)},n.prototype.whatsAppShare=function(n){this.socialSharing.shareViaWhatsAppToReceiver(n,"Hola, te invitamos a que descargues nuestra Aplicación EyePayCash™:",null,"http://globalone2onemarketing.com/frontend/web/apk.apk")},n}()},229:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0);var t=function(){function n(){}return n.prototype.getDateLocale=function(n){var e=new Date(Date.parse(n));return e.getTime()-6e4*e.getTimezoneOffset()},n}()},230:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(202);var t=function(){function n(n){this.camera=n,this.options={quality:80,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,allowEdit:!1,targetWidth:500,targetHeight:500},console.log("Hello LocalCameraProvider Provider")}return n.prototype.getPhoto=function(n){var e=this;return this.options.sourceType=this.camera.PictureSourceType.CAMERA,n&&(this.options=Object.assign(this.options,n)),new Promise(function(n,l){e.camera.getPicture(e.options).then(function(l){n(e.options.destinationType==e.camera.DestinationType.DATA_URL?"data:image/jpeg;base64,"+l:l)}).catch(function(n){return l(n)})})},n.prototype.getPhotoDirectory=function(n){var e=this;return this.options.sourceType=this.camera.PictureSourceType.PHOTOLIBRARY,n&&(this.options=Object.assign(this.options,n)),new Promise(function(n,l){e.camera.getPicture(e.options).then(function(l){n(e.options.destinationType==e.camera.DestinationType.DATA_URL?"data:image/jpeg;base64,"+l:l)}).catch(function(n){return l(n)})})},n}()},233:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(31),l(103),l(99),l(397),l(89);var t=function(){return function(){}}()},234:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(31);var t=function(){return function(){}}()},235:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(31);var t=function(){function n(n,e,l,t){this.navCtrl=n,this.navParams=e,this.country=l,this.view=t}return n.prototype.ionViewDidLoad=function(){this.searchbar.getItems()},n.prototype.selectItem=function(n){this.view.dismiss({code:n.callingCodes[0],flag:n.flag})},n}()},246:function(n,e){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id=246},272:function(n,e,l){function t(n){var e=o[n];return e?l.e(e[1]).then(function(){return l(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var o={"../pages/account/account.module.ngfactory":[705,5],"../pages/coins/coins.module.ngfactory":[684,15],"../pages/contacts/contacts.module.ngfactory":[685,12],"../pages/history-resume/history-resume.module.ngfactory":[686,7],"../pages/history/history.module.ngfactory":[687,14],"../pages/home/home.module.ngfactory":[688,16],"../pages/language/language.module.ngfactory":[689,21],"../pages/login/login.module.ngfactory":[690,4],"../pages/map/map.module.ngfactory":[691,13],"../pages/modal-error/modal-error.module.ngfactory":[692,20],"../pages/modal-transaction/modal-transaction.module.ngfactory":[693,11],"../pages/modal-welcome/modal-welcome.module.ngfactory":[694,19],"../pages/password-update/password-update.module.ngfactory":[695,3],"../pages/politicas/politicas.module.ngfactory":[707,18],"../pages/profile/profile.module.ngfactory":[696,17],"../pages/recovery-password/recovery-password.module.ngfactory":[697,2],"../pages/reg-number-phone/reg-number-phone.module.ngfactory":[698,23],"../pages/register/register.module.ngfactory":[699,1],"../pages/security/security.module.ngfactory":[706,0],"../pages/select-code/select-code.module.ngfactory":[700,22],"../pages/touch-login/touch-login.module.ngfactory":[701,10],"../pages/transaction-resume/transaction-resume.module.ngfactory":[704,9],"../pages/transaction/transaction.module.ngfactory":[703,6],"../pages/update-acount/update-acount.module.ngfactory":[702,8]};t.keys=function(){return Object.keys(o)},t.id=272,n.exports=t},398:function(n,e,l){"use strict";function t(n){return u._22(0,[(n()(),u.Z(0,0,null,null,19,"ion-item",[["class","inputClass item item-block"]],null,null,null,i.b,i.a)),u.Y(1,1097728,null,3,s.a,[c.a,g.a,u.j,u.z,[2,d.a]],null,null),u._18(335544320,10,{contentLabel:0}),u._18(603979776,11,{_buttons:1}),u._18(603979776,12,{_icons:1}),u.Y(5,16384,null,0,p.a,[],null,null),(n()(),u._20(-1,2,["\n      "])),(n()(),u.Z(7,0,null,3,11,"ion-input",[["maxlength","6"],["placeholder","Introduce el código"],["required",""],["style","text-align: center"],["type","number"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionFocus"]],function(n,e,l){var t=!0,o=n.component;if("keyup"===e){t=!1!==u._11(n,11).inputKeyup(l)&&t}if("ionBlur"===e){t=!1!==u._11(n,11).inputOnblur(l)&&t}if("ionFocus"===e){t=!1!==u._11(n,11).inputFocus(l)&&t}if("ngModelChange"===e){t=!1!==(o.code_verify=l)&&t}return t},f.b,f.a)),u.Y(8,16384,null,0,h.r,[],{required:[0,"required"]},null),u.Y(9,540672,null,0,h.j,[],{maxlength:[0,"maxlength"]},null),u._16(1024,null,h.k,function(n,e){return[n,e]},[h.r,h.j]),u.Y(11,81920,null,0,_.a,[u.z,u.j],{brmasker:[0,"brmasker"]},null),u._14(12,{len:0}),u._16(1024,null,h.l,function(n){return[n]},[_.a]),u.Y(14,671744,null,0,h.p,[[8,null],[2,h.k],[8,null],[2,h.l]],{model:[0,"model"]},{update:"ngModelChange"}),u._16(2048,null,h.m,null,[h.p]),u.Y(16,16384,null,0,h.n,[h.m],null,null),u.Y(17,5423104,null,0,m.a,[g.a,y.a,c.a,b.a,u.j,u.z,[2,v.a],[2,s.a],[2,h.m],P.a],{type:[0,"type"],placeholder:[1,"placeholder"]},{ionFocus:"ionFocus",ionBlur:"ionBlur"}),u.Y(18,81920,null,0,C.a,[],null,null),(n()(),u._20(-1,2,["\n    "]))],function(n,e){var l=e.component;n(e,8,0,"");n(e,9,0,"6");n(e,11,0,n(e,12,0,6));n(e,14,0,l.code_verify);n(e,17,0,"number","Introduce el código"),n(e,18,0)},function(n,e){n(e,7,0,u._11(e,8).required?"":null,u._11(e,9).maxlength?u._11(e,9).maxlength:null,u._11(e,16).ngClassUntouched,u._11(e,16).ngClassTouched,u._11(e,16).ngClassPristine,u._11(e,16).ngClassDirty,u._11(e,16).ngClassValid,u._11(e,16).ngClassInvalid,u._11(e,16).ngClassPending)})}function o(n){return u._22(0,[(n()(),u.Z(0,0,null,null,3,"button",[["class","buttonPayCash borderBtns"],["ion-button",""],["small",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.sendNumberPhone()&&t}return t},w.b,w.a)),u.Y(1,1097728,null,0,k.a,[[8,""],g.a,u.j,u.z],{small:[0,"small"]},null),(n()(),u._20(2,0,["","\n    "])),u._13(131072,I.a,[Y.a,u.g])],function(n,e){n(e,1,0,"")},function(n,e){n(e,2,0,u._21(e,2,0,u._11(e,3).transform("CONFIRMAR_CELULAR")))})}function a(n){return u._22(0,[(n()(),u.Z(0,0,null,null,3,"button",[["class","buttonPayCash borderBtns"],["ion-button",""],["small",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.verifyCode()&&t}return t},w.b,w.a)),u.Y(1,1097728,null,0,k.a,[[8,""],g.a,u.j,u.z],{small:[0,"small"]},null),(n()(),u._20(2,0,["","\n    "])),u._13(131072,I.a,[Y.a,u.g])],function(n,e){n(e,1,0,"")},function(n,e){n(e,2,0,u._21(e,2,0,u._11(e,3).transform("CONTINUAR")))})}function r(n){return u._22(0,[(n()(),u.Z(0,0,null,null,100,"ion-content",[["class","imgBackground vignette"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,j.b,j.a)),u.Y(1,4374528,null,0,v.a,[g.a,y.a,P.a,u.j,u.z,b.a,L.a,u.u,[2,M.a],[2,T.a]],null,null),(n()(),u._20(-1,1,["\n  "])),(n()(),u.Z(3,0,null,1,14,"div",[["class","center"],["style","margin-top:20%"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n    "])),(n()(),u.Z(5,0,null,null,0,"img",[["class","Lgo center"],["src","assets/imgs/EPCLogo.png"],["style","margin-bottom: 15%"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n    "])),(n()(),u.Z(7,0,null,null,9,"div",[["class","center"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n      "])),(n()(),u.Z(9,0,null,null,6,"ion-label",[["class","whiteText"]],null,null,null,null,null)),u.Y(10,16384,null,0,N.a,[g.a,u.j,u.z,[8,null],[8,null],[8,null],[8,null]],null,null),(n()(),u._20(11,null,[" ",""])),u._13(131072,I.a,[Y.a,u.g]),(n()(),u.Z(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._20(14,null,["\n        ","\n      "])),u._13(131072,I.a,[Y.a,u.g]),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,null,["\n  "])),(n()(),u._20(-1,1,["\n\n  "])),(n()(),u.Z(19,0,null,1,66,"div",[["class","center divMargin"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n    "])),(n()(),u.Z(21,0,null,null,60,"ion-grid",[["class","center marGrid grid"]],null,null,null,null,null)),u.Y(22,16384,null,0,R.a,[],null,null),(n()(),u._20(-1,null,["\n      "])),(n()(),u.Z(24,0,null,null,56,"ion-row",[["class","row"]],null,null,null,null,null)),u.Y(25,16384,null,0,F.a,[],null,null),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(27,0,null,null,12,"ion-col",[["class","mar3Left col"],["col-3",""]],null,null,null,null,null)),u.Y(28,16384,null,0,Z.a,[],null,null),(n()(),u._20(-1,null,["\n          "])),(n()(),u.Z(30,0,null,null,8,"ion-item",[["class","item-flag item-md2 item-ios2 mrgtop12 item item-block"]],null,null,null,i.b,i.a)),u.Y(31,1097728,null,3,s.a,[c.a,g.a,u.j,u.z,[2,d.a]],null,null),u._18(335544320,1,{contentLabel:0}),u._18(603979776,2,{_buttons:1}),u._18(603979776,3,{_icons:1}),u.Y(35,16384,null,0,p.a,[],null,null),(n()(),u._20(-1,2,["\n            "])),(n()(),u.Z(37,0,null,2,0,"img",[["class","flagphone banderaWidt widflag"]],[[8,"src",4]],null,null,null,null)),(n()(),u._20(-1,2,["\n          "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(41,0,null,null,14,"ion-col",[["class","marlef3 col"],["col-3",""]],null,null,null,null,null)),u.Y(42,16384,null,0,Z.a,[],null,null),(n()(),u._20(-1,null,["\n          "])),(n()(),u.Z(44,0,null,null,10,"ion-item",[["class","item-flag item-md2 item-ios2 martop20 item item-block"]],null,null,null,i.b,i.a)),u.Y(45,1097728,null,3,s.a,[c.a,g.a,u.j,u.z,[2,d.a]],null,null),u._18(335544320,4,{contentLabel:0}),u._18(603979776,5,{_buttons:1}),u._18(603979776,6,{_icons:1}),u.Y(49,16384,null,0,p.a,[],null,null),(n()(),u._20(-1,2,["\n            "])),(n()(),u.Z(51,0,null,2,2,"button",[["class","transparente item-md2 item-button2 button-md btnFlagCountry"],["ion-button",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.selectcountry()&&t}return t},w.b,w.a)),u.Y(52,1097728,[[5,4]],0,k.a,[[8,""],g.a,u.j,u.z],null,null),(n()(),u._20(53,0,["+\n              ","\n            "])),(n()(),u._20(-1,2,["\n          "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u.Z(57,0,null,null,22,"ion-col",[["class","marleft8 col"],["col-6",""]],null,null,null,null,null)),u.Y(58,16384,null,0,Z.a,[],null,null),(n()(),u._20(-1,null,["\n          "])),(n()(),u.Z(60,0,null,null,18,"ion-item",[["class","stylCel item item-block"]],null,null,null,i.b,i.a)),u.Y(61,1097728,null,3,s.a,[c.a,g.a,u.j,u.z,[2,d.a]],null,null),u._18(335544320,7,{contentLabel:0}),u._18(603979776,8,{_buttons:1}),u._18(603979776,9,{_icons:1}),u.Y(65,16384,null,0,p.a,[],null,null),(n()(),u._20(-1,2,["\n            "])),(n()(),u.Z(67,0,null,3,10,"ion-input",[["name","numerocelular"],["placeholder","Número movil (celular)"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionFocus"]],function(n,e,l){var t=!0,o=n.component;if("keyup"===e){t=!1!==u._11(n,70).inputKeyup(l)&&t}if("ionBlur"===e){t=!1!==u._11(n,70).inputOnblur(l)&&t}if("ionFocus"===e){t=!1!==u._11(n,70).inputFocus(l)&&t}if("ngModelChange"===e){t=!1!==(o.user_register.value=l)&&t}return t},f.b,f.a)),u.Y(68,16384,null,0,h.r,[],{required:[0,"required"]},null),u._16(1024,null,h.k,function(n){return[n]},[h.r]),u.Y(70,81920,null,0,_.a,[u.z,u.j],{brmasker:[0,"brmasker"]},null),u._14(71,{len:0}),u._16(1024,null,h.l,function(n){return[n]},[_.a]),u.Y(73,671744,null,0,h.p,[[8,null],[2,h.k],[8,null],[2,h.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u._16(2048,null,h.m,null,[h.p]),u.Y(75,16384,null,0,h.n,[h.m],null,null),u.Y(76,5423104,null,0,m.a,[g.a,y.a,c.a,b.a,u.j,u.z,[2,v.a],[2,s.a],[2,h.m],P.a],{type:[0,"type"],placeholder:[1,"placeholder"]},{ionFocus:"ionFocus",ionBlur:"ionBlur"}),u.Y(77,81920,null,0,C.a,[],null,null),(n()(),u._20(-1,2,["\n          "])),(n()(),u._20(-1,null,["\n        "])),(n()(),u._20(-1,null,["\n      "])),(n()(),u._20(-1,null,["\n    "])),(n()(),u._20(-1,null,["\n    "])),(n()(),u.U(16777216,null,null,1,null,t)),u.Y(84,16384,null,0,A.l,[u.I,u.F],{ngIf:[0,"ngIf"]},null),(n()(),u._20(-1,null,["\n  "])),(n()(),u._20(-1,1,["\n  "])),(n()(),u.Z(87,0,null,1,12,"div",[["class","center marginBts"]],null,null,null,null,null)),(n()(),u._20(-1,null,["\n    "])),(n()(),u.Z(89,0,null,null,3,"button",[["class","buttonPayCash borderBtns"],["ion-button",""],["small",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.cancel()&&t}return t},w.b,w.a)),u.Y(90,1097728,null,0,k.a,[[8,""],g.a,u.j,u.z],{small:[0,"small"]},null),(n()(),u._20(91,0,["",""])),u._13(131072,I.a,[Y.a,u.g]),(n()(),u._20(-1,null,["\n    "])),(n()(),u.U(16777216,null,null,1,null,o)),u.Y(95,16384,null,0,A.l,[u.I,u.F],{ngIf:[0,"ngIf"]},null),(n()(),u._20(-1,null,["\n    "])),(n()(),u.U(16777216,null,null,1,null,a)),u.Y(98,16384,null,0,A.l,[u.I,u.F],{ngIf:[0,"ngIf"]},null),(n()(),u._20(-1,null,["\n  "])),(n()(),u._20(-1,1,["\n\n"]))],function(n,e){var l=e.component;n(e,68,0,"");n(e,70,0,n(e,71,0,12));n(e,73,0,"numerocelular",l.user_register.value);n(e,76,0,"number","Número movil (celular)"),n(e,77,0);n(e,84,0,null!=l.response_verify.mail_code||null!=l.response_verify.phone_code);n(e,90,0,"");n(e,95,0,null==l.response_verify.phone_code);n(e,98,0,null!=l.response_verify.phone_code)},function(n,e){var l=e.component;n(e,0,0,u._11(e,1).statusbarPadding,u._11(e,1)._hasRefresher);n(e,11,0,u._21(e,11,0,u._11(e,12).transform("MENSAJE_CODIGO_VERIFICACION1")));n(e,14,0,u._21(e,14,0,u._11(e,15).transform("MENSAJE_CODIGO_VERIFICACION2")));n(e,37,0,l.user_register.flag);n(e,53,0,l.user_register.country_code);n(e,67,0,u._11(e,68).required?"":null,u._11(e,75).ngClassUntouched,u._11(e,75).ngClassTouched,u._11(e,75).ngClassPristine,u._11(e,75).ngClassDirty,u._11(e,75).ngClassValid,u._11(e,75).ngClassInvalid,u._11(e,75).ngClassPending);n(e,91,0,u._21(e,91,0,u._11(e,92).transform("CANCELAR")))})}l.d(e,"a",function(){return q});var u=l(1),i=l(143),s=l(21),c=l(20),g=l(3),d=l(53),p=l(66),f=l(212),h=l(17),_=l(148),m=l(68),y=l(6),b=l(10),v=l(26),P=l(11),C=l(96),w=l(39),k=l(25),I=l(93),Y=l(40),j=l(142),L=l(33),M=l(7),T=l(32),N=l(61),R=l(161),F=l(91),Z=l(90),A=l(15),H=l(150),S=l(16),z=l(97),U=l(51),E=l(94),O=l(92),D=l(65),x=l(59),B=u.X({encapsulation:2,styles:[],data:{}}),q=u.V("page-reg-number-phone",H.a,function(n){return u._22(0,[(n()(),u.Z(0,0,null,null,1,"page-reg-number-phone",[],null,null,null,r,B)),u.Y(1,49152,null,0,H.a,[T.a,S.a,z.a,U.a,E.a,O.a,D.a,x.a],null,null)],null,null)},{},{},[])},400:function(n,e,l){"use strict";function t(n){return a._22(0,[(n()(),a._20(-1,null,["\n    "])),(n()(),a.Z(1,0,null,null,0,"img",[["class","flag"]],[[8,"src",4]],null,null,null,null)),(n()(),a._20(-1,null,["\n    "])),(n()(),a.Z(3,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),a._20(-1,null,["\n  "]))],null,function(n,e){n(e,1,0,a._2(1,"",e.context.attrs.data.flag,""));n(e,3,0,"+"+e.context.attrs.data.callingCodes[0]+" "+e.context.attrs.data.name)})}function o(n){return a._22(0,[a._18(402653184,1,{searchbar:0}),(n()(),a.Z(1,0,null,null,9,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,r.b,r.a)),a.Y(2,4374528,null,0,u.a,[i.a,s.a,c.a,a.j,a.z,g.a,d.a,a.u,[2,p.a],[2,f.a]],null,null),(n()(),a._20(-1,1,["\n  "])),(n()(),a.U(0,[["withFlags",2]],1,0,null,t)),(n()(),a._20(-1,1,["\n  "])),(n()(),a.Z(6,0,null,1,3,"ion-auto-complete",[["item-content",""]],null,[[null,"itemSelected"],["document","click"]],function(n,e,l){var t=!0,o=n.component;if("document:click"===e){t=!1!==a._11(n,8).documentClickHandler(l)&&t}if("itemSelected"===e){t=!1!==o.selectItem(l)&&t}return t},h.b,h.a)),a._16(5120,null,_.l,function(n){return[n]},[m.a]),a.Y(8,8437760,[[1,4],["search",4]],0,m.a,[],{dataProvider:[0,"dataProvider"],options:[1,"options"],showResultsFirst:[2,"showResultsFirst"],template:[3,"template"]},{itemSelected:"itemSelected"}),a._14(9,{placeholder:0}),(n()(),a._20(-1,1,["\n"])),(n()(),a._20(-1,null,["\n"]))],function(n,e){n(e,8,0,e.component.country,n(e,9,0,"Search your country"),!0,a._11(e,4))},function(n,e){n(e,1,0,a._11(e,2).statusbarPadding,a._11(e,2)._hasRefresher)})}l.d(e,"a",function(){return C});var a=l(1),r=l(142),u=l(26),i=l(3),s=l(6),c=l(11),g=l(10),d=l(33),p=l(7),f=l(32),h=l(680),_=l(17),m=l(71),y=l(235),b=l(16),v=l(85),P=a.X({encapsulation:2,styles:[],data:{}}),C=a.V("page-select-code",y.a,function(n){return a._22(0,[(n()(),a.Z(0,0,null,null,1,"page-select-code",[],null,null,null,o,P)),a.Y(1,49152,null,0,y.a,[f.a,b.a,v.a,p.a],null,null)],null,null)},{},{},[])},401:function(n,e,l){"use strict";function t(n){return a._22(0,[a._18(402653184,1,{nav:0}),(n()(),a._20(-1,null,["\n"])),(n()(),a.Z(2,0,null,null,118,"ion-menu",[["role","navigation"]],null,null,null,en.b,en.a)),a._16(6144,null,ln.a,null,[tn.a]),a.Y(4,245760,null,2,tn.a,[on.a,a.j,an.a,rn.a,a.z,un.a,sn.l,cn.a,gn.a],{content:[0,"content"]},null),a._18(335544320,2,{menuContent:0}),a._18(335544320,3,{menuNav:0}),(n()(),a._20(-1,0,["\n  "])),(n()(),a.Z(8,0,null,0,10,"ion-header",[],null,null,null,null,null)),a.Y(9,16384,null,0,dn.a,[an.a,a.j,a.z,[2,pn.a]],null,null),(n()(),a._20(-1,null,["\n    "])),(n()(),a.Z(11,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,fn.b,fn.a)),a.Y(12,49152,null,0,hn.a,[an.a,a.j,a.z],null,null),(n()(),a._20(-1,3,["\n      "])),(n()(),a.Z(14,0,null,3,2,"ion-title",[],null,null,null,_n.b,_n.a)),a.Y(15,49152,null,0,mn.a,[an.a,a.j,a.z,[2,hn.a],[2,yn.a]],null,null),(n()(),a._20(-1,0,["Menu"])),(n()(),a._20(-1,3,["\n    "])),(n()(),a._20(-1,null,["\n  "])),(n()(),a._20(-1,0,["\n\n  "])),(n()(),a.Z(20,0,null,0,99,"ion-content",[["style","background-color: #f5f5f5"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,bn.b,bn.a)),a.Y(21,4374528,[[2,4]],0,vn.a,[an.a,rn.a,cn.a,a.j,a.z,gn.a,un.a,a.u,[2,pn.a],[2,Pn.a]],null,null),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(23,0,null,1,8,"ion-row",[["class","gradient row"]],null,null,null,null,null)),a.Y(24,16384,null,0,Cn.a,[],null,null),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(26,0,null,null,4,"ion-col",[["class","col"]],null,null,null,null,null)),a.Y(27,16384,null,0,wn.a,[],null,null),(n()(),a._20(-1,null,["\n        "])),(n()(),a.Z(29,0,null,null,0,"img",[["alt",""],["src","../assets//imgs/EPCLogo.png"],["style","width: 60%"]],null,null,null,null,null)),(n()(),a._20(-1,null,["\n      "])),(n()(),a._20(-1,null,["\n    "])),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(33,0,null,1,65,"ion-list",[],null,null,null,null,null)),a.Y(34,16384,null,0,kn.a,[an.a,a.j,a.z,rn.a,sn.l,cn.a],null,null),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(36,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openPage("HomePage")&&t}return t},In.b,In.a)),a.Y(37,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,4,{contentLabel:0}),a._18(603979776,5,{_buttons:1}),a._18(603979776,6,{_icons:1}),a.Y(41,16384,null,0,Mn.a,[],null,null),(n()(),a._20(42,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(45,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openPage("TransactionPage")&&t}return t},In.b,In.a)),a.Y(46,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,7,{contentLabel:0}),a._18(603979776,8,{_buttons:1}),a._18(603979776,9,{_icons:1}),a.Y(50,16384,null,0,Mn.a,[],null,null),(n()(),a._20(51,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(54,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openPage("HistoryPage")&&t}return t},In.b,In.a)),a.Y(55,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,10,{contentLabel:0}),a._18(603979776,11,{_buttons:1}),a._18(603979776,12,{_icons:1}),a.Y(59,16384,null,0,Mn.a,[],null,null),(n()(),a._20(60,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(63,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openPage("MapPage")&&t}return t},In.b,In.a)),a.Y(64,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,13,{contentLabel:0}),a._18(603979776,14,{_buttons:1}),a._18(603979776,15,{_icons:1}),a.Y(68,16384,null,0,Mn.a,[],null,null),(n()(),a._20(69,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(72,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openPage("AccountPage")&&t}return t},In.b,In.a)),a.Y(73,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,16,{contentLabel:0}),a._18(603979776,17,{_buttons:1}),a._18(603979776,18,{_icons:1}),a.Y(77,16384,null,0,Mn.a,[],null,null),(n()(),a._20(78,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(81,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openPage("SecurityPage")&&t}return t},In.b,In.a)),a.Y(82,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,19,{contentLabel:0}),a._18(603979776,20,{_buttons:1}),a._18(603979776,21,{_icons:1}),a.Y(86,16384,null,0,Mn.a,[],null,null),(n()(),a._20(87,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(90,0,null,null,7,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.cerrarSesion()&&t}return t},In.b,In.a)),a.Y(91,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,22,{contentLabel:0}),a._18(603979776,23,{_buttons:1}),a._18(603979776,24,{_icons:1}),a.Y(95,16384,null,0,Mn.a,[],null,null),(n()(),a._20(96,2,["",""])),a._13(131072,Tn.a,[Nn.a,a.g]),(n()(),a._20(-1,null,["\n    "])),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(100,0,null,1,18,"ion-list",[["style","text-align: center"]],null,null,null,null,null)),a.Y(101,16384,null,0,kn.a,[an.a,a.j,a.z,rn.a,sn.l,cn.a],null,null),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(103,0,null,null,14,"ion-item",[["class","center item item-block"],["style","background: transparent; border-top: 0px solid #c8c7cc !important; border-bottom: 0px solid #c8c7cc !important;"]],null,null,null,In.b,In.a)),a.Y(104,1097728,null,3,Yn.a,[jn.a,an.a,a.j,a.z,[2,Ln.a]],null,null),a._18(335544320,25,{contentLabel:0}),a._18(603979776,26,{_buttons:1}),a._18(603979776,27,{_icons:1}),a.Y(108,16384,null,0,Mn.a,[],null,null),(n()(),a._20(-1,2,["\n        "])),(n()(),a.Z(110,0,null,2,2,"button",[["class","buttonPayCash"],["ion-button",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.seleccionar("es")&&t}return t},Rn.b,Rn.a)),a.Y(111,1097728,[[26,4]],0,Fn.a,[[8,""],an.a,a.j,a.z],null,null),(n()(),a._20(-1,0,["Español"])),(n()(),a._20(-1,2,["\n        "])),(n()(),a.Z(114,0,null,2,2,"button",[["class","buttonPayCash"],["ion-button",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.seleccionar("en")&&t}return t},Rn.b,Rn.a)),a.Y(115,1097728,[[26,4]],0,Fn.a,[[8,""],an.a,a.j,a.z],null,null),(n()(),a._20(-1,0,["English"])),(n()(),a._20(-1,2,["\n      "])),(n()(),a._20(-1,null,["\n    "])),(n()(),a._20(-1,1,["\n  "])),(n()(),a._20(-1,0,["\n\n"])),(n()(),a._20(-1,null,["\n"])),(n()(),a.Z(122,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],null,null,null,Zn.b,Zn.a)),a._16(6144,null,ln.a,null,[An.a]),a.Y(124,4374528,[[1,4],["content",4]],0,An.a,[[2,pn.a],[2,Pn.a],gn.a,an.a,rn.a,a.j,a.u,a.z,a.i,sn.l,Hn.a,[2,Sn.a],cn.a,a.k],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),(n()(),a._20(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,4,0,a._11(e,124));n(e,124,0,"false",l.rootPage)},function(n,e){n(e,11,0,a._11(e,12)._sbPadding);n(e,20,0,a._11(e,21).statusbarPadding,a._11(e,21)._hasRefresher);n(e,42,0,a._21(e,42,0,a._11(e,43).transform("INICIO")));n(e,51,0,a._21(e,51,0,a._11(e,52).transform("TRANSACCION")));n(e,60,0,a._21(e,60,0,a._11(e,61).transform("HISTORIAL")));n(e,69,0,a._21(e,69,0,a._11(e,70).transform("MAPA")));n(e,78,0,a._21(e,78,0,a._11(e,79).transform("MI_CUENTA")));n(e,87,0,a._21(e,87,0,a._11(e,88).transform("SEGURIDAD")));n(e,96,0,a._21(e,96,0,a._11(e,97).transform("CERRAR_SESION")))})}Object.defineProperty(e,"__esModule",{value:!0});var o=l(54),a=l(1),r=(l(0),l(31),l(69)),u=l(140),i=l(65),s=l(58),c=l(100),g=l(101),d=l(64),p=l(102),f=l(98),h=function(){function n(n,e,l,t,o,a,r,u,i,s,c){var g=this;this.locationProvider=t,this.auth=o,this.informationProvider=a,this.langProvider=r,this.menuCtrl=u,this.storage=i,this.networkProvider=c,this.rootPage="RegisterPage",this.seleccionar("es"),this.langProvider.verifyIsLanguage()?(this.langProvider.setLenguage(),this.rootPage="LoginPage"):this.rootPage="LoginPage",o.trylogin()&&(this.langProvider.setLenguage(),this.rootPage="LoginPage",this.informationProvider.init(),this.getInfo(),console.log("imagen",this.avatar)),n.ready().then(function(){s.init(),g.networkProvider.networkState()})}return n.prototype.getInfo=function(){this.avatar=this.auth.user_Info.url_img},n.prototype.getLocation=function(){},n.prototype.openPage=function(n){this.nav.setPages([{page:"HomePage"},{page:n}]),this.menuCtrl.toggle()},n.prototype.cerrarSesion=function(){window.localStorage.clear(),this.storage.remove("user"),this.storage.clear(),this.menuCtrl.toggle(),this.nav.setRoot("LoginPage")},n.prototype.seleccionar=function(n){this.langProvider.seleccionar(n),this.langProvider.setLenguage()},n}(),_=l(85),m=l(234),y=l(29),b=l(51),v=l(99),P=l(103),C=l(233),w=function(){function n(n,e,l,t){this.http=n,this.toastCtrl=e,this.loadingCtrl=l,this.api=t,this.response_verify={id:null,is_mail_verify:null,mail_code:null,phone_code:null,country_id:null},this.infoPhone={country_code:"",flag:"",value:""}}return n.prototype.sendNumberPhone=function(){var n=this;this.api.post("auth/pre-sign-up",this.infoPhone).then(function(e){return n.response_verify=e.verify,n.response_verify.country_id=e.country.id,console.log(n.response_verify.phone_code),n.response_verify}).catch(function(n){console.log(n)})},n}(),k=l(224),I=l(217),Y=l(229),j=l(221),L=l(222),M=l(15),T=l(227),N=l(681),R=l(89),F=l(59),Z=l(149),A=l(202),H=l(230),S=l(194),z=l(228),U=l(195),E=function(){return function(n){this.http=n,console.log("Hello VozProvider Provider")}}(),O=function(n){return new N.a(n,"./assets/i18n/",".json")},D=function(){return function(){}}(),x=l(74),B=l(203),q=l(204),V=l(205),G=l(206),W=l(207),J=l(208),X=l(209),K=l(210),Q=l(211),$=l(400),nn=l(398),en=l(682),ln=l(49),tn=l(119),on=l(36),an=l(3),rn=l(6),un=l(33),sn=l(12),cn=l(11),gn=l(10),dn=l(144),pn=l(7),fn=l(396),hn=l(52),_n=l(395),mn=l(95),yn=l(50),bn=l(142),vn=l(26),Pn=l(32),Cn=l(91),wn=l(90),kn=l(67),In=l(143),Yn=l(21),jn=l(20),Ln=l(53),Mn=l(66),Tn=l(93),Nn=l(40),Rn=l(39),Fn=l(25),Zn=l(683),An=l(79),Hn=l(47),Sn=l(27),zn=a.X({encapsulation:2,styles:[],data:{}}),Un=a.V("ng-component",h,function(n){return a._22(0,[(n()(),a.Z(0,0,null,null,1,"ng-component",[],null,null,null,t,zn)),a.Y(1,49152,null,0,h,[rn.a,u.a,r.a,i.a,s.a,c.a,g.a,on.a,d.b,p.a,f.a],null,null)],null,null)},{},{},[]),En=l(178),On=l(17),Dn=l(96),xn=l(157),Bn=l(146),qn=l(177),Vn=l(42),Gn=l(92),Wn=l(141),Jn=l(76),Xn=l(57),Kn=l(97),Qn=l(114),$n=l(184),ne=l(180),ee=l(94),le=l(121),te=l(123),oe=l(125),ae=l(124),re=l(176),ue=l(394),ie=l(179),se=l(166),ce=l(181),ge=l(71),de=l(218),pe=l(150),fe=a.W(D,[x.b],function(n){return a._7([a._8(512,a.i,a.S,[[8,[B.a,q.a,V.a,G.a,W.a,J.a,X.a,K.a,Q.a,$.a,nn.a,Un]],[3,a.i],a.s]),a._8(5120,a.r,a._17,[[3,a.r]]),a._8(4608,M.n,M.m,[a.r,[2,M.x]]),a._8(5120,a.b,a._1,[]),a._8(5120,a.p,a._9,[]),a._8(5120,a.q,a._12,[]),a._8(4608,o.c,o.q,[M.d]),a._8(6144,a.D,null,[o.c]),a._8(4608,o.f,En.a,[]),a._8(5120,o.d,function(n,e,l,t,a){return[new o.k(n,e),new o.o(l),new o.n(t,a)]},[M.d,a.u,M.d,M.d,o.f]),a._8(4608,o.e,o.e,[o.d,a.u]),a._8(135680,o.m,o.m,[M.d]),a._8(4608,o.l,o.l,[o.e,o.m]),a._8(6144,a.B,null,[o.l]),a._8(6144,o.p,null,[o.m]),a._8(4608,a.G,a.G,[a.u]),a._8(4608,o.h,o.h,[M.d]),a._8(4608,o.i,o.i,[M.d]),a._8(4608,y.i,y.o,[M.d,a.w,y.m]),a._8(4608,y.p,y.p,[y.i,y.n]),a._8(5120,y.a,function(n){return[n]},[y.p]),a._8(4608,y.l,y.l,[]),a._8(6144,y.j,null,[y.l]),a._8(4608,y.h,y.h,[y.j]),a._8(6144,y.b,null,[y.h]),a._8(4608,y.f,y.k,[y.b,a.o]),a._8(4608,y.c,y.c,[y.f]),a._8(4608,On.v,On.v,[]),a._8(4608,On.d,On.d,[]),a._8(4608,Dn.a,Dn.a,[]),a._8(4608,P.a,P.a,[]),a._8(4608,v.a,v.a,[]),a._8(4608,xn.a,xn.a,[gn.a,an.a]),a._8(4608,Bn.a,Bn.a,[gn.a,an.a]),a._8(4608,qn.a,qn.a,[]),a._8(4608,jn.a,jn.a,[]),a._8(4608,Vn.a,Vn.a,[rn.a]),a._8(4608,un.a,un.a,[an.a,rn.a,a.u,cn.a]),a._8(4608,Gn.a,Gn.a,[gn.a,an.a]),a._8(5120,M.i,Wn.c,[M.u,[2,M.a],an.a]),a._8(4608,M.h,M.h,[M.i]),a._8(5120,Jn.b,Jn.d,[gn.a,Jn.a]),a._8(5120,Sn.a,Sn.b,[gn.a,Jn.b,M.h,Xn.b,a.i]),a._8(4608,Kn.a,Kn.a,[gn.a,an.a,Sn.a]),a._8(4608,Qn.a,Qn.a,[gn.a,an.a]),a._8(4608,$n.a,$n.a,[gn.a,an.a,Sn.a]),a._8(4608,ne.a,ne.a,[an.a,rn.a,cn.a,gn.a,sn.l]),a._8(4608,ee.a,ee.a,[gn.a,an.a]),a._8(4608,Hn.a,Hn.a,[rn.a,an.a]),a._8(5120,d.b,d.d,[d.c]),a._8(5120,le.b,O,[y.c]),a._8(4608,te.a,te.b,[]),a._8(4608,oe.b,oe.a,[]),a._8(4608,ae.b,ae.a,[]),a._8(4608,re.a,re.a,[]),a._8(4608,Nn.a,Nn.a,[re.a,le.b,te.a,oe.b,ae.b,Nn.b,Nn.c]),a._8(4608,u.a,u.a,[]),a._8(4608,r.a,r.a,[]),a._8(4608,_.a,_.a,[y.c]),a._8(4608,F.a,F.a,[y.c,Kn.a]),a._8(4608,b.a,b.a,[y.c,d.b,F.a,gn.a]),a._8(4608,i.a,i.a,[y.c,v.a,P.a,_.a]),a._8(4608,s.a,s.a,[b.a,ee.a,F.a,d.b]),a._8(4608,w,w,[y.c,ee.a,Gn.a,b.a]),a._8(4608,c.a,c.a,[y.c,s.a,b.a]),a._8(4608,k.b,k.b,[]),a._8(4608,I.a,I.a,[]),a._8(4608,Y.a,Y.a,[]),a._8(4608,j.a,j.a,[]),a._8(4608,L.a,L.a,[y.c]),a._8(4608,M.c,M.c,[a.r]),a._8(4608,T.a,T.a,[]),a._8(4608,g.a,g.a,[y.c,Nn.a]),a._8(4608,Z.a,Z.a,[]),a._8(4608,p.a,p.a,[y.c,Z.a,Kn.a,rn.a,r.a,gn.a,s.a]),a._8(4608,A.a,A.a,[]),a._8(4608,H.a,H.a,[A.a]),a._8(4608,S.a,S.a,[]),a._8(4608,z.a,z.a,[y.c,S.a]),a._8(4608,U.a,U.a,[]),a._8(4608,f.a,f.a,[y.c,U.a,qn.a,Bn.a,ee.a]),a._8(4608,E,E,[y.c]),a._8(512,M.b,M.b,[]),a._8(512,a.k,ue.a,[]),a._8(256,an.b,{},[]),a._8(1024,ie.a,ie.b,[]),a._8(1024,rn.a,rn.b,[o.b,ie.a,a.u]),a._8(1024,an.a,an.c,[an.b,rn.a]),a._8(512,cn.a,cn.a,[rn.a]),a._8(512,on.a,on.a,[]),a._8(512,gn.a,gn.a,[an.a,rn.a,[2,on.a]]),a._8(512,sn.l,sn.l,[gn.a]),a._8(256,Jn.a,{links:[{loadChildren:"../pages/coins/coins.module.ngfactory#CoinsPageModuleNgFactory",name:"CoinsPage",segment:"coins",priority:"low",defaultHistory:[]},{loadChildren:"../pages/contacts/contacts.module.ngfactory#ContactsPageModuleNgFactory",name:"ContactsPage",segment:"contacts",priority:"low",defaultHistory:[]},{loadChildren:"../pages/history-resume/history-resume.module.ngfactory#HistoryResumePageModuleNgFactory",name:"HistoryResumePage",segment:"history-resume",priority:"low",defaultHistory:[]},{loadChildren:"../pages/history/history.module.ngfactory#HistoryPageModuleNgFactory",name:"HistoryPage",segment:"history",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"app",priority:"low",defaultHistory:[]},{loadChildren:"../pages/language/language.module.ngfactory#LanguagePageModuleNgFactory",name:"LanguagePage",segment:"language",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/map/map.module.ngfactory#MapPageModuleNgFactory",name:"MapPage",segment:"map",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal-error/modal-error.module.ngfactory#ModalErrorPageModuleNgFactory",name:"ModalErrorPage",segment:"modal-error",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal-transaction/modal-transaction.module.ngfactory#ModalTransactionPageModuleNgFactory",name:"ModalTransactionPage",segment:"modal-transaction",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal-welcome/modal-welcome.module.ngfactory#ModalWelcomePageModuleNgFactory",name:"ModalWelcomePage",segment:"modal-welcome",priority:"low",defaultHistory:[]},{loadChildren:"../pages/password-update/password-update.module.ngfactory#PasswordUpdatePageModuleNgFactory",name:"PasswordUpdatePage",segment:"password-update",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/recovery-password/recovery-password.module.ngfactory#RecoveryPasswordPageModuleNgFactory",name:"RecoveryPasswordPage",segment:"recovery-password",priority:"low",defaultHistory:[]},{loadChildren:"../pages/reg-number-phone/reg-number-phone.module.ngfactory#RegNumberPhonePageModuleNgFactory",name:"RegNumberPhonePage",segment:"reg-number-phone",priority:"low",defaultHistory:[]},{loadChildren:"../pages/register/register.module.ngfactory#RegisterPageModuleNgFactory",name:"RegisterPage",segment:"register",priority:"low",defaultHistory:[]},{loadChildren:"../pages/select-code/select-code.module.ngfactory#SelectCodePageModuleNgFactory",name:"SelectCodePage",segment:"select-code",priority:"low",defaultHistory:[]},{loadChildren:"../pages/touch-login/touch-login.module.ngfactory#TouchLoginPageModuleNgFactory",name:"TouchLoginPage",segment:"touch-login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/update-acount/update-acount.module.ngfactory#UpdateAcountPageModuleNgFactory",name:"UpdateAcountPage",segment:"update-acount",priority:"low",defaultHistory:[]},{loadChildren:"../pages/transaction/transaction.module.ngfactory#TransactionPageModuleNgFactory",name:"TransactionPage",segment:"transaction",priority:"low",defaultHistory:[]},{loadChildren:"../pages/transaction-resume/transaction-resume.module.ngfactory#TransactionResumePageModuleNgFactory",name:"TransactionResumePage",segment:"transaction-resume",priority:"low",defaultHistory:[]},{loadChildren:"../pages/account/account.module.ngfactory#AccountPageModuleNgFactory",name:"AccountPage",segment:"account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/security/security.module.ngfactory#SecurityPageModuleNgFactory",name:"SecurityPage",segment:"security",priority:"low",defaultHistory:[]},{loadChildren:"../pages/politicas/politicas.module.ngfactory#PoliticasPageModuleNgFactory",name:"PoliticasPage",segment:"politicas",priority:"low",defaultHistory:[]}]},[]),a._8(512,a.h,a.h,[]),a._8(512,se.a,se.a,[a.h]),a._8(1024,Xn.b,Xn.c,[se.a,a.o]),a._8(1024,a.c,function(n,e,l,t,a,r,u,i,s,c,g,d,p){return[o.s(n),ce.a(e),qn.b(l,t),ne.b(a,r,u,i,s),Xn.d(c,g,d,p)]},[[2,a.t],an.a,rn.a,cn.a,an.a,rn.a,cn.a,gn.a,sn.l,an.a,Jn.a,Xn.b,a.u]),a._8(512,a.d,a.d,[[2,a.c]]),a._8(131584,a.f,a.f,[a.u,a.T,a.o,a.k,a.i,a.d]),a._8(512,a.e,a.e,[a.f]),a._8(512,o.a,o.a,[[3,o.a]]),a._8(512,y.e,y.e,[]),a._8(512,y.d,y.d,[]),a._8(512,On.t,On.t,[]),a._8(512,On.i,On.i,[]),a._8(512,On.q,On.q,[]),a._8(512,Wn.a,Wn.a,[]),a._8(512,d.a,d.a,[]),a._8(512,Wn.b,Wn.b,[]),a._8(512,ge.b,ge.b,[]),a._8(512,m.a,m.a,[]),a._8(512,R.a,R.a,[]),a._8(512,de.a,de.a,[]),a._8(512,C.a,C.a,[]),a._8(512,D,D,[]),a._8(256,y.m,"XSRF-TOKEN",[]),a._8(256,y.n,"X-XSRF-TOKEN",[]),a._8(256,Xn.a,pe.a,[]),a._8(256,x.a,h,[]),a._8(256,M.a,"/",[]),a._8(256,d.c,null,[]),a._8(256,Nn.c,void 0,[]),a._8(256,Nn.b,void 0,[])])});Object(a.M)(),Object(o.j)().bootstrapModuleFactory(fe)},51:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(0);var t=l(29),o=(l(59),l(4)),a=(l(31),function(){function n(n,e,l,o){this.http=n,this.storage=e,this.errorProvider=l,this.app=o,this.url="http://globalone2onemarketing.com/frontend/web/apiapp/",this.headers=new t.g({"Content-Type":"application/x-www-form-urlencoded"})}return n.prototype.get=function(n,e,l){var a=this;return null!=e&&(this.headers=new t.g({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+e.accessParam()})),new Promise(function(e,t){var r=a.url+n,u="";l&&(u=a.jsonToURLEncoded(l)),a.http.get(r+"?"+u,{headers:a.headers}).toPromise().then(function(n){e(n)}).catch(function(n){Object(o.e)(!n.error)&&"Unauthorized"==n.error.name&&(a.goHome(),a.errorProvider.obj.message="Upps!! El usuario no tiene permisos",a.errorProvider.presentModal())})})},n.prototype.post=function(n,e,l){var a=this,r=this.url+n;return null!=l&&(this.headers=new t.g({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+l.accessParam()})),this.http.post(r,this.jsonToURLEncoded(e),{headers:this.headers}).toPromise().catch(function(n){Object(o.e)(!n.error)&&"Unauthorized"==n.error.name&&(a.goHome(),a.errorProvider.obj.message="Upps!! El usuario no tiene permisos",a.errorProvider.presentModal())})},n.prototype.jsonToURLEncoded=function(n){return Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&")},n.prototype.goHome=function(){this.app.getActiveNavs()[0].setRoot("LoginPage")},n}())},58:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(51),l(31),l(59);var t=function(){function n(n,e,l,t){this.api=n,this.toastCtrl=e,this.errorProvider=l,this.storage=t,this.user_Info={first_name:null,last_name:null,phone:null,access_token:null,is_active:null,gender:null,mail:null,url_img:null},this.user_Country={id:null,name:null,is_active:null,phone_code:null,country_code:null,currency:null},this.User_Verify={id:null,phone_code:null,is_phone_verify:null,mail_code:null,is_mail_verify:null,phone:null,mail:null,user_id:null},this.userRecovery={user_id:null,codigoVerify:null},this.check_terminos=!1,this.trylogin()}return n.prototype.login=function(n,e){var l=this;return new Promise(function(t,o){l.api.post("auth/login?expand=country,userVerify",{mail:n,password:e}).then(function(n){"ok"==n.success?(l.setUser(n.user),l.setActivo(l.user_Info.is_active),l.setUserCountry(n.user.country),l.setUserVerify(n.user.userVerify),t(n)):(l.errorProvider.obj.message="Usuario o contraseña incorrectos",l.errorProvider.presentModal())}).catch(function(n){return o(n)})})},n.prototype.isLogin=function(){return null!=this.user_Info},n.prototype.trylogin=function(){var n=this;this.storage.get("user").then(function(e){return n.user_Info=JSON.parse(e),null!=n.user_Info&&(n.setUserCountry(n.user_Info.country),n.setUserVerify(n.user_Info.userVerify)),!0}).catch(function(n){console.log(n)})},n.prototype.accessParam=function(){return null!=this.user_Info?this.user_Info.access_token:null},n.prototype.setUser=function(n){this.user_Info=n,this.storage.set("user",JSON.stringify(this.user_Info))},n.prototype.setUserCountry=function(n){this.user_Country=n},n.prototype.setUserVerify=function(n){this.User_Verify=n},n.prototype.setUserRecovery=function(n){this.userRecovery=n},n.prototype.setTokenNotification=function(n){this.tokenAppId=n},n.prototype.registerTokenForUser=function(n){this.api.post("auth/tokenapp",{token:this.tokenAppId,id:n}).then().catch()},n.prototype.setCheck_Terminos=function(n){this.check_terminos=n},n.prototype.setActivo=function(n){0==n?n=!1:1==n&&(n=!0),this.isActivo=n},n}()},59:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(31);var t=function(){function n(n,e){this.http=n,this.modalCtrl=e,this.cambiarFoto=!1,this.obj={field:null,icon:null,message:null}}return n.prototype.presentModal=function(){this.obj.icon=0==this.cambiarFoto?"../assets/imgs/error.png":"../assets/img/ok.png";this.modalCtrl.create("ModalErrorPage",{Error:this.obj}).present()},n}()},65:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(99),l(85),l(103);var t=function(){function n(n,e,l,t){this.http=n,this.geoCtrl=e,this.geocode=l,this.countryProvider=t,this.basicInformacion={country_code:null,flag:null},this.fullInformation=null,this.load=!1,this.getInformation(),this.getBasicInfo()}return n.prototype.getInformation=function(){var n=this;return new Promise(function(e,l){n.load?e(!0):n.geoCtrl.getCurrentPosition({enableHighAccuracy:!1,timeout:1e4}).then(function(l){n.geocode.reverseGeocode(l.coords.latitude,l.coords.longitude).then(function(l){if(n.countryProvider.getResults(l[0].countryName).length){var t=n.countryProvider.getResults(l[0].countryName)[0];n.fullInformation=t,n.basicInformacion.country_code=t.callingCodes[0],n.basicInformacion.flag=t.flag,n.load=!0,e(!0)}}).catch(function(n){return console.log("reversegeocode",n)})}).catch(function(n){return console.log("getcurrentposition",n)})})},n.prototype.getBasicInfo=function(){var n=this;return new Promise(function(e){n.getInformation().then(function(){e(n.basicInformacion)})})},n}()},85:function(n,e,l){"use strict";l.d(e,"a",function(){return o});l(0);var t=l(171),o=(l.n(t),function(){function n(n){this.http=n,this.labelAttribute="name",this.countries=[],this.init()}return n.prototype.init=function(){var n=this;this.countries.length||this.http.get("assets/countries.json").toPromise().then(function(e){n.countries=e})},n.prototype.getResults=function(n){return""==n?this.countries:this.countries.filter(function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())})},n}())},98:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(0),l(31),l(195);var t=function(){function n(n,e,l,t,o){this.http=n,this.network=e,this.eventCtrl=l,this.alertCtrl=t,this.toastCtrl=o,this.buttonDisabled=!1,this.networkState(),this.connected.unsubscribe(),this.disconnected.unsubscribe()}return n.prototype.displayNetworkUpdate=function(n){var e=this.network.type;"none"!=this.network.type?(this.buttonDisabled=!1,this.toastCtrl.create({message:"You are now "+n+" via "+e,duration:3e3}).present()):(this.buttonDisabled=!0,this.toastCtrl.create({message:"no connection, please, turn on your connection internet",showCloseButton:!0}).present())},n.prototype.networkState=function(){var n=this;this.connected=this.network.onConnect().subscribe(function(e){console.log("conectado",e),n.displayNetworkUpdate(e.type)},function(n){return console.error(n)}),this.disconnected=this.network.onDisconnect().subscribe(function(e){console.log("no conectado",e),n.displayNetworkUpdate(e.type),setTimeout(function(){console.log("conexion")},3e3)},function(n){return console.error(n)})},n}()}},[401]);
=======
webpackJsonp([22],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LenguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadInformationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(48);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchLoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
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
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], TouchLoginProvider);
    return TouchLoginProvider;
}());

//# sourceMappingURL=touch-login.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		738,
		0
	],
	"../pages/coins/coins.module": [
		718,
		21
	],
	"../pages/contacts/contacts.module": [
		719,
		20
	],
	"../pages/history-resume/history-resume.module": [
		720,
		19
	],
	"../pages/history/history.module": [
		722,
		18
	],
	"../pages/home/home.module": [
		721,
		17
	],
	"../pages/language/language.module": [
		723,
		16
	],
	"../pages/login/login.module": [
		724,
		5
	],
	"../pages/map/map.module": [
		725,
		6
	],
	"../pages/modal-error/modal-error.module": [
		726,
		15
	],
	"../pages/modal-transaction/modal-transaction.module": [
		727,
		14
	],
	"../pages/modal-welcome/modal-welcome.module": [
		728,
		13
	],
	"../pages/password-update/password-update.module": [
		729,
		4
	],
	"../pages/politicas/politicas.module": [
		739,
		12
	],
	"../pages/profile/profile.module": [
		730,
		11
	],
	"../pages/recovery-password/recovery-password.module": [
		731,
		3
	],
	"../pages/reg-number-phone/reg-number-phone.module": [
		253
	],
	"../pages/register/register.module": [
		732,
		2
	],
	"../pages/security/security.module": [
		733,
		1
	],
	"../pages/select-code/select-code.module": [
		254
	],
	"../pages/touch-login/touch-login.module": [
		734,
		10
	],
	"../pages/transaction-resume/transaction-resume.module": [
		735,
		9
	],
	"../pages/transaction/transaction.module": [
		736,
		8
	],
	"../pages/update-acount/update-acount.module": [
		737,
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegNumberPhonePageModule", function() { return RegNumberPhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_number_phone__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__ = __webpack_require__(382);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reg_number_phone__["a" /* RegNumberPhonePage */]),
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCodePageModule", function() { return SelectCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_code__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(255);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_code__["a" /* SelectCodePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["b" /* AutoCompleteModule */],
            ],
        })
    ], SelectCodePageModule);
    return SelectCodePageModule;
}());

//# sourceMappingURL=select-code.module.js.map

/***/ }),

/***/ 381:
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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSharingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(248);
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

/***/ 388:
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

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(340);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_country_country__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_code_select_code_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_geolocation_geolocation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reg_number_phone_reg_number_phone_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_verification_verification__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_load_information_load_information__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_validation_validation__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_formatter_date_formatter_date__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_clipboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_map_map__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_contacts__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ngx_translate_http_loader__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_lenguage_lenguage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_fingerprint_aio__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_touch_login_touch_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_camera_camera__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_social_sharing__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_social_sharing_social_sharing__ = __webpack_require__(387);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/coins/coins.module#CoinsPageModule', name: 'CoinsPage', segment: 'coins', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history-resume/history-resume.module#HistoryResumePageModule', name: 'HistoryResumePage', segment: 'history-resume', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'app', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
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
                        { loadChildren: '../pages/security/security.module#SecurityPageModule', name: 'SecurityPage', segment: 'security', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-code/select-code.module#SelectCodePageModule', name: 'SelectCodePage', segment: 'select-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/touch-login/touch-login.module#TouchLoginPageModule', name: 'TouchLoginPage', segment: 'touch-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-resume/transaction-resume.module#TransactionResumePageModule', name: 'TransactionResumePage', segment: 'transaction-resume', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-acount/update-acount.module#UpdateAcountPageModule', name: 'UpdateAcountPage', segment: 'update-acount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */], },
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
                __WEBPACK_IMPORTED_MODULE_34__providers_social_sharing_social_sharing__["a" /* SocialSharingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegNumberPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(48);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_modal_error_modal_error__["a" /* ModalErrorProvider */]])
    ], RegNumberPhonePage);
    return RegNumberPhonePage;
}());

//# sourceMappingURL=reg-number-phone.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_country__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(255);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_country_country__["a" /* CountryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], SelectCodePage);
    return SelectCodePage;
}());

//# sourceMappingURL=select-code.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(82);
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
        this.url = 'http://globalone2onemarketing.com/frontend/web/apiapp/';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_error_modal_error__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(82);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]])
    ], ModalErrorProvider);
    return ModalErrorProvider;
}());

//# sourceMappingURL=modal-error.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_load_information_load_information__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_lenguage_lenguage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_touch_login_touch_login__ = __webpack_require__(171);
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
    function MyApp(platform, statusBar, splashScreen, locationProvider, auth, informationProvider, langProvider, menuCtrl, storage, loockScreen) {
        var _this = this;
        this.locationProvider = locationProvider;
        this.auth = auth;
        this.informationProvider = informationProvider;
        this.langProvider = langProvider;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
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
            statusBar.styleDefault();
            if (platform.is('cordova'))
                _this.getLocation();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background-color: #f5f5f5">\n    <ion-row class="gradient">\n      <ion-col>\n        <img style="width: 60%" src="assets/imgs/EPCLogo.png" alt="">\n      </ion-col>\n    </ion-row>\n    <ion-list>\n      <button ion-item (click)="openPage(\'HomePage\')">{{\'INICIO\'|translate}}</button>\n      <button ion-item (click)="openPage(\'TransactionPage\')">{{\'TRANSACCION\'|translate}}</button>\n      <button ion-item (click)="openPage(\'HistoryPage\')">{{\'HISTORIAL\'|translate}}</button>\n      <button ion-item (click)="openPage(\'MapPage\')">{{\'MAPA\'|translate}}</button>\n      <button ion-item (click)="openPage(\'AccountPage\')">{{\'MI_CUENTA\'|translate}}</button>\n      <button ion-item (click)="openPage(\'SecurityPage\')">{{\'SEGURIDAD\'|translate}}</button>\n      <button ion-item (click)="cerrarSesion()">{{\'CERRAR_SESION\'|translate}}</button>\n    </ion-list>\n    <ion-list style="text-align: center">\n      <ion-item class="center" style="background: transparent; border-top: 0px solid #c8c7cc !important; border-bottom: 0px solid #c8c7cc !important;">\n        <button ion-button  (click)="seleccionar(\'es\')" class="buttonPayCash">Español</button>\n        <button ion-button  (click)="seleccionar(\'en\')" class="buttonPayCash">English</button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/eyeline/Documents/GitHub/eyepaycashapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_user_auth_user__["a" /* AuthUserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_load_information_load_information__["a" /* LoadInformationProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_lenguage_lenguage__["a" /* LenguageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_touch_login_touch_login__["a" /* TouchLoginProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(48);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
    ], VerificationProvider);
    return VerificationProvider;
}());

//# sourceMappingURL=verification.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map
>>>>>>> 4a55f90fa4fc064d9270454e1920be4559831bc6
