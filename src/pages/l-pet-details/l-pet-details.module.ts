import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LPetDetailsPage } from './l-pet-details';

@NgModule({
  declarations: [
    LPetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LPetDetailsPage),
  ],
})
export class LPetDetailsPageModule {}
