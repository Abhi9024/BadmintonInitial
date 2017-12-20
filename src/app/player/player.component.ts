import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IPlayer } from 'app/models/IPlayer';
import { PlayerService } from 'app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  getPlayers(){
    this.playerList = this.playerService.getPlayers('/Players');
  }
  playerList: Observable<IPlayer[]>;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

}
