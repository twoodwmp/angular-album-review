import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Album } from "./album";
import { AlbumService } from "./album.service";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'album-score',
    templateUrl: './album-score.component.html'
})

export class AlbumScoreComponent {
    @Input() albums: Album[];
    constructor (
    // private heroService: HeroService,
    // private route: ActivatedRoute,
    // private location: Location

    private albumService: AlbumService
    ) {}

    // ngOnInit() : void {
    //     this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //         .subscribe(hero => this.hero = hero);
    // }

    // goBack() : void {
    //     this.location.back();
    // }

    // save(): void {
    //     this.heroService.update(this.hero).then(() => this.goBack());
    // }

}