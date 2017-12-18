import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireDatabaseModule  } from 'angularfire2/database';
import {  AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';

@Component({
    selector:'umpire-umpire',
    templateUrl: './umpire.component.html'
})
export class UmpireComponent{
    umpiresList : Observable<any[]>;

    constructor(private db:AngularFireDatabase){
        this.umpiresList = this.getUmpires("/Umpires");
    }

    getUmpires(path):Observable<any[]>{
        return this.db.list(path).valueChanges();
    }
}