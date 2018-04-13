import { Injectable } from '@angular/core';
import { LoadingController, ToastController  } from 'ionic-angular';

/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedServiceProvider {
  loader : any;
  constructor(public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    console.log('Hello SharedServiceProvider Provider');
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
   
  }
  showLoading() : void {
    this.loader.present();
  }

  hideLoading() : void {
    this.loader.dismiss();
  }

  showToast(msg : string) : void {
    let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
    toast.present();
  }

}
