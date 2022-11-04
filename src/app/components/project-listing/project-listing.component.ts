import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@data/projects';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss'],
})
export class ProjectListingComponent {
  @Input() project: Project;

  constructor() {}
}
