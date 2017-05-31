import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { AlbumService } from "./album.service";

// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroListComponent } from './hero-list.component'
// import { HeroDashboardComponent } from './dashboard.component';
// import { HeroSearchComponent } from './hero-search.component';
// import { HeroService } from './hero.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent ],// HeroDetailComponent, HeroListComponent, HeroDashboardComponent, HeroSearchComponent ],
  providers: [AlbumService], // [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }