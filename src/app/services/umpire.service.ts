import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IUmpire } from 'app/models/IUmpire';

@Injectable()
export class UmpireService {

  constructor(private db:AngularFireDatabase){
}

getUmpires(path):Observable<IUmpire[]>{
    return this.db.list(path).valueChanges();
}

}
