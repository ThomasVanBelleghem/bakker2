import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {CartServiceProvider} from '../../providers/cart-service/cart-service';
import {AuthProvider} from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  providers: [CartServiceProvider,AuthProvider]
})
export class CartPage {

  cart: AngularFireList<any>;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public cartServiceProvider : CartServiceProvider,
               public authProvider: AuthProvider
              ) {
                cartServiceProvider.loadCartList(this.authProvider.getLoggedUID());
                this.cart = this.cartServiceProvider.cartItems;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  
  /*increment(item : any) : void {
    this.cartServiceProvider.incrementCartItem(this.authProvider.getLoggedUID(),item);
  }
  decrement(item : any) : void {
    this.cartServiceProvider.decrementCartItem(this.authProvider.getLoggedUID(),item);
  } 
  remove(item : any) : void {
    this.cartServiceProvider.removeCartItem(this.authProvider.getLoggedUID(),item.$key);
  }*/
  goBack() {
    this.navCtrl.pop();
}

}
