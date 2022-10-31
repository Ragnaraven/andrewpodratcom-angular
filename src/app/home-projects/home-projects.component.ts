import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../projects';
import { projects } from '../projects';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  PROJECTS = projects;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    //this.router.navigate(['games']);
  }
}
