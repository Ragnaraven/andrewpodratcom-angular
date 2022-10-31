import { Component, OnInit } from '@angular/core';

import { ProjectListingComponent } from '../../project-listing/project-listing.component';
import { APPS } from '../../data/projects/project-apps-list';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  APPS = APPS;

  deviceInfo = null;

  constructor(public themeService: ThemeService) {
    //private deviceService: DeviceDetectorService) {
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
    return false; //this.deviceService.isMobile();
  }

  smallScreenCheck() {
    return false; //this.deviceService.isMobile() || window.innerWidth < 800 || window.innerHeight < 500;
  }
}
