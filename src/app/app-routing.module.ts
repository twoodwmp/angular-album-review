import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlbumReviewPage } from "./album-review-page.component";

// TODO: Establish other routes
const ROUTES: Routes = [
    { path: '', redirectTo: '/album-reviews', pathMatch: 'full' },
    { path: 'album-reviews', component: AlbumReviewPage }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }