import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public authService: AuthProvider
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
