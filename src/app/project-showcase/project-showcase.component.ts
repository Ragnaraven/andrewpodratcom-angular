import { Component, OnInit, Input } from '@angular/core';
import { ProjectGame } from '../data/projects/games/project-game';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.scss']
})
export class ProjectShowcaseComponent implements OnInit {

  @Input() project: ProjectGame;

  constructor() { }

  ngOnInit(): void {
  }

}
