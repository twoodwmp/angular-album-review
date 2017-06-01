import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

/// DEPRECATED
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

import { Album } from "./album";
import { AlbumService } from "./album.service";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'album-detail',
    templateUrl: './album-detail.component.html',
    styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent {
    @Input() album: Album;
    constructor (
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit() : void {
        // this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
        //     .subscribe(hero => this.hero = hero);
    }

    /// DEPRECATED
    // goBack() : void {
    //     this.location.back();
    // }

    // save(): void {
    //     this.heroService.update(this.hero).then(() => this.goBack());
    // }

}