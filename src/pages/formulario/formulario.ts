import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormularioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

user:[{ci:number, 
      Nombre:string,
      Apellido:string,
      Telefono:number,
      Direccion:string,
      Correo:string,
      Usuario:string,
      Password:string
    
}];

model:any={};
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

createUser(){
    
    this.user.push(this.model);
 
}
}
