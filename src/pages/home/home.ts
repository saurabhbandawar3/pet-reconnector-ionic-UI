import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormlostPage } from '../formlost/formlost';
import { FormFoundPage } from '../form-found/form-found';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 gotoPage1(){
   this.navCtrl.setRoot(FormlostPage);
  }
  gotoPage2(){
    this.navCtrl.setRoot(FormFoundPage);
   }
}
