import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IPlayer } from 'app/models/IPlayer';

@Injectable()
export class PlayerService {

  constructor(private db:AngularFireDatabase){
  }
  
  getPlayers(path):Observable<IPlayer[]>{
      return this.db.list(path).valueChanges();
  }

}
