
import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/take';
import {SharedServiceProvider} from '../shared-service/shared-service';


@Injectable()
export class CartServiceProvider {

  cartItems : AngularFireList<any>;
  orderItems: AngularFireList<any>;

  cartAmount : number  = 0;

  constructor(
    private db:AngularFireDatabase,
    private sharedService : SharedServiceProvider
  ) {
    console.log('Hello CartServiceProvider Provider');
  }
  loadCartList(userid : string)  {
    this.cartItems = this.db.list('cart/'+userid);

    this.cartItems.valueChanges().subscribe(
       (rows) => {
         this.cartAmount  = 0;
         rows.forEach(row => { 
           this.cartAmount = this.cartAmount + (row.quantity*row.price);
         });
       },
       (err) => {
         console.log('not authenticated');
       },
       () => { 
         console.log('done.');
       }
   );

 };

 addCartItem(userid : string, product: any){
   

  this.loadCartList(userid);
  
  this.db.object(`cart/${userid}/${product.$key}`).valueChanges().subscribe(data => {
    if(data !== null) {
      //this.incrementCartItem(userid,product);
      console.log("kut");
    } else {
      
      this.db.object('products/'+product.$key, ).valueChanges().subscribe(productData =>{
      //%%%%%%%%%%%%%%%%

        if( productData !=0){ 
     
          var cartItem : any =  {   
              image: product.image,
              name:  product.name,
              price: product.price,
              quantity:1
          }
          this.cartItems.update(product.$key , cartItem);
          this.sharedService.showToast("Item Added!");
        }else{
          this.sharedService.showToast("Item not Available");
        }
      //%%%%%%%%%%%%%%%%
      });

    }
  });
};

  removeCartItem(userid : string, productId : string){
    this.loadCartList(userid);
    this.cartItems.remove(productId).then(_ => this.sharedService.showToast("Item removed!") );
  };/*

  decrementCartItem(userid : string, product : any){
    this.loadCartList(userid);
    
    this.db.object(`cart/${userid}/${product.$key}`).valueChanges().subscribe(data => {
      if(data !== null) {

        if(data.val().quantity-1 > 0){
            this.cartItems.update(product.$key , {quantity: data.val().quantity - 1 });
        }else{
            this.removeCartItem(userid,product.$key);
        }

      }else{
          this.sharedService.showToast("No such element!");
      } 
    });
  };*/

  /*incrementCartItem(userid : string, product : any){
    
   

    this.loadCartList(userid);
    
    this.db.object(`cart/${userid}/${product.$key}`).valueChanges().subscribe(cartItem => {
      if(cartItem.val() !== null) {

        this.db.object('products/'+product.$key,).valueChanges().subscribe(productData =>{
        //%%%%%%%%%%%%%%%%

          if(cartItem.val().quantity+1 <= productData.val().stock && productData.val().available == true){ // checking cart stock
              console.log('Incremented Quantity Successfully');
              this.cartItems.update(product.$key , {quantity: cartItem.val().quantity + 1 });
          }else{
              this.sharedService.showToast('Quality exceeds the Stock!');
          }
          
        //%%%%%%%%%%%%%%%%
        });

      }else{
        this.sharedService.showToast('No such element to increment quantity!');
      } 
    });

  };*/
  


};




