import { Component, OnInit, Input } from '@angular/core';
import { Project, Program, Language } from '../data/Project';
import { ImageTextComponent } from '../image-text/image-text.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectCategory: string; 
  @Input() projects: Project[]; 

  constructor() { }

  ngOnInit(): void {
  }

  setMyClasses(project: Project) {
    let classes = {
      projectContainer: project.aa != 0,
      projectContainerAAOff: project.aa == 0,
    };
    return classes;
  }
}
