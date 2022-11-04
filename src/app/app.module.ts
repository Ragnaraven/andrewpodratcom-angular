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

import { ProjectListingComponent } from './components/project-listing/project-listing.component';
import { ShowcaseComponentComponent } from './components/showcase-component/showcase-component.component';
import { ObjViewerComponent } from './components/obj-viewer/obj-viewer.component';
import { MacComponent } from './components/project/mac/mac.component';
import { AnimSignatureComponent } from './components/anim-signature/anim-signature.component';
import { SsiComponent } from './components/project/ssi/ssi.component';
import { SsiIconComponent } from './components/project/ssi/ssi-icon/ssi-icon.component';
import { ExpandableContainerComponent } from './components/expandable-container/expandable-container.component';
import { LightboxModule } from 'ngx-lightbox';
import { LightboxDirective } from './directives/lightbox.directive';
import { LightboxGroupDirective } from './directives/lightbox-group.directive';
import { YouTubePlayerModule } from '@angular/youtube-player';

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
    AnimSignatureComponent,
    SsiComponent,
    SsiIconComponent,
    ExpandableContainerComponent,
    LightboxDirective,
    LightboxGroupDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LightboxModule,
    YouTubePlayerModule,
  ],
  exports: [LightboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
