import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { GamesComponent } from './home-projects/games/games.component';
import { ArtComponent } from './home-projects/art/art.component';
import { AppsComponent } from './home-projects/apps/apps.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ShowcaseComponentComponent } from './showcase-component/showcase-component.component';
import { ObjViewerComponent } from './home-projects/components/obj-viewer/obj-viewer.component';
import { MacComponent } from './work/mac/mac.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeProjectsComponent,
    GamesComponent,
    ArtComponent,
    AppsComponent,
    ProjectListingComponent,
    ShowcaseComponentComponent,
    ObjViewerComponent,
    MacComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
