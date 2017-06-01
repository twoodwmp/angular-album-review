import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/// DEPRECATED
// import { HeroDashboardComponent } from "./dashboard.component";
// import { HeroListComponent } from "./hero-list.component";
// import { HeroDetailComponent } from "./hero-detail.component";

import { AlbumReviewPage } from "./album-review-page.component";

const ROUTES: Routes = [
    { path: '', redirectTo: '/album-reviews', pathMatch: 'full' },
    { path: 'album-reviews', component: AlbumReviewPage }

    /// DEPRECATED
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes', component: HeroListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }