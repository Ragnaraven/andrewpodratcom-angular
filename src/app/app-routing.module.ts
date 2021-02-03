import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AppsComponent } from './apps/apps.component';
import { ArtComponent } from './art/art.component';
*/

import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { GamesComponent } from './home-projects/games/games.component';
import { AppsComponent } from './home-projects/apps/apps.component';
import { ArtComponent } from './home-projects/art/art.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: '', component: HomeProjectsComponent },
  
  { path: 'games', component: GamesComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'art', component: ArtComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
 // { path: 'project-showcase', loadChildren: "app/showcase-component/showcase-component.module#ShowcaseComponentComponent" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
