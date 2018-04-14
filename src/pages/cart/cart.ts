import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import {FireDataServiceProvider} from '../../providers/fire-data-service/fire-data-service';



@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  providers: [AuthProvider]
})
export class CartPage {
  product:any;
  carts: Observable<any[]>;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public authProvider: AuthProvider, 
               private db : FireDataServiceProvider  
              ) {
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.carts = this.db.getCart(this.authProvider.getLoggedUID());
    this.carts.subscribe((result) => {
      console.log("got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    })
  }


  makeCart(){
    let product = "test";

    let cart ={
      productCar:product
    }
  
    this.db.updateCart(this.authProvider.getLoggedUID(),cart);
  }
  /*increment(item : any) : void {
    this.cartServiceProvider.incrementCartItem(this.authProvider.getLoggedUID(),item);
  }
  decrement(item : any) : void {
    this.cartServiceProvider.decrementCartItem(this.authProvider.getLoggedUID(),item);
  } 
  */
  goBack() {
    this.navCtrl.pop();
}


}
