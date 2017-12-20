import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CourtService } from 'app/services/court.service';
import { ICourt } from 'app/models/ICourt';

@Component({
   selector : 'courts-courts',
   templateUrl : './courts.component.html'
})
export class CourtsComponent{

   courtList : Observable<ICourt[]>;

  constructor(private courtService: CourtService){
      this.getCourts();  
  }
  
  getCourts(){
    this.courtList = this.courtService.getCourts('/Courts');
  }

}