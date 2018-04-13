import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Button } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InfoPage } from '../pages/info/info';
import { CartPage } from '../pages/cart/cart';
import { ProductsPage}  from '../pages/products/products';
import { ProductDetailsPage} from '../pages/product-details/product-details';

import{ AuthProvider} from '../providers/auth/auth';
import{CartServiceProvider} from '../providers/cart-service/cart-service';
import { SharedServiceProvider } from '../providers/shared-service/shared-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public authService:AuthProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Info', component: InfoPage },
      { title: 'Cart', component: CartPage },
      { title: 'Products', component: ProductsPage }

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

  logout(){
       console.log("Logging out");
        //TODO: service logout
    this.authService.logout();
        //Navigating to LoginPage
        this.nav.setRoot(LoginPage);
      }
}
