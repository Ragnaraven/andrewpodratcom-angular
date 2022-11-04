import { Component } from '@angular/core';
import { ResumeService } from './services/resume.service';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public themeService: ThemeService,
    public resumeService: ResumeService
  ) {
    /*setTimeout(() => {
      let i = 0;
      setInterval(() => {
        i = (i + 1) % themeService.themes.length;
        themeService.setTheme(themeService.themes[i]);
      }, 3000);
    }, 100);*/
  }

  smoothScrollToWork() {
    document
      .getElementById(this.resumeService.isGames() ? 'games' : 'apps')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  smoothScrollToAnchor(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  }
}
