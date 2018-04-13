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

  Get    
  
      
    
}
