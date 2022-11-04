import { Component, OnInit } from '@angular/core';

import { GAMES } from '@data/projects';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games = GAMES;

  deviceInfo = null;

  constructor(public resumeService: ResumeService) {
    //this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit(): void {}

  scrollToElement($elementName): void {
    var temp = document.getElementById('item-' + $elementName);
    temp.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  mobileCheck() {
    return false;
    // return this.deviceService.isMobile();
  }

  smallScreenCheck() {
    return false; /*(
      this.deviceService.isMobile() ||
      window.innerWidth < 800 ||
      window.innerHeight < 500
    );*/
  }
}
