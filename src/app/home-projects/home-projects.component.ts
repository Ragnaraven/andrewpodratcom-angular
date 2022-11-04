import { Component } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent {
  ENVIRONMENT = environment;

  constructor(public themeService: ThemeService) {}
}
