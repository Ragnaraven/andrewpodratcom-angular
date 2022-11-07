import { outputAst } from '@angular/compiler';
import { Injectable, Output } from '@angular/core';
import { NavigationEnd, NavigationError, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  readonly resumeApp =
    'https://drive.google.com/file/d/17x89_CeS7joV8waohG7i66xYca3vpO4c/view?usp=share_link';
  readonly resumeGame =
    'https://drive.google.com/file/d/1O4ADWBJWAXxdPd4sYMtNKt_Ez0cDDsEy/view?usp=share_link';

  @Output() route: string;
  @Output() resumeLink = this.resumeApp;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route = event.url;

        if (['/', '/apps'].includes(this.route))
          this.resumeLink = this.resumeApp;
        else this.resumeLink = this.resumeGame;
      }

      if (event instanceof NavigationError) {
        this.route = event.url;
        this.resumeLink = this.resumeApp;
      }
    });
  }

  isEmptyOrApps() {
    return this.route == '/' || this.route == '/apps';
  }

  isApps() {
    return this.route == '/apps';
  }

  isEmptyOrGames() {
    return this.route == '/' || this.route == '/games';
  }

  isGames() {
    return this.route == '/games';
  }
}
