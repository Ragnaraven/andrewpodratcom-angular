import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@data/projects';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss'],
})
export class ProjectListingComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit(): void {
    let parent = document.querySelector('.menu').parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
      }
      parent = parent.parentElement;
    }
  }
}
