webpackJsonp([1],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsPageModule", function() { return PoliticsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__politics__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PoliticsPageModule = /** @class */ (function () {
    function PoliticsPageModule() {
    }
    PoliticsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__politics__["a" /* PoliticsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__politics__["a" /* PoliticsPage */]),
            ],
        })
    ], PoliticsPageModule);
    return PoliticsPageModule;
}());

//# sourceMappingURL=politics.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoliticsPage = /** @class */ (function () {
    function PoliticsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    PoliticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoliticsPage');
    };
    PoliticsPage.prototype.presentToast = function () {
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
    PoliticsPage.prototype.presentToast2 = function () {
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
    PoliticsPage.prototype.presentToast3 = function () {
        var toast = this.toastCtrl.create({
            message: 'El costo y tiempo de realizar transacciones a través de la red fluctúa constantemente; dado que el costo de procesar las transacciones entrantes y salientes cambia contínuamente, recomendamos que siempre verifique esta información. Eyewallet no se hace responsable del tiempo y costo de las comisiones cobradas por la minería de criptomoneda inherente a cualquier tipo de transacción o tipología transaccional en la que haya cualquier cantidad de criptomonedas implicadas, esta nota también aplica para el servicio de Exchange, Bóveda, las transacciones salientes y entrantes contenidas en los términos de servicios pagados.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PoliticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-politics',template:/*ion-inline-start:"/Users/santiago/eyepaycash/src/pages/politics/politics.html"*/'<ion-content class="imgBackground">\n  <div padding>\n    <div style="background:white; border-radius:8px; padding: 2%">\n      <p class="Titles"> Términos de Uso de EyePayCash.</p>\n      <a class="textNomral">Por favor lea estos términos de uso cuidadosamente, al hacer clic en aceptar, acceder o\n        utilizar nuestros servicios, se compromete a respetar estos términos de uso y todos los términos incorporados\n        por referencia.Si está aceptando estos términos en nombre de una entidad, usted confirma que está autorizado en\n        nombre de esa entidad para aceptar y sujetarse a estos términos de uso y a todos los términos incorporados por\n        referencia.</a>\n\n      <p class="Titles"> Alcance.\n      </p>\n      <a class="textNomral">Estos términos de uso se refieren a nosotros como <b>“EyePayCash” </b>ó <b>“nosotros“</b>.\n        <b>EyePayCash</b> es\n        una compañía constituida bajo las leyes de Malta Europa. Estos términos se aplican a cualquier acceso, uso de\n        nuestro sitio web en https://eyepaycash.co, nuestros servicios en línea, nuestras aplicaciones móviles para\n        iOS\n        e Android, y/o cualquiera de nuestros servicios relacionados.\n\n        La República de Malta (en maltés: Repubblika ta’ Malta; en inglés: Republic of Malta) es un país insular\n        miembro de la Unión Europea, densamente poblado, compuesto por un archipiélago y situado en el centro del\n        Mediterráneo, al sur de Italia, al oriente de Túnez y al norte de Libia.</a>\n      <br><br>\n      <a class="textNomral">La República de Malta (en maltés: Repubblika ta’ Malta; en inglés: Republic of Malta) es un\n        país insular\n        miembro de la Unión Europea, densamente poblado, compuesto por un archipiélago y situado en el centro del\n        Mediterráneo, al sur de Italia, al oriente de Túnez y al norte de Libia.</a>\n      <br><br>\n      <a (click)="presentToast()" style="font-weight: bold">ELEGIBILIDAD Y ACUERDO.</a> <br>\n      <br>\n      <a (click)="presentToast2()" style="font-weight: bold">CAMBIOS EN ESTOS TÉRMINOS.</a>\n      <br>\n      <br>\n      <a (click)="presentToast3()" style="font-weight: bold">NOTA ACLARATORIA.</a>\n      <br><br>\n      <p class="Titles"> Los servicios de EyePayCash.\n      </p>\n      <a class="textNomral"> <b>EyePayCash </b>proporciona una forma de almacenar, usar y administrar\n        criptomonedas:</a>\n      <br>\n      <b>MONEDERO VIRTUAL: EyePayCash</b> es una billetera virtual basada en criptomonedas donde puede\n      enviar, recibir y\n      cambiar su dinero y criptomonedas de manera segura.\n      <br>\n      <b>BÓVEDA</b><a class="textNomral">: servicio de almacenamiento y de rentas fijas. Lo contenido\n        en el siguiente link\n        https://eyepaycash.com/boveda/ hace parte de estos términos y condiciones.</a>\n      <br><br>\n      <a class="textNomral"> -El Monto mínimo de de ingreso a la <b>Bóveda</b> es de 0.01 BTC.</a>\n      <br><br>\n      <a class="textNomral"> -Desde el momento en que ingrese sus criptomonedas debe escoger entre los plazos de\n        retiro que le\n        ofrecemos.</a>\n      <br><br>\n      <a class="textNomral"> -El retorno del capital y renta se realizarán una vez se haya cumplido la fecha de\n        finalización y la\n        respectiva\n        solicitud dentro del término establecido.</a>\n      <br><br>\n      <a class="textNomral"> -Una vez se cumpla la fecha de finalización, el plazo para retirar es de 3 días,\n        incluyendo la fecha de\n        finalización.</a>\n      <br><br>\n      <a class="textNomral"> – En caso de que se cumpla el plazo para retirar y no se haya realizado el retiro, la <b>Bóveda</b>\n        se renovará de\n        manera automática por el mismo plazo inicial.</a>\n      <br><br>\n      <a class="textNomral"> – El retorno de su capital y renta será realizado una vez se cumpla la fecha de\n        finalización.</a>\n      <br><br>\n      <a class="textNomral"> <b>EXCHANGE:</b> servicio de intercambio de criptomonedas y dinero fiat.</a>\n      <br><br>\n      <b>nota:</b>\n      <a class="textNomral">el usuario del sistema exchange debe ser extremadamente cuidadoso con los datos de cuentas\n        bancarias o\n        cuentas virtuales o cualquier dato solicitado para que exchange funcione y se pueda usar,</a>\n      <br><br>\n      <a class="textNomral">eyewallet no se hace responsable si el usuario comete yerros al digitar, ingresar, colocar\n        sus datos, es decir\n        que las implicaciones de dichas imprecisiones correrán por cuenta del usuario; por lo tanto eyewallet no se\n        hace responsable de los mismos.</a>\n      <br><br>\n      <a class="textNomral">Al ingresar a esta opción, puede realizar las siguientes operaciones:</a>\n      <br><br>\n      <b>Oferta de criptomonedas:</b>\n      <br><br>\n      <a class="textNomral">\n        Debe completar la información solicitada por los campos del sistema para vender sus criptomonedas, luego de la\n        publicación de la oferta, las criptomonedas se extraen de la cartera virtual e ingresan a un sistema aislado\n        para\n        asegurar la transacción.</a>\n      <br><br>\n      <b>Comprar criptomonedas:</b>\n      <br><br>\n      <a class="textNomral">\n        Debe ingresar a la lista de opciones de las ofertas y elegir la porción de criptomonedas que desea adquirir,\n        una vez realizada esta elección, el procedimiento requerido por el sistema debe agotarse para que tenga éxito y\n        el usuario obtenga el monto pagado en una manera legal de acuerdo con el orden jurídico del estado donde se\n        realiza la transacción.</a>\n      <br><br>\n      <a class="textNomral">\n        EYEWALLET cuenta con una lista de todas las compras y ventas (TRANSACCIONES) realizada por sus usuarios; el\n        sistema EYEWALLET funciona bajo la tecnología blockchain.</a>\n      <br><br>\n      <b>COMPRAR</b>\n      <br><br>\n      <a class="textNomral">\n        Para comprar y vender criptomonedas con Eyewallet, simplemente haga clic en el botón Exchange, que lo\n        redireccionará a un proceso que le mostrará distintas opciones. Para comprar criptomonedas utilizando\n        criptomonedas o dinero fiduciario. Eyewallet no se hace responsable en ningún caso por el éxito de las\n        compraventas realizadas por los usuarios en la plataforma.</a>\n      <br><br>\n      <a class="textNomral">\n        Si usted desea que la cantidad o porción de criptomonedas compradas en el sistema Exchange de Eyewallet sea\n        depositada directamente en un monedero virtual diferente a Eyewallet, tendrá un costo adicional de 1% de la\n        cantidad en mención; el proceso de transferencia se podrá demorar un día hábil, es oportuno resaltar que el\n        tiempo final depende del tiempo que tarde la validación de la transacción, hecha por la minería de\n        criptomonedas.</a>\n      <br><br>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/santiago/eyepaycash/src/pages/politics/politics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PoliticsPage);
    return PoliticsPage;
}());

//# sourceMappingURL=politics.js.map

/***/ })

});
//# sourceMappingURL=1.js.map