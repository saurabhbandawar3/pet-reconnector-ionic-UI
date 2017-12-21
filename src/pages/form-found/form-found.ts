import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListFoundPage } from '../list-found/list-found';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-form-found',
  templateUrl: 'form-found.html',
})
export class FormFoundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormFoundPage');
  }
  golist1(){
    this.navCtrl.setRoot(ListFoundPage);
   }
   gotohome1(){
     this.navCtrl.setRoot(HomePage);
    }


}
