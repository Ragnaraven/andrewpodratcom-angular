import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-about-apps',
  templateUrl: './about-apps.component.html',
  styleUrls: ['../../home-shared.scss'],
})
export class AboutAppsComponent {
  constructor(public resumeService: ResumeService) {}
}
