import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CartPage} from '../cart/cart';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import {  } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import {AuthProvider} from '../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import {ProductDetailsPage} from '../product-details/product-details';


//import {CartServiceProvider} from '../../providers/cart-service/cart-service';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products: Observable<any>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private db: FireDataServiceProvider,
     private viewCtrl: ViewController,
    afAuth: AngularFireAuth,
    //public cartService: CartServiceProvider,
    public authService: AuthProvider
    ) {
      this.products = db.getAll();
   // cartService.loadCartList(this.authService.getLoggedUID());
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  showDetails(product)  : void  {
    this.navCtrl.push(ProductDetailsPage,product);
  }

  addToCart(product)  : void  {
  // this.cartService.addCartItem(this.authService.getLoggedUID(), product);
  }

  openCart() : void {
    this.navCtrl.push(CartPage);
  }



}
