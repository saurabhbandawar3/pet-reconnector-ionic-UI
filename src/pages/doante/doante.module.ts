import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoantePage } from './doante';

@NgModule({
  declarations: [
    DoantePage,
  ],
  imports: [
    IonicPageModule.forChild(DoantePage),
  ],
})
export class DoantePageModule {}
