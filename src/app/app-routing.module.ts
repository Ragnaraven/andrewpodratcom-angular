import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AppsComponent } from './apps/apps.component';
import { ArtComponent } from './art/art.component';

import { ImageTextComponent } from './image-text/image-text.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'games', component: GamesComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'art', component: ArtComponent },

  { path: 'imageText', component: ImageTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
