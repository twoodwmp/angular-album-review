import { Component, NgModule, OnInit } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";

/// DEPRECATED
// import { Hero } from "./hero";
// import { HeroService } from './hero.service';

import { Album } from "./album";
import { AlbumService } from "./album.service";

@Component({
  selector: 'album-review-grid',
  templateUrl: './album-review-grid.component.html',
  styleUrls: ['./album-review-grid.component.css']
})

export class AlbumReviewGridComponent implements OnInit  { 
  albums: Album[] = [];
  selectedAlbum: Album;

  constructor(private albumService: AlbumService, private router: Router) { }
  
  /// Initialization lifecycle hook
  ngOnInit(): void {
    //this.getHeroList();
  }

/// DEPRECATED
//   /// Handler entry for New hero button click
//   btnNewHeroHandler(newHeroName: string) {
//     this.addHero(newHeroName);
//   }

//   /// pushes new hero onto hero list model
//   addHero(name: string): void {
//     name = name.trim();
//     if (!name) { return; }
//     this.heroService.create(name)
//       .then(hero => {
//         this.heroes.push(hero);
//         this.selectedHero = null;
//       });
//   }

//   deleteHero(hero :Hero) : void {
//     this.heroService
//       .delete(hero.id)
//       .then(herolol => {
//         this.heroes = this.heroes.filter(h => h !== hero);
//         if (this.selectedHero === hero) {this.selectedHero = null}
//       });
//   }

//   /// Handler entry method for hero list selection
//   liSelectHeroHandler(selection: Hero): void {
//     if (selection) {
//       this.setSelectedHero(selection);
//     }
//   }

//   /// Updates model with selection, tells view to reflect selection
//   setSelectedHero(hero: Hero) {
//     if (hero) {
//       this.selectedHero = hero;
//     }
//   }

//   gotoHeroDetails(): void {
//     this.router.navigate(['/detail', this.selectedHero.id]);
//   }

//   getHeroList(): void {
//     this.heroService.getHeroList().then(heroes => this.heroes = heroes);
//   }

}
