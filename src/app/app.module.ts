import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {LaunchNavigator} from '@ionic-native/launch-navigator'; 
import { InfoPage } from '../pages/info/info';
import { CartPage } from '../pages/cart/cart';
import { ProductsPage } from '../pages/products/products';


//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { SharedServiceProvider } from '../providers/shared-service/shared-service';
import { CartServiceProvider } from '../providers/cart-service/cart-service';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';


var config = {
  apiKey: "AIzaSyCDkcxmzhDUJX_1iGY5fgOKYn3yZ5J2Y4s",
  authDomain: "bakkerapp-2b5bc.firebaseapp.com",
  databaseURL: "https://bakkerapp-2b5bc.firebaseio.com",
  projectId: "bakkerapp-2b5bc",
  storageBucket: "bakkerapp-2b5bc.appspot.com",
  messagingSenderId: "911557147129"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    InfoPage, 
    CartPage,
    ProductsPage,
    ProductDetailsPage,
    ForgotPassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    InfoPage,
    CartPage,
    ProductsPage,
    ProductDetailsPage,
    ForgotPassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
     LaunchNavigator,
    FireDataServiceProvider,
    SharedServiceProvider,
    CartServiceProvider
  ]
})
export class AppModule {}
