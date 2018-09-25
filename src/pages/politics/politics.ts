import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticsPage');
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
      message: 'El costo y tiempo de realizar transacciones a través de la red fluctúa constantemente; dado que el costo de procesar las transacciones entrantes y salientes cambia contínuamente, recomendamos que siempre verifique esta información. Eyewallet no se hace responsable del tiempo y costo de las comisiones cobradas por la minería de criptomoneda inherente a cualquier tipo de transacción o tipología transaccional en la que haya cualquier cantidad de criptomonedas implicadas, esta nota también aplica para el servicio de Exchange, Bóveda, las transacciones salientes y entrantes contenidas en los términos de servicios pagados.',
      position: 'center',
      showCloseButton: true,
      closeButtonText: "Acepto"
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

  }
}
