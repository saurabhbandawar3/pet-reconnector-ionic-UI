import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListlostPage } from '../listlost/listlost';

@IonicPage()
@Component({
  selector: 'page-formlost',
  templateUrl: 'formlost.html',
})
export class FormlostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormlostPage');
  }
  gotolostPage(){
    this.navCtrl.setRoot(ListlostPage);
   }
   gotophomePage1(){
     this.navCtrl.setRoot(HomePage);
    }

}
