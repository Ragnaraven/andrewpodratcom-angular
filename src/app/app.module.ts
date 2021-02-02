import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageTextComponent } from './image-text/image-text.component';

import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { GamesComponent } from './home-projects/games/games.component';
import { ArtComponent } from './home-projects/art/art.component';
import { AppsComponent } from './home-projects/apps/apps.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ShowcaseComponentComponent } from './showcase-component/showcase-component.component';

import { MdbModule } from 'mdb-angular-ui-kit';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';

@NgModule({
  declarations: [
    AppComponent,
    HomeProjectsComponent,
    ImageTextComponent,
    GamesComponent,
    ArtComponent,
    AppsComponent,
    ProjectListingComponent,
    ShowcaseComponentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,

    MdbModule,
    CrystalLightboxModule,
    MatExpansionModule,
    AngularStickyThingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
