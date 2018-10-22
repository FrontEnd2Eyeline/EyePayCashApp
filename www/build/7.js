webpackJsonp([7],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticasPageModule", function() { return PoliticasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__politicas__ = __webpack_require__(729);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__politicas__["a" /* PoliticasPage */]),
            ],
        })
    ], PoliticasPageModule);
    return PoliticasPageModule;
}());

//# sourceMappingURL=politicas.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__ = __webpack_require__(89);
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
    function PoliticasPage(navCtrl, navParams, toastCtrl, view, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.view = view;
        this.userProvider = userProvider;
    }
    PoliticasPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Si no acepta estos términos, no debe usar nuestros servicios. Puede utilizar nuestros servicios sólo si puede celebrar legalmente un acuerdo según la ley aplicable. Si utiliza nuestros servicios, acepta hacerlo de conformidad con estos términos y con las leyes y regulaciones aplicables.',
            position: 'center',
            showCloseButton: true,
            closeButtonText: "Acepto"
        });
        toast.onDidDismiss(function () {
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
        });
        toast.present();
    };
    PoliticasPage.prototype.aceptarTerminos = function () {
        this.userProvider.setCheck_Terminos(true);
        this.view.dismiss(true);
    };
    PoliticasPage.prototype.goRegister = function () {
        this.navCtrl.pop();
    };
    PoliticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-politicas',template:/*ion-inline-start:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/politicas/politicas.html"*/'<ion-content class="imgBackground">\n  <div padding>\n    <div style="background:white; border-radius:8px; padding: 2%">\n      <!-- <p class="Titles"> Términos de Uso de EyePayCash.</p>\n      <a class="textNomral">Por favor lea estos términos de uso cuidadosamente, al hacer clic en aceptar, acceder o\n        utilizar nuestros servicios, se compromete a respetar estos términos de uso y todos los términos incorporados\n        por referencia.Si está aceptando estos términos en nombre de una entidad, usted confirma que está autorizado en\n        nombre de esa entidad para aceptar y sujetarse a estos términos de uso y a todos los términos incorporados por\n        referencia.</a>\n\n      <p class="Titles"> Alcance.\n      </p>\n      <a class="textNomral">Estos términos de uso se refieren a nosotros como <b>“EyePayCash” </b>ó <b>“nosotros“</b>.\n        <b>EyePayCash</b> es\n        una compañía constituida bajo las leyes de Malta Europa. Estos términos se aplican a cualquier acceso, uso de\n        nuestro sitio web en https://eyepaycash.co, nuestros servicios en línea, nuestras aplicaciones móviles para\n        iOS\n        e Android, y/o cualquiera de nuestros servicios relacionados.\n\n        La República de Malta (en maltés: Repubblika ta’ Malta; en inglés: Republic of Malta) es un país insular\n        miembro de la Unión Europea, densamente poblado, compuesto por un archipiélago y situado en el centro del\n        Mediterráneo, al sur de Italia, al oriente de Túnez y al norte de Libia.</a>\n      <br><br>\n      <a class="textNomral">La República de Malta (en maltés: Repubblika ta’ Malta; en inglés: Republic of Malta) es un\n        país insular\n        miembro de la Unión Europea, densamente poblado, compuesto por un archipiélago y situado en el centro del\n        Mediterráneo, al sur de Italia, al oriente de Túnez y al norte de Libia.</a>\n      <br><br>\n      <a (click)="presentToast()" style="font-weight: bold">ELEGIBILIDAD Y ACUERDO.</a> <br>\n      <br>\n      <a (click)="presentToast2()" style="font-weight: bold">CAMBIOS EN ESTOS TÉRMINOS.</a>\n      <br>\n      <br>\n      <a (click)="presentToast3()" style="font-weight: bold">NOTA ACLARATORIA.</a>\n      <br>\n      <p class="Titles"> Los servicios de EyePayCash.\n      </p>\n      <a class="textNomral"> <b>EyePayCash </b>proporciona una forma de almacenar, usar y administrar\n        criptomonedas:</a>\n      <br>\n      <b>MONEDERO VIRTUAL: EyePayCash</b> es una billetera virtual basada en criptomonedas donde puede\n      enviar, recibir y\n      cambiar su dinero y criptomonedas de manera segura.\n      <br>\n      <b><i>Bóveda</i></b><a class="textNomral">: servicio de almacenamiento y de rentas fijas. Lo contenido\n        en el siguiente link\n        https://eyepaycash.com/boveda/ hace parte de estos términos y condiciones.</a>\n      <br><br>\n      <a class="textNomral"> -El Monto mínimo de de ingreso a la <b><i>Bóveda</i></b> es de 0.01 BTC.</a>\n      <br><br>\n      <a class="textNomral"> -Desde el momento en que ingrese sus criptomonedas debe escoger entre los plazos de\n        retiro que le\n        ofrecemos.</a>\n      <br><br>\n      <a class="textNomral"> -El retorno del capital y renta se realizarán una vez se haya cumplido la fecha de\n        finalización y la\n        respectiva\n        solicitud dentro del término establecido.</a>\n      <br><br>\n      <a class="textNomral"> -Una vez se cumpla la fecha de finalización, el plazo para retirar es de 3 días,\n        incluyendo la fecha de\n        finalización.</a>\n      <br><br>\n      <a class="textNomral"> – En caso de que se cumpla el plazo para retirar y no se haya realizado el retiro, la <b><i>Bóveda</i></b>\n        se renovará de\n        manera automática por el mismo plazo inicial.</a>\n      <br><br>\n      <a class="textNomral"> – El retorno de su capital y renta será realizado una vez se cumpla la fecha de\n        finalización.</a>\n      <br><br>\n      <a class="textNomral"> <b>EXCHANGE:</b> servicio de intercambio de criptomonedas y dinero fiat.</a>\n      <br><br>\n      <b>nota:</b>\n      <a class="textNomral">el usuario del sistema exchange debe ser extremadamente cuidadoso con los datos de cuentas\n        bancarias o\n        cuentas virtuales o cualquier dato solicitado para que exchange funcione y se pueda usar,</a>\n      <br><br>\n      <a class="textNomral">EyePayCash no se hace responsable si el usuario comete yerros al digitar, ingresar, colocar\n        sus datos, es decir\n        que las implicaciones de dichas imprecisiones correrán por cuenta del usuario; por lo tanto EyePayCash no se\n        hace responsable de los mismos.</a>\n      <br><br>\n      <a class="textNomral">Al ingresar a esta opción, puede realizar las siguientes operaciones:</a>\n      <br><br>\n      <b>Oferta de criptomonedas:</b>\n      <br><br>\n      <a class="textNomral">\n        Debe completar la información solicitada por los campos del sistema para vender sus criptomonedas, luego de la\n        publicación de la oferta, las criptomonedas se extraen de la cartera virtual e ingresan a un sistema aislado\n        para\n        asegurar la transacción.</a>\n      <br><br>\n      <b>Comprar criptomonedas:</b>\n      <br><br>\n      <a class="textNomral">\n        Debe ingresar a la lista de opciones de las ofertas y elegir la porción de criptomonedas que desea adquirir,\n        una vez realizada esta elección, el procedimiento requerido por el sistema debe agotarse para que tenga éxito y\n        el usuario obtenga el monto pagado en una manera legal de acuerdo con el orden jurídico del estado donde se\n        realiza la transacción.</a>\n      <br><br>\n      <a class="textNomral">\n        EyePayCash cuenta con una lista de todas las compras y ventas (TRANSACCIONES) realizada por sus usuarios; el\n        sistema EyePayCash funciona bajo la tecnología blockchain.</a>\n      <br><br>\n      <b>COMPRAR</b>\n      <br><br>\n      <a class="textNomral">\n        Para comprar y vender criptomonedas con EyePayCash, simplemente haga clic en el botón Exchange, que lo\n        redireccionará a un proceso que le mostrará distintas opciones. Para comprar criptomonedas utilizando\n        criptomonedas o dinero fiduciario. EyePayCash no se hace responsable en ningún caso por el éxito de las\n        compraventas realizadas por los usuarios en la plataforma.</a>\n      <br><br>\n      <a class="textNomral">\n        Si usted desea que la cantidad o porción de criptomonedas compradas en el sistema Exchange de EyePayCash sea\n        depositada directamente en un monedero virtual diferente a EyePayCash, tendrá un costo adicional de 1% de la\n        cantidad en mención; el proceso de transferencia se podrá demorar un día hábil, es oportuno resaltar que el\n        tiempo final depende del tiempo que tarde la validación de la transacción, hecha por la minería de\n        criptomonedas.</a>\n      <br><br>\n      <b>VENDER</b>\n      <br><br>\n      <a class="textNomral">\n        Una vez usted ofrece una cantidad de criptomonedas en Exchange de EyePayCash usted deberá esperar como mínimo\n        10\n        días hábiles para cancelar la oferta, si usted NO ESPERA DICHO TÉRMINO, se le penalizará con una disminución\n        del 0,4% de la cantidad ofertada; pasados estos 10 días hábiles no habrá penalización por retirar la oferta. La\n        solicitud de cancelación de oferta implica que su cantidad de criptomoneda sale del servicio de Exchange de\n        EyePayCash, pero sigue en el monedero.</a>\n      <br><br>\n      <a class="textNomral">\n        Las únicas criptomonedas admitidas por EyePayCash serán expresadas de forma inequívoca y pública en la página\n        web de EyePayCash. EyePayCash no será responsable de recibir o almacenar monedas digitales que no cumplan con\n        el\n        requisito anteriormente descrito; se le recuerda que si usted intenta hacer una transferencia de criptomonedas\n        que no cumplan el requisito de la referencia, usted puede perder cualquier derecho relacionado con dicha moneda\n        digital o valor sin ningún derecho a reclamar a EyePayCash.</a>\n      <br><br>\n      <a class="textNomral">\n        EyePayCash no se hará responsable por los datos equívocos que se ingresen en el módulo método de pago.</a>\n      <br><br>\n      <b>COSTOS POR EL USO DE EXCHANGE</b>\n      <br><br>\n      <a class="textNomral">\n        Toda transacción exitosa llevada a cabo por intermedio y/o usando nuestro sistema de EXCHANGE; tendrá un costo\n        del 1% del total de las cantidades objeto de cada transacción en concreto.</a>\n      <br><br>\n      <b>ESTADO DE MODERACIÓN</b>\n      <br><br>\n      <a class="textNomral">\n        Una vez se compre una fracción publicada y se allegue el respectivo comprobante de pago, el vendedor tendrá dos\n        horas para validarlo, es decir, aprobarlo o rechazarlo.</a>\n      <br><br>\n      <a class="textNomral">\n        Si el comprobante es rechazado y el comprador no ratifica y/o vuelve a subir el comprobante y el mismo nunca es\n        validado, EyePayCash cambia la compra a un estado de moderación donde ni el vendedor ni el comprador pueden\n        ejecutar alguna acción, ambos deberán esperar 3 días hábiles mientras EyePayCash hace la respectiva\n        investigación para saber qué sucedió.</a>\n      <br>\n      <p class="Titles"> Reserva de EyePayCash.</p>\n      <br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> está diseñada principalmente para cubrir la pérdida de criptomonedas\n        almacenadas por\n        nuestros usuarios en la <b><i>Bóveda</i></b>, nuestro servicio de almacenamiento incorpora múltiples capas de\n        seguridad\n        criptográfica para ayudar a proteger sus criptomonedas. Estos procesos incluyen autenticación de múltiples\n        factores y segmentación de clave privada entre otros.</a>\n      <br><br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> está diseñada para cubrir pérdidas directas y efectivas sufridas por los\n        usuarios como\n        resultado de ataques de hackers a nuestros sistemas, robo por parte de un tercero y/o empleado de <b>EyePayCash</b>\n        y/o\n        nuestra bancarrota. (<b>“Pérdidas que califican o Pérdidas Calificadas“</b>).</a>\n      <br><br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> no cubre casos de piratería de dispositivos de los usuarios y cuentas\n        personales como\n        teléfonos, computadoras, cuentas de correo electrónico, etc. Por ejemplo, una pérdida sufrida como resultado de\n        la falta de mantener la seguridad, el control o la confidencialidad adecuados de su información, incluidos los\n        números de identificación personal <b>PIN</b>, contraseñas, claves <b>API</b> u otros códigos asociados con su\n        cuenta y\n        cualquier actividad que se produzca dentro de esa cuenta, no se considerará una <b>Pérdida admisible</b>.</a>\n      <br><br>\n      <a class="textNomral">\n        Hemos diseñado la reserva de criptomonedas <b>EyePayCash</b> para ayudar a reducir el impacto de las pérdidas\n        de\n        criptomonedas que están fuera del control de nuestros usuarios, no podemos garantizar que la reserva de\n        criptomonedas de <b>EyePayCash</b> tenga un número suficiente de criptomonedas para cubrir cualquiera de las\n        pérdidas\n        sufridas por nuestros usuarios en estas circunstancias.</a>\n      <br><br>\n      <a class="textNomral">\n        En caso de una <b>Pérdida Calificada</b> Los usuarios que tengan almacenadas criptomonedas en nuestra <b><i>Bóveda</i></b>\n        tendrán\n        prioridad frente a los que solo tengan sus criptomonedas en el <b><i>Monedero Virtual</i></b>.</a>\n      <br><br>\n      <a class="textNomral">\n        La Reserva de <b>EyePayCash</b> cubrirá las <b>Pérdidas Calificadas</b> en el siguiente orden de prioridad:</a>\n      <br><br>\n      <a class="textNomral">\n        Si la Reserva de <b>EyePayCash</b> no es suficiente para cubrir el 100% de las <b>Pérdidas Calificadas</b> de\n        la <b><i>Bóveda</i></b> y\n        luego del <b><i>Monedero Virtual</i></b>, las pérdidas se cubrirán proporcionalmente, en función del valor\n        total de las\n        mismas y en proporción al valor total de criptomonedas perdidas por todos los Usuarios como resultado del\n        incidente.</a>\n      <br><br>\n      <a class="textNomral">\n        El uso de la Reserva <b>EyePayCash</b> es opcional para nuestros usuarios. Como condición para recibir\n        cualquier\n        cantidad de criptomonedas y/o fondos de la cobertura de la Reserva <b>EyePayCash</b> , usted acepta (i)\n        cooperar\n        oportunamente con <b>EyePayCash</b> a petición suya en relación con cualquier reclamación de cobertura\n        relacionada con\n        sus criptomonedas, lo que incluye el suministro oportuno de cualquier información o la documentación que\n        <b>EyePayCash</b> razonablemente solicita, y (ii) firmar cualquier documento que incluye, entre otros, la\n        liberación de\n        reclamos adicionales contra <b>EyePayCash</b> , que EyePayCash podría requerir.</a>\n      <br><br>\n      <a (click)="Transacciones()" style="font-weight: bold">TRANSACCIONES.</a>\n      <br><br>\n      <a (click)="Retrasos()" style="font-weight: bold">RETRASOS.</a>\n      <br><br>\n      <a (click)="DirClave()" style="font-weight: bold">DIRECCIÓN Y CLAVE PERDIDA.</a>\n      <br><br>\n      <a (click)="Crypto()" style="font-weight: bold">CUSTODIA DE CRIPTOMONEDAS.</a>\n      <br>\n      <p class="Titles">Derechos de propiedad intelectual.</p>\n      <br><br>\n      <a class="textNomral">\n        Conservamos todos los derechos, títulos e intereses (incluidos todos los derechos de autor, marcas registradas,\n        patentes, secretos comerciales y todos los demás derechos de propiedad intelectual) en nuestros servicios y\n        todo el contenido de nuestros servicios, incluidas nuestras marcas comerciales, marcas de servicio, diseños,\n        logotipos y URL. y los nombres comerciales que se muestran en nuestro servicio, a los que nos referimos en\n        estos términos, colectivamente, como Materiales de <b>EyePayCash</b>.</a>\n      <br><br>\n      <a class="textNomral">\n        Por la presente, le otorgamos una licencia limitada, no exclusiva y no sublicenciable para acceder y utilizar\n        los materiales de <b>EyePayCash</b> para su uso comercial personal o interno.</a>\n      <br><br>\n      <a class="textNomral">\n        Dicha licencia está sujeta a estos términos y no permite la reventa de los materiales <b>EyePayCash</b> ; la\n        distribución, ejecución pública o exhibición pública de cualquier material de <b>EyePayCash</b> ; modificar o\n        hacer\n        cualquier uso derivado de los Materiales de <b>EyePayCash</b> o cualquier parte del mismo; o cualquier uso de\n        los\n        Materiales <b>EyePayCash</b> que no sea para sus fines previstos. La licencia otorgada en virtud de esta\n        Sección\n        finalizará automáticamente si suspendemos o cancelamos su acceso a los servicios. Tendremos derechos\n        exclusivos, incluidos todos los derechos de propiedad intelectual, sobre cualquier comentario, sugerencia, idea\n        u otra información o material relacionado con <b>EyePayCash</b> , cualquier comentario que envíe no es\n        confidencial y\n        pasará a ser propiedad exclusiva de <b>EyePayCash</b> . Tendremos derecho a la utilización y difusión sin\n        restricciones\n        de dichos comentarios para cualquier fin, comercial o de otro tipo, sin reconocimiento o compensación para\n        usted. No puede usar, copiar o transmitir nada en nuestro sitio web sin nuestro permiso.</a>\n      <br>\n      <p class="Titles">Usos autorizados de nuestros servicios.</p>\n      <br><br>\n      <a class="textNomral">\n        Usted puede usar nuestros servicios únicamente en lo que le hemos autorizado. Usted es responsable de\n        garantizar que la información personal de su perfil en la cuenta sea actual y correcta, incluida su dirección\n        de correo electrónico y número de teléfono móvil. También es responsable de mantener la seguridad, el control y\n        la confidencialidad adecuados de la información de su cuenta, incluidos los números de identificación personal\n        (PIN), contraseñas, claves de API u otros códigos asociados con su cuenta y cualquier actividad que ocurra\n        dentro de esa cuenta. La pérdida o el compromiso de esta información puede ocasionar el acceso no autorizado de\n        su cuenta, lo que puede ocasionar la pérdida o robo de cualquier criptomoneda almacenada en su cuenta. Si cree\n        que su cuenta se ha visto comprometida, necesita informar un incidente de seguridad, si experimenta problemas\n        operacionales o tiene un problema de seguridad, por favor contáctenos inmediatamente describiendo el problema\n        en cuestión lo más detalladamente posible, incluyendo la fecha, el tipo de problema y parte del sitio de\n        <b>EyePayCash</b> o los servicios de <b>EyePayCash</b> donde experimentó ese problema. Usted es responsable de\n        (i) notificarnos\n        inmediatamente de cualquier uso no autorizado de su contraseña, cuenta o de cualquier otra violación de\n        seguridad, y (ii) asegurarse de salir de su cuenta al final de cada sesión al acceder a los servicios de\n        <b>EyePayCash</b>. No tenemos responsabilidad por ninguna pérdida que sufra como resultado de no cumplir con\n        esta\n        sección o su incumplimiento de los avisos o alertas que podamos enviarle.</a>\n      <br><br>\n      <a (click)="smsText()" style="font-weight: bold">USANDO SMS / TEXTO.</a>\n      <br><br>\n      <a (click)="infoPrerequisito()" style="font-weight: bold">INFORMACIÓN PRECISA Y REQUISITOS.</a>\n      <br><br>\n      <a (click)="actividadesProhibidas()" style="font-weight: bold">ACTIVIDADES PROHIBIDAS.</a>\n      <br><br>\n      <a (click)="cuentasSuspendidas()" style="font-weight: bold">CUENTAS SUSPENDIDAS.</a>\n      <br><br>\n      <a (click)="cuentasEliminadas()" style="font-weight: bold">CUENTAS ELIMINADAS.</a>\n      <br><br>\n      <a (click)="descargoGarantias()" style="font-weight: bold">DESCARGO DE GARANTÍAS.</a>\n      <br><br>\n      <a (click)="sinConsejos()" style="font-weight: bold">SIN CONSEJOS.</a>\n      <br><br>\n      <a (click)="indemnizacion()" style="font-weight: bold">INDEMNIZACIÓN.</a>\n      <br><br>\n      <a (click)="limiResponsabilidad()" style="font-weight: bold">LIMITACIÓN DE RESPONSABILIDAD.</a>\n      <br><br>\n      <a (click)="separabilidad()" style="font-weight: bold">SEPARABILIDAD.</a>\n      <br><br>\n      <a (click)="arbAplicable()" style="font-weight: bold">ARBITRAJE Y LEY APLICABLE.</a>\n      <br><br>\n      <a (click)="limitaciones()" style="font-weight: bold">LIMITACIONES.</a>\n      <br><br>\n      <a (click)="propiedadNReclamada()" style="font-weight: bold">PROPIEDAD NO RECLAMADA.</a>\n      <br><br>\n      <a (click)="acuerdoCompleto()" style="font-weight: bold">ASIGNACIÓN: ACUERDO COMPLETO.</a> -->\n      <br><br>\n      <a (click)="politicaPrivacidad()" style="font-weight: bold">POLÍTICA DE PRIVACIDAD.</a>\n      <br>\n      <p class="Titles"><i>Usos autorizados de nuestros servicios.</i></p>\n      <a class="textNomral">\n        <i><b>Datos que nos proporciona.</b> Recopilamos la información que nos proporciona, que incluye:</i></a>\n      <br><br>\n      <a class="textNomral">\n        - Su nombre, dirección de correo electrónico, número de teléfono móvil.</a>\n      <br><br>\n      <a class="textNomral">\n        - Información sobre las transacciones que completa utilizando nuestros servicios, incluida la cantidad de\n        fondos asociados con una transacción de criptomoneda, el tipo de transacción ejecutada y otra información\n        relacionada.</a>\n      <br><br>\n      <a class="textNomral">\n        - Los correos electrónicos y números de teléfono de sus contactos, si elige invitar a sus amigos a usar\n        EyePayCash como parte de nuestro programa de referencia cuando crea su cuenta.</a>\n      <br><br>\n      <a class="textNomral">\n        - Si usa nuestras aplicaciones móviles, recopilamos de su dispositivo móvil una ID única (donde su dispositivo\n        es un iPhone, también recolectamos el CFUUID recomendado por Apple (el identificador universal único de\n        información).</a>\n      <br>\n      <p class="Titles">Otros datos recopilados.</p>\n      <a class="textNomral">\n        También podemos recopilar automáticamente los siguientes datos:</a>\n      <br><br>\n      <b><i> - Analítica.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Cuando visita nuestro sitio web, utilizamos herramientas de análisis de terceros para recopilar datos sobre su\n        computadora y conexión a Internet. Esa información incluye la dirección IP de su computadora y/o proveedor de\n        servicios de Internet, cuando accede a nuestro sitio web, la dirección de Internet de los sitios web desde los\n        cuales se conecta a nuestro sitio web y desde donde llegó antes de aterrizar en nuestro sitio web, el navegador\n        que usted está utilizando, y sus movimientos y preferencias en nuestro sitio web. Toda esta información se usa\n        internamente con el propósito de comprender cómo se está utilizando nuestro sitio web y mejorar nuestro sitio\n        web. También utilizamos herramientas de análisis de terceros para recopilar datos sobre su uso de nuestras\n        aplicaciones móviles. La información recopilada identifica los tipos y el momento de las acciones que realiza\n        dentro de nuestro dispositivo móvil, incluida la instalación, el registro, la carga y ciertos tipos de\n        navegación.</a>\n      <br><br>\n      <b><i> - Etiquetas de acción.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Cuando visita nuestro sitio web, usamos etiquetas de acción (también llamadas etiquetas de píxeles, GIF claro o\n        balizas) para identificar algunas de las páginas que visita y cómo utiliza el contenido de esas páginas. Las\n        etiquetas de acción pueden recopilar y transmitir estos datos de una manera que lo identifique si se ha\n        registrado en nuestro sitio web o si ha iniciado sesión en nuestro sitio web. También usamos etiquetas de\n        acción en nuestros correos electrónicos para determinar si un correo electrónico se abrió o si se reenvió a\n        otra persona. Cuando utiliza nuestras aplicaciones móviles, utilizamos etiquetas de acción en las que accede a\n        sitios web desde enlaces en nuestras aplicaciones móviles. Estos pueden identificar las páginas que visita y\n        cómo utiliza el contenido en esas páginas.</a>\n      <b><i> - Gestión del sitio.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Agregamos datos que recopilamos sobre el uso de nuestro sitio web para administrar, proteger y mejorar nuestro\n        sitio web y nuestros sistemas, para comprender mejor las preferencias de los visitantes de nuestro sitio web y\n        optimizar el contenido que servimos, para identificar problemas del servidor, compilar estadísticas agregadas\n        sobre el uso de nuestro sitio web y para mejorar nuestro marketing e investigación.</a>\n      <b><i> - No Track.</i></b>\n      <br><br>\n      <a class="textNomral">\n        Nuestro Servicio actualmente no responde a las señales de “No rastrear” y funciona como se describe en esta\n        Política de privacidad, ya sea que se reciba o no una señal de No rastrear. Si lo hacemos en el futuro,\n        describiremos cómo lo hacemos en esta Política de privacidad.</a>\n      <br><br>\n      <a class="textNomral">\n        Al proporcionarnos voluntariamente datos personales, usted acepta nuestro uso de acuerdo con esta Política de\n        privacidad. Si nos proporciona datos personales, reconoce y acepta que dichos datos personales pueden\n        transferirse desde su ubicación actual a las oficinas y servidores de <b>EyePayCash</b> y los terceros\n        autorizados\n        mencionados en esta política. Usamos medidas de seguridad físicas, electrónicas y de procedimientos razonables\n        para proteger la información personal que obtenemos de usted contra la pérdida, el uso indebido y el acceso,\n        divulgación, alteración y destrucción no autorizados. Tenga en cuenta que no somos responsables de la seguridad\n        de los datos que está transmitiendo a través de Internet ni de los datos que está almacenando, publicando o\n        proporcionando directamente en el sitio web de un tercero, que se rige por las políticas de esa parte. Tenga en\n        cuenta que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100%\n        seguro. Si tiene más preguntas sobre seguridad, puede <a href="http://eyepaycash.co/contactenos">\n        Contáctenos</a>.</a>\n      <p class="Titles">Retención de datos.</p>\n      <a class="textNomral">\n        Si desea cerrar su cuenta de EyePayCash por completo, envienos un correo a <a\n          href="http://eyepaycash.co/contactenos">\n        Contáctenos</a>\n        desde su dirección de correo electrónico registrada. Podemos retener información sobre usted en nuestras bases\n        de datos por el tiempo que su cuenta esté activa o según sea necesario para proporcionarle servicios y de\n        acuerdo con las leyes aplicables. Nuestra retención y uso de su información será tan necesaria para cumplir con\n        nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos. El período de retención\n        puede extenderse más allá del final de su relación con nosotros, pero solo será necesario siempre que tengamos\n        suficiente información para responder a cualquier problema que pueda surgir más adelante. Por ejemplo, es\n        posible que necesitemos o se nos solicite que retengamos cierta información para evitar actividades\n        fraudulentas, protegernos de responsabilidad, permitirnos buscar remedios disponibles o limitar cualquier daño\n        que podamos sufrir.</a>\n      <br>\n      <p class="Titles">Acceso a la información.</p>\n      <a class="textNomral">\n        Responderemos a su solicitud de acceso a la información que recopilamos sobre usted dentro del plazo requerido\n        por la ley aplicable.</a>\n      <br><br>\n      <a class="textNomral">\n        <b>Compartir datos.</b>\n        <a class="textNomral">Podemos compartir su información de la siguiente manera:</a>\n        <br><br>\n        <a class="textNomral">\n          - Usted ha consentido o nos ha dado permiso para compartir:</a>\n        <br><br>\n        <a class="textNomral">\n          - Hemos agregado o eliminado la identificación de la información, por lo que no se puede usar\n          razonablemente para identificarlo.</a>\n        <br><br>\n        <a class="textNomral">\n          - Con las empresas afiliadas al Grupo EyePayCash:</a>\n        <br><br>\n        <a class="textNomral">\n          - Con los proveedores de servicios externos que utilizamos para brindar nuestro servicio, incluidos\n          ciertos servicios de publicidad, referencias, operaciones, servicios financieros y tecnología (como\n          proveedores de hosting, verificación de identidad, soporte, pago y proveedores de servicios de correo\n          electrónico):</a>\n        <br><br>\n        <a class="textNomral">\n          - Si así lo requiere la ley o el proceso legal aplicable, o si creemos que está de acuerdo con la\n          ley\n          aplicable o el proceso legal:</a>\n        <br><br>\n        <a class="textNomral">\n          - Para proteger los derechos, propiedad y seguridad de EyePayCash, nuestros usuarios y el\n          público,\n          incluyendo, por ejemplo, en conexión con procedimientos judiciales, o para detectar o prevenir\n          actividad\n          criminal, fraude, tergiversación material, o para establecer nuestros derechos o defendernos\n          contra legal\n          reclamaciones; o En relación con la venta, la fusión, la transferencia o la reorganización de la\n          totalidad o\n          partes de nuestro negocio.</a>\n      </a>\n      <br><br>\n      <!-- <a (click)="comEmail()" style="font-weight: bold">COMUNICACIONES POR EMAIL.</a>\n      <br><br>\n      <a (click)="enlServicios()" style="font-weight: bold">ENLACES Y SERVICIOS.</a>\n      <br><br>\n      <a (click)="camPolitica()" style="font-weight: bold">CAMBIOS A ESTA POLÍTICA.</a>\n      <br><br> -->\n      <div class="center">\n        <button style="border-radius: 0%" (click)="aceptarTerminos()" class="buttonPayCash btnStyle" ion-button small>\n          Acepto\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/eyeline/Documents/eyepaycashappGitHub/src/pages/politicas/politicas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_user_auth_user__["a" /* AuthUserProvider */]])
    ], PoliticasPage);
    return PoliticasPage;
}());

//# sourceMappingURL=politicas.js.map

/***/ })

});
//# sourceMappingURL=7.js.map