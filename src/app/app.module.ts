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
import { ArtistPage } from "./artist-page.component";
import { AlbumScoreComponent } from "./album-score.component";
import { AlbumSearchComponent } from "./album-search.component";
import { AlbumReviewGridComponent } from "./album-review-grid.component";
import { AlbumDetailComponent } from "./album-detail.component";

// Services
import { AlbumService } from "./album.service";

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryAlbumReviewsDataService) ],
  declarations: [ 
    AppComponent, 
    AlbumReviewPage, 
    ArtistPage, 
    AlbumReviewGridComponent, 
    AlbumScoreComponent, 
    AlbumSearchComponent, 
    AlbumDetailComponent  ],
  providers: [AlbumService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }