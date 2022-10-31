import { Component, OnInit } from '@angular/core';

import { ProjectListingComponent } from '../../project-listing/project-listing.component';
import { GAMES } from '../../data/projects/games/project-games-list';
//import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games = GAMES;

  deviceInfo = null;

  constructor(/*private deviceService: DeviceDetectorService*/) {
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
}
