import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {AuthUserProvider} from "../../providers/auth-user/auth-user";

/**
 * Generated class for the PoliticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politicas',
  templateUrl: 'politicas.html',
})
export class PoliticasPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              public view: ViewController,
              private userProvider: AuthUserProvider) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Si no acepta estos términos, no debe usar nuestros servicios. Puede utilizar nuestros servicios sólo si puede celebrar legalmente un acuerdo según la ley aplicable. Si utiliza nuestros servicios, acepta hacerlo de conformidad con estos términos y con las leyes y regulaciones aplicables.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentToast2() {
    let toast = this.toastCtrl.create({
      message: 'Podemos hacer cambios a estos términos, incluso cuando haya cambios en nuestros servicios, tecnología, regulación y por otros motivos. Si lo hacemos, le enviaremos un aviso de dichos cambios. Publicaremos los términos actualizados en nuestro sitio web.Los cambios realizados por razones legales entrarán en vigencia inmediatamente. El uso continuado de los servicios después de la fecha de vigencia de dichos cambios constituirá su aceptación de los mismos. Si no acepta los términos enmendados, debe dejar de usar los servicios.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }

  presentToast3() {
    let toast = this.toastCtrl.create({
      message: 'El costo y tiempo de realizar transacciones a través de la red fluctúa constantemente; dado que el costo de procesar las transacciones entrantes y salientes cambia contínuamente, recomendamos que siempre verifique esta información. EyePayCash no se hace responsable del tiempo y costo de las comisiones cobradas por la minería de criptomoneda inherente a cualquier tipo de transacción o tipología transaccional en la que haya cualquier cantidad de criptomonedas implicadas, esta nota también aplica para el servicio de Exchange, Bóveda, las transacciones salientes y entrantes contenidas en los términos de servicios pagados.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }

  Transacciones() {
    let toast = this.toastCtrl.create({
      message: 'EyePayCash no puede y no garantiza el valor de las criptomonedas, usted reconoce y acepta que el valor de las criptomonedas es altamente volátil y qué comprar, vender y mantener criptomonedas implica un alto riesgo. Además, la red de consenso de criptomonedas es la única responsable de verificar y confirmar las transacciones propuestas que se envíen a través de nuestros servicios, EyePayCash solo confirma la finalización de una transacción. La red de criptomonedas es operada por un sistema descentralizado de terceros independientes. Nuestros servicios lo ayudan a enviar su solicitud de transacción de criptomonedas para que sean confirmados por la red de criptomonedas, sin embargo, EyePayCash no tiene control sobre la red de criptomonedas y por lo tanto, no puede y no garantiza que se complete cualquier solicitud de transacción que se envíe a través de los servicios. Usted reconoce y acepta que las solicitudes de transacción que envíe a través de los servicios pueden completarse, o pueden retrasarse sustancialmente, por la red de criptomonedas. Cuando completa una solicitud de transacción a través de los servicios, nos autoriza a enviar su solicitud de transacción a la red de criptomonedas de acuerdo con las instrucciones que usted le brinde a nuestros servicios. EyePayCash no puede garantizar y no garantiza que cualquier transacción de criptomonedas revertida por un tercero, y/o criptomonedas enviadas directamente a cualquier dirección de envío diferente de EyePayCash sea recibida.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  Retrasos() {
    let toast = this.toastCtrl.create({
      message: 'Los servicios de EyePayCash implican varias medidas de seguridad para aumentar la seguridad de su almacenamiento de criptomonedas en EyePayCash. Por esta razón, cualquier transacción a una dirección de criptomonedas fuera de EyePayCash para una cantidad significativa, puede tomar más tiempo que una estándar. Usted reconoce y acepta que cualquier transacción dirigida a una dirección de criptomonedas fuera del sistema EyePayCash puede retrasarse y ser costosa.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  DirClave() {
    let toast = this.toastCtrl.create({
      message: 'El Cuando crea una cuenta, los servicios generan y almacenan un par de claves públicas y privadas criptográficas que se puede usar para enviar y recibir criptomonedas a través de la red criptomonedas . La clave pública generada por los servicios sirve como su dirección del Monedero Virtual, y puede compartirse en la red de cripto minería y con otros usuarios para completar las transacciones. La clave privada se adapta de manera única a la dirección de la billetera y se debe usar en conexión con la dirección de la billetera para autorizar la transferencia de criptomonedas desde o hacia esa dirección del Monedero Virtual.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  Crypto() {
    let toast = this.toastCtrl.create({
      message: 'EyePayCash es custodio de cualquier cantidad de criptomonedas transferidas a EyePayCash o la bóveda. EyePayCash no obtiene ningún derecho, título o interés legal sobre las criptomonedas almacenadas por usted.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  //Ventana de 15 subtitles

  smsText() {
    let toast = this.toastCtrl.create({
      message: 'Para usar los servicios de EyePayCash, debe proporcionar un número de teléfono móvil válido. Este número se usa como parte del proceso de autenticación. Como parte del uso de los servicios EyePayCash, acepta recibir mensajes de texto o SMS de nuestra parte. Tenga en cuenta que si bien no le cobramos por mensajes de texto o SMS, se aplicarán las tarifas de mensajería estándar de su operador de telefonía móvil. Si no proporciona un número de teléfono móvil válido, podemos restringir su uso de los servicios de EyePayCash. Si EyePayCash sospecha que su número de teléfono móvil no es válido o que está utilizando un servicio de VOIP para eludir el requisito de proporcionar un número de teléfono móvil válido, EyePayCash puede suspender o restringir el uso de los servicios de EyePayCash. VOIP es un acrónimo de Voz sobre Protocolo de Internet (Voice Over Internet Protocol), el cual por sí mismo significa voz a través de internet. Es una tecnología que proporciona la comunicación de voz y sesiones multimedia (tales como vídeo) sobre Protocolo de Internet (IP).',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  infoPrerequisito() {
    let toast = this.toastCtrl.create({
      message: 'EyePayCash se reserva el derecho, a su exclusivo criterio, de no abrir cuentas y suspender cuentas de forma temporal o permanente, incluso cuando sea requerido o recomendado por los requisitos gubernamentales, normativos o de aplicación de la ley, incluso cuando no proporcione información suficiente para verificar su identidad con EyePayCash. Los servicios de EyePayCash son para uso exclusivo del titular de la cuenta registrada. Usted acepta que la información que proporcione a EyePayCash durante la creación de la cuenta y cualquier proceso posterior de verificación de identidad es precisa y completa, y se actualizará según sea necesario para mantenerla. Si es menor de 18 años, no está autorizado a utilizar los servicios de EyePayCash, con o sin registro.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  actividadesProhibidas() {
    let toast = this.toastCtrl.create({
      message: 'Usted acepta que no utilizará los servicios de EyePayCash para realizar ningún tipo de actividad ilegal de ningún tipo ni para tomar ninguna medida que afecte negativamente el rendimiento de los servicios de EyePayCash. No puede participar en ninguna de las siguientes actividades a través de los servicios, ni puede ayudar a un tercero en dicha actividad: (1) intentar obtener acceso no autorizado a nuestros servicios o a la cuenta de otro usuario, (2) hacer cualquier intento de evadir o eludir la seguridad, (3) violar cualquier ley, estatuto, ordenanza o regulación, (4) reproducir, duplicar, copiar, vender o revender nuestros servicios para cualquier propósito excepto lo autorizado en estos términos, (5) participar en cualquier actividad que es abusiva o interfiere o interrumpe nuestros servicios. Si EyePayCash le bloquea el acceso a los servicios EyePayCash (incluso a bloquear su dirección IP), usted acepta no implementar ninguna medida para eludir dicho bloqueo (por ejemplo, enmascarando su dirección IP o usando una dirección IP proxy). El uso de nuestros servicios en conexión con cualquier transacción que involucre productos o servicios ilegales está prohibido. EyePayCash se reserva el derecho de suspender temporal o permanentemente su cuenta o restringir el uso de los servicios de EyePayCash si se produce una violación de esta sección.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  cuentasSuspendidas() {
    let toast = this.toastCtrl.create({
      message: 'Como se indicó en las secciones anteriores, EyePayCash se reserva el derecho, a su exclusivo criterio, de suspender las cuentas de manera temporal o permanente. El bloqueo o la suspensión de esta cuenta puede ser consecuencia, entre otros, de información inconsistente con respecto a su identidad (que es razonable a exclusivo criterio de EyePayCash), una revisión de cumplimiento pendiente, la solicitud de un tercero, la solicitud y/o el pedido de una autoridad, organismo gubernamental, regulador, entidad de justicia, policía, etc., que a criterio exclusivo de EyePayCash son razonables. Usted entiende y acepta que no puede acceder a fondos si su cuenta se suspende o se limita de otra manera, según se detallan en esta sección. En caso de que se resuelva la causa de la suspensión, EyePayCash puede requerir que proporcione una dirección de billetera virtual externa para enviarle los fondos disponibles en su cuenta, o puede transferir fondos a un tercero por orden de un regulador competente, la justicia. entidad, juez, tribunal u otro que sea razonable a la sola discreción de EyePayCash.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  cuentasEliminadas() {
    let toast = this.toastCtrl.create({
      message: 'El usuario es el responsable de respaldar sus fondos, es decir, pasarlos a otra cuenta, ya que una vez elimine su cuenta, el saldo que la persona deje en la billetera será eliminado. Si hace clic en acepto eliminar mi cuenta, sin rescatar el saldo, usted acepta que entiende y es consciente de que perderá el saldo hasta ahora depositado en cualquiera de nuestros servicios (wallet o bóveda); incluyendo las sumas ofertadas o compradas en el Exchange. Si usted elimina su cuenta debe tener presente que su usuario quedara eliminado por completo de la aplicación y que no podrá utilizar nuestro servicio de ninguna forma, perderá de forma permanente todo el historial de transacciones, configuraciones personales y la porción restante de su suscripción.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  descargoGarantias() {
    let toast = this.toastCtrl.create({
      message: 'Nuestros servicios se proporcionan “tal cual” sin ninguna garantía de ningún tipo. Su uso de nuestros servicios es bajo su propio riesgo. Nosotros y nuestros otorgantes de licencias, proveedores de servicios o subcontratistas (si corresponde) no hacemos declaraciones ni garantías sobre la idoneidad de la información, software, productos y servicios contenidos en nuestros servicios para ningún propósito o su cumplimiento con las reglas, principios o leyes contables, y expresamente renuncia a cualquier representación o garantía de que los servicios estarán libres de errores, virus u otros componentes dañinos, que las comunicaciones hacia o desde los servicios serán seguras y no interceptadas, que los servicios y otras capacidades ofrecidas por los servicios serán ininterrumpidas, o que su contenido será preciso, completo y oportuno. Salvo que se indique expresamente en estos términos, renunciamos a todas las garantías y condiciones, expresas, implícitas o reglamentadas entre otras, las garantías implícitas de título, no infracción, comerciabilidad e idoneidad para un propósito en particular. usted reconoce que no habrá entrado en este acuerdo en confianza bajo ninguna garantía o representación, excepto las establecidas específicamente en estos términos.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  sinConsejos() {
    let toast = this.toastCtrl.create({
      message: 'EyePayCash no está actuando y no puede actuar como asesor, incluidos los asuntos financieros, legales, de inversión, seguros y/o impuestos. Cualquier información proporcionada por EyePayCash es solo para información general. Usted es el único responsable de determinar si una transacción contemplada es apropiada para usted.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  indemnizacion() {
    let toast = this.toastCtrl.create({
      message: 'Usted acepta indemnizar a EyePayCash, defendernos y mantenernos a nosotros, a nuestros empleados, agentes, consultores, subsidiarios, socios, afiliados y licenciantes, libres de cualquier reclamo, costo, pérdida, daño, responsabilidad, juicio y gasto (incluidos los honorarios razonables de los abogados y otros profesionales) que surjan o estén relacionados con el uso de nuestros servicios, su violación de estos términos o su violación de cualquier derecho de cualquier otra persona o entidad.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  limiResponsabilidad() {
    let toast = this.toastCtrl.create({
      message: 'En ningún caso nosotros, nuestros licenciantes, proveedores de servicios o subcontratistas (si los hubiera) serán responsables de ningún daño indirecto, especial, incidental, punitivo o consecuencial (incluyendo, sin limitación, pérdida de ganancias, pérdida de uso, pérdida de datos o pérdida de buena voluntad), derivada de o en relación con estos términos de uso, o el desempeño, la operación de nuestros servicios, su acceso a, visualización, uso de los servicios, retraso o incapacidad para acceder, visualizar o utilizar los servicios, cualquier virus informático, información, software, sitios vinculados, productos o servicios obtenidos a través de los servicios, acto u omisión de cualquier empresa utilizando nuestros servicios u otros terceros, ya sea dicha responsabilidad derivada de algún reclamo basado en un incumplimiento del contrato, incumplimiento de garantía, agravio (incluyendo negligencia), responsabilidad por productos o de otra manera. Nosotros y nuestros licenciantes, proveedores de servicios o subcontratistas han sido advertidos de la posibilidad de dichos daños. La limitación de responsabilidad refleja la asignación de riesgo entre las partes. Las limitaciones especificadas en esta sección sobrevivirán y se aplicarán incluso si se encuentra que cualquier recurso limitado especificado en estos términos ha fallado en su propósito esencial. Las limitaciones de responsabilidad proporcionadas en estos términos se aplican en beneficio de nosotros, nuestros licenciantes, proveedores de servicios y subcontratistas. Algunas jurisdicciones no permiten ciertas exenciones de responsabilidad o limitaciones de garantía. solamente se aplicarán exclusiones de responsabilidad o limitaciones que son legales en la jurisdicción aplicable y nuestra responsabilidad se limitará al máximo permitido por la ley.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  separabilidad() {
    let toast = this.toastCtrl.create({
      message: 'Si, por algún motivo, un tribunal de jurisdicción competente considera que alguna disposición de estos términos es inválida o inaplicable, dicha disposición se aplicará en la máxima medida permitida y las demás disposiciones de estos términos seguirán en pleno vigor y efecto.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  arbAplicable() {
    let toast = this.toastCtrl.create({
      message: 'Por favor, lea el siguiente párrafo detenidamente porque requiere arbitrar las disputas con nosotros y limita la manera en la que puede solicitar alivio. Usted y EyePayCash acuerdan arbitrar cualquier disputa que surja de estos términos o su uso de nuestros servicios, a excepción de disputas en las que cualquiera de las partes busque una compensación equitativa y de otro tipo por el supuesto uso ilegal de derechos de autor, marcas comerciales, nombres comerciales, logotipos, secretos comerciales o patentes. el arbitraje le evita usted de juzgar en el tribunal o de tener un juicio con jurado. usted y EyePayCash acuerdan notificarse mutuamente por escrito sobre cualquier disputa dentro de los treinta (30) días posteriores a su surgimiento.El aviso a EyePayCash se enviará a legal@EyePayCash.com. Usted y EyePayCash además acuerdan: (a) intentar una resolución informal antes de cualquier demanda de arbitraje; (b) que cualquier arbitraje ocurrirá en Malta ; (c) que el arbitraje será conducido confidencialmente por un solo árbitro de acuerdo con las reglas de la Ordenanza de Arbitraje de Malta ; y (d) que los tribunales en Malta tienen jurisdicción exclusiva sobre cualquier apelación de un laudo arbitral y sobre cualquier demanda entre las partes no sujetas a arbitraje. Además de los procedimientos y recursos de la clase que se analizan a continuación, el árbitro tiene la autoridad para otorgar cualquier recurso que de otro modo estaría disponible en la corte. Cualquier disputa entre las partes se regirá por estos términos y las leyes de Malta, sin dar efecto a ningún conflicto de principios legales que puedan estipular la aplicación de la ley de otra jurisdicción.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  limitaciones() {
    let toast = this.toastCtrl.create({
      message: 'En la medida permitida por la ley aplicable, acepta que presentará cualquier reclamo o causa de acción que surja o esté relacionada con su acceso o uso de nuestros servicios dentro de los dos años posteriores a la fecha en que surgió o se acumuló dicho reclamo o acción, o dicho reclamo o la causa de acción será renunciar irrevocablemente.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  propiedadNReclamada() {
    let toast = this.toastCtrl.create({
      message: 'Conforme a la legislación aplicable, después de un período específico de inactividad por su parte con respecto a su cuenta de EyePayCash, se le puede solicitar a EyePayCash que informe y/o remita cualquier criptomonedas que tenga bajo custodia de acuerdo con las leyes de propiedad no reclamada.Nuestra incapacidad para ejercer o hacer cumplir cualquier derecho o disposición de estos términos no constituirá una renuncia a ese derecho o disposición.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  acuerdoCompleto() {
    let toast = this.toastCtrl.create({
      message: 'EyePayCash puede asignar estos términos a su compañía matriz, afiliada o subsidiaria, o en relación con una fusión, consolidación o venta u otra disposición de todos o sustancialmente todos sus activos. Estos términos, junto con otros acuerdos que se apliquen a usted.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  politicaPrivacidad() {
    let toast = this.toastCtrl.create({
      message: 'Esta Política de privacidad se aplica a la información que recopilamos de los usuarios de nuestro sitio web en https://eyepaycash.co , nuestros servicios en línea, nuestras aplicaciones móviles para Android e iOS, destinatarios de nuestros correos electrónicos o cuando usted interactúa de otra manera con nosotros. Describe los datos que recopilamos sobre usted y cómo usamos, compartimos y protegemos estos datos.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  comEmail() {
    let toast = this.toastCtrl.create({
      message: 'Si optó por recibir información sobre nuestros productos, actualizaciones y ofertas, utilizaremos su nombre y dirección de correo electrónico para enviarle esta información. Si ya no desea recibir estas comunicaciones, puede darse de baja siguiendo las instrucciones que figuran en los correos electrónicos que recibe o en nuestro sitio web. Tenga en cuenta que podemos enviarle mensajes transaccionales y de relación, incluso si se canceló la suscripción a nuestras comunicaciones de marketing. Por ejemplo, si nuestro servicio se suspende temporalmente por mantenimiento, podríamos enviarle un correo electrónico para que lo actualice.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  enlServicios() {
    let toast = this.toastCtrl.create({
      message: 'Nuestro sitio web puede incluir enlaces a otros sitios web o servicios en línea, Le recomendamos que lea detenidamente la declaración de privacidad de cualquier sitio web que visite.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  camPolitica() {
    let toast = this.toastCtrl.create({
      message: 'Podemos hacer cambios a esta Política de privacidad. Si hacemos cambios, se lo notificaremos mediante la revisión de la fecha en la parte superior de la política. Si realizamos cambios sustanciales, lo haremos de acuerdo con los requisitos legales aplicables, y publicaremos un aviso en nuestro sitio web y aplicaciones móviles que lo alertarán sobre los cambios sustanciales antes de que dichos cambios entren en vigencia. Le recomendamos que revise periódicamente esta página para obtener la información más reciente sobre nuestras prácticas de privacidad. Para mantener sus datos personales exactos, actualizados y completos, contáctenos como se especifica a continuación. Tomaremos las medidas razonables para actualizar o corregir los datos personales en nuestra posesión que haya enviado previamente utilizando nuestros servicios. Siéntase libre de contactarnos si tiene alguna pregunta sobre nuestra Política de privacidad o las prácticas de información de los Servicios de EyePayCash.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  aceptarTerminos() {
    this.userProvider.setCheck_Terminos(true);
    this.view.dismiss(true);
  }

  goRegister() {
    this.navCtrl.pop();
  }

}
