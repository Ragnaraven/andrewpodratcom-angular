import { Component, OnInit } from '@angular/core';
import { Project, Program, Language } from '../data/Project';

import { ProjectComponent } from '../project/project.component';
import { ProjectsServiceService } from '../projects-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [ProjectComponent]
})
export class HomeComponent implements OnInit {

  projectsGames: Project[];
  projectsApps: Project[];

  constructor(private projectsService: ProjectsServiceService) { }

  ngOnInit(): void {
    this.projectsGames = this.projectsService.getProjectGames();
    this.projectsApps = this.projectsService.getProjectApps();
  }
}
