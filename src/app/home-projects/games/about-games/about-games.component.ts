import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-about-games',
  templateUrl: './about-games.component.html',
  styleUrls: ['../../home-shared.scss'],
})
export class AboutGamesComponent {
  constructor(public resumeService: ResumeService) {}
}
