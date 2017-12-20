import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { environment } from './../environments/environment'; 

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourtsComponent } from './Courts/courts.component';
import { UmpireComponent } from './Umpires/umpire.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from 'app/services/player.service';
import { CourtService } from 'app/services/court.service';
import { UmpireService } from 'app/services/umpire.service';
import { DrawComponent } from './draw/draw.component';
import { ScheduleComponent } from './schedule/schedule.component';

const appRoutes: Routes = [
  { path: 'courts', component: CourtsComponent },
  { path: 'umpires', component: UmpireComponent },
  { path: 'players', component: PlayerComponent },
  { path: 'draw', component: DrawComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/courts' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    NotFoundComponent,

    CourtsComponent,
    UmpireComponent,
    PlayerComponent,
    DrawComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [PlayerService,CourtService,UmpireService],
  bootstrap: [AppComponent]
})
export class AppModule {}
