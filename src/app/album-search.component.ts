import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

// Observable class extension
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// import { HeroSearchService } from "./hero-search.service";
// import { Hero } from "./hero";

import { Album } from "./album";
import { AlbumSearchService } from "./album-search.service";


@Component({
  selector: 'album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.css'],
  providers: [AlbumSearchService]
})

export class AlbumSearchComponent implements OnInit {
    heroes: Observable<Album[]>;
    private searchTerms = new Subject<string>();
    constructor(private albumSearchService: AlbumSearchService, private router: Router) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.albumSearchService.search(term)

                : Observable.of<Album[]>())
            .catch(error => {
                console.log(error);
                return Observable.of<Album[]>([]);
            });
    }

    /// DEPRECATED
    // gotoDetail(hero: Hero): void {
    //     let link = ['detail', hero.id];
    //     this.router.navigate(link);
    // }
}      