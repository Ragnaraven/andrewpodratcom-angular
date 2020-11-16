import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ImageTextComponent } from './image-text/image-text.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'imageText', component: ImageTextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
