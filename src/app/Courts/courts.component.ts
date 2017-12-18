import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule  } from 'angularfire2/database';
import {  AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
   selector : 'courts-courts',
   templateUrl : './courts.component.html'
})
export class CourtsComponent{

   courtList : Observable<any[]>;
  

  constructor(private db:AngularFireDatabase){
      this.courtList = this.getCourts("/Courts");
     
  }
  
  getCourts(path):Observable<any[]>{
      return this.db.list(path).valueChanges();
  }

  

}