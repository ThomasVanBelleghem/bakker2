import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {FireDataServiceProvider} from '../../providers/fire-data-service/fire-data-service'
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  product:any;

  stores: Observable<any[]>;
 avatarData="";

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetHeight:250,
    targetWidth:250
  }

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public authService: AuthProvider,
     private camera:Camera,
     private db : FireDataServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
    this.product = this.navParams.data;
  }
  goBack() {
    this.navCtrl.pop();
}
addToCart(product)  : void  {
  //this.cartService.addCartItem(this.authService.getLoggedUID(), this.product );
}



}
