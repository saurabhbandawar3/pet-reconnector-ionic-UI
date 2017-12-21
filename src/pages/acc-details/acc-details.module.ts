import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccDetailsPage } from './acc-details';

@NgModule({
  declarations: [
    AccDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccDetailsPage),
  ],
})
export class AccDetailsPageModule {}
