import { Component, Input, OnInit } from '@angular/core';
import { ProjectGame } from '../data/projects/games/project-game';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit {

  @Input() project: ProjectGame;  

  constructor() { }

  ngOnInit(): void {
    console.log(screen.width)
  }

}
