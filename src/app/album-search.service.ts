import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Album } from "./album";

@Injectable()
export class AlbumSearchService {
    constructor(private http: Http) {}

    search(term: string): Observable<Album[]> {
        return this.http
            .get(`app/heroes/?name=${term}`) // TODO: change API endpoint
            .map(response => response.json().data as Album[]);
    }
}