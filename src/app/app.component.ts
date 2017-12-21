
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Account',component: AccDetailsPage },
      { title: 'List of Lost Pets',component: ListlostPage },
      { title: 'List of Found Pets',component: ListFoundPage },
      { title: 'Donate',component:DoantePage },
      { title: 'Contact Us',component: ContactPage },
      { title: 'About Us',component:AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
