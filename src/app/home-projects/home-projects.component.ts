import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    //this.router.navigate(['games']);
  }
}
