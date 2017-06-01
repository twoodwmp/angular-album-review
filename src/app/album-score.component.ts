import { Component, Input, OnInit, OnChanges, AfterContentInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Album } from "./album";
import { AlbumService } from "./album.service";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'album-score',
    templateUrl: './album-score.component.html'
})

export class AlbumScoreComponent implements AfterContentInit {
    @Input() albums: Album[];
    public displayScore: number;

    constructor ( private albumService: AlbumService) {}

     ngOnInit() : void {
        //  this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
        //      .subscribe(hero => this.hero = hero);
     }

     ngOnChanges(changes: SimpleChanges) {
         //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
         //Add 'implements OnChanges' to the class.
         this.updateDisplayScore();
     }

     ngAfterContentInit() {
         //Called after ngOnInit when the component's or directive's content has been initialized.
         //Add 'implements AfterContentInit' to the class.
         // this.calculateDisplayScore();
     }

     calculateDisplayScore() :  number {
        if (!this.albums) { return null; };
        let totalScore: number = 0;
        for (let a of this.albums) {
            totalScore += parseInt(a.rating);
        }
        return totalScore/this.albums.length;
     }

     updateDisplayScore() : void {
        this.displayScore = this.calculateDisplayScore();
     }

    // goBack() : void {
    //     this.location.back();
    // }

    // save(): void {
    //     this.heroService.update(this.hero).then(() => this.goBack());
    // }

}