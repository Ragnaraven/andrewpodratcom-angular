import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './projects/games/games.component';
import { AppsComponent } from './projects/apps/apps.component';
import { ArtComponent } from './projects/art/art.component';

import { ProjectComponent } from './project/project.component';
import { ImageTextComponent } from './image-text/image-text.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'games', component: GamesComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'art', component: ArtComponent },

  { path: 'project', component: ProjectComponent },
  { path: 'imageText', component: ImageTextComponent },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
