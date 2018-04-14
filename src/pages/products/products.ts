import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CartPage} from '../cart/cart';
import { AngularFireModule, FirebaseAppProvider } from 'angularfire2';
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
  carts: Observable<any[]>;
  products: Observable<any>;
  product:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private db: FireDataServiceProvider,
     private viewCtrl: ViewController,
    afAuth: AngularFireAuth,
    public authProvider: AuthProvider, 
    ) {
      this.products = db.getAll();
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.carts = this.db.getCart(this.authProvider.getLoggedUID());
    this.carts.subscribe((result) => {
      console.log("got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    })
  }
  showDetails(product)  : void  {
    this.navCtrl.push(ProductDetailsPage,product);
  }

  addToCart(product)  : void  {
    
    console.log(product);
    let cart ={
      productCar: product
    }
  
    this.db.updateCart(this.authProvider.getLoggedUID(),cart);
  }



  openCart() : void {
    this.navCtrl.push(CartPage);
  }



}
