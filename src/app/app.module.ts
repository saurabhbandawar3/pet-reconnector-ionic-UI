import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FormlostPage } from '../pages/formlost/formlost';
import { FormFoundPage } from '../pages/form-found/form-found';
import { LPetDetailsPage } from '../pages/l-pet-details/l-pet-details';
import { FPetDetailsPage } from '../pages/f-pet-details/f-pet-details';
import { AccDetailsPage } from '../pages/acc-details/acc-details';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from './../pages/contact/contact';
import { DoantePage } from './../pages/doante/doante';
import { ListFoundPage } from './../pages/list-found/list-found';
import { ListlostPage } from './../pages/listlost/listlost';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormlostPage,
    FormFoundPage,
    AccDetailsPage,
    AboutPage,
    ContactPage,
    DoantePage,
    ListFoundPage,
    ListlostPage,
    LPetDetailsPage,
    FPetDetailsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormlostPage,
    FormFoundPage,
    LPetDetailsPage,
    FPetDetailsPage,
    AccDetailsPage,
    AboutPage,
    ContactPage,
    DoantePage,
    ListFoundPage,
    ListlostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
