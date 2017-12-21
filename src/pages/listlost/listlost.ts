import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LPetDetailsPage } from '../l-pet-details/l-pet-details';

@IonicPage()
@Component({
  selector: 'page-listlost',
  templateUrl: 'listlost.html',
})
export class ListlostPage {
  public pages : Array<{img:any,pet:string,age:string,sex:string,size:string,desc:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      {"img" : "dog2.jpg",  "pet" : "Dog" ,"age":"Baby","sex":"Male","size":"small","desc":"Has a mark on nose"},
      {"img" : "cat1.jpg",  "pet" : "Cat" ,"age":"Young","sex":"Female","size":"medium","desc":"Likes to be pampered"},
      {"img" : "horse.jpg",  "pet" : "Horse" ,"age":"Young","sex":"female","size":"large","desc":"Always up for run"},
      {"img" : "dog3.jpg",  "pet" : "Dog" ,"age":"Adult","sex":"male","size":"small","desc":"Fetches Newspaper"},
      {"img" : "cat2.jpg",  "pet" : "Cat" ,"age":"Young","sex":"male","size":"medium","desc":"Mark on head"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListlostPage');
  }
  gotoLostDetails(){
    this.navCtrl.setRoot(LPetDetailsPage);
  }
}
