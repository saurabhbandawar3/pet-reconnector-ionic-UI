import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FPetDetailsPage } from './f-pet-details';

@NgModule({
  declarations: [
    FPetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FPetDetailsPage),
  ],
})
export class FPetDetailsPageModule {}
