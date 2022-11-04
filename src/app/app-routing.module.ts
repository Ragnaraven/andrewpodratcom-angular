import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { GamesComponent } from './home-projects/games/games.component';
import { AppsComponent } from './home-projects/apps/apps.component';
import { ArtComponent } from './home-projects/art/art.component';

const routes: Routes = [
  { path: '', component: HomeProjectsComponent },

  { path: 'games', component: GamesComponent },
  { path: 'apps', component: AppsComponent },
  //{ path: 'art', component: ArtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
