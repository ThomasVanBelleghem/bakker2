import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FireDataServiceProvider {

  constructor(private db:AngularFireDatabase) {
    console.log('Hello FireDataServiceProvider Provider');
  }
  getAll(){
       return this.db.list("products").valueChanges();
      }

  update(id: any, foto:any){
      this.db.object("fotos/" + id).update(foto);
      }   
  getFoto(id:any){
    return this.db.list("fotos/" + id).valueChanges();
  }
      

  addCartItem(id : string, product: any){
   
    this.db.object("carts/" + id).update(product);
  
    }
   getCart(id:any){
      return this.db.list("carts/" + id).valueChanges();
    }
  updateCart(id: any, cart:any){
      this.db.object("carts/" + id).update(cart);
      
      }   
      
}
