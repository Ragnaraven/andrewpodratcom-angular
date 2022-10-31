import { Component, HostListener } from '@angular/core';
import { ThemeService } from './theme/theme.service';

import { Project } from './projects';
import { projects } from './projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  PROJECTS = projects;

  routes = ['Apps & Web', 'Games'];
  route: undefined | 'Apps & Web' | 'Games' = undefined;

  constructor(public themeService: ThemeService) {
    setTimeout(() => {
      let i = 0;
      setInterval(() => {
        i = (i + 1) % themeService.themes.length;
        themeService.setTheme(themeService.themes[i]);
      }, 3000);
    }, 100);
  }

  smoothScrollToAnchor(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    //this.aspectRatio.onResize(event.target.innerWidth / event.target.innerHeight);
  }
}
