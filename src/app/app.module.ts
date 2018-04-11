import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {LaunchNavigator} from '@ionic-native/launch-navigator'; 
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';
import { InfoPage } from '../pages/info/info';

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
    ListPage,
    LoginPage,
    RegisterPage,
    InfoPage
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
    ListPage,
    LoginPage,
    RegisterPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FireDataServiceProvider,
     LaunchNavigator
  ]
})
export class AppModule {}
