import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryArtistDataService } from './in-memory-artist-data.service';
import { InMemoryAlbumReviewsDataService } from './in-memory-album-reviews-data.service';

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent }  from './app.component';
import { AlbumReviewPage } from "./album-review-page.component";
import { AlbumScoreComponent } from "./album-score.component";

// Services
import { AlbumService } from "./album.service";


/// DEPRECATED
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroListComponent } from './hero-list.component'
// import { HeroDashboardComponent } from './dashboard.component';
// import { HeroSearchComponent } from './hero-search.component';
// import { HeroService } from './hero.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryAlbumReviewsDataService) ],
  declarations: [ AppComponent, AlbumReviewPage, AlbumScoreComponent  ],// HeroDetailComponent, HeroListComponent, HeroDashboardComponent, HeroSearchComponent ],
  providers: [AlbumService], // [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }