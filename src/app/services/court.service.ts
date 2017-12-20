import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ICourt } from 'app/models/ICourt';

@Injectable()
export class CourtService {

  constructor(private db:AngularFireDatabase){
  }
  
  getCourts(path):Observable<ICourt[]>{
      return this.db.list(path).valueChanges();
  }
}
