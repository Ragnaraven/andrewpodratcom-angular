import { Component, HostListener } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  route: string;

  constructor(public themeService: ThemeService, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route = event.url;
      }

      if (event instanceof NavigationError) {
        this.route = event.url;
      }
    });

    /*setTimeout(() => {
      let i = 0;
      setInterval(() => {
        i = (i + 1) % themeService.themes.length;
        themeService.setTheme(themeService.themes[i]);
      }, 3000);
    }, 100);*/
  }

  smoothScrollToAnchor(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    //this.aspectRatio.onResize(event.target.innerWidth / event.target.innerHeight);
  }
}
