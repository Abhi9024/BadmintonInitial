import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireDatabaseModule  } from 'angularfire2/database';
import {  AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';
import { UmpireService } from 'app/services/umpire.service';
import { IUmpire } from 'app/models/IUmpire';

@Component({
    selector:'umpire-umpire',
    templateUrl: './umpire.component.html'
})
export class UmpireComponent{
    umpiresList : Observable<IUmpire[]>;

    constructor(private umpireService: UmpireService){
       this.getUmpires();
    }

    getUmpires(){
        this.umpiresList =  this.umpireService.getUmpires("/Umpires");
    }
}