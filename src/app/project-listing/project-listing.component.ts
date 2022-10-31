import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../data/projects/project';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit {

  @Input() project: Project;  

  deviceInfo = null;

  constructor(private deviceService: DeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit(): void {
  }

  mobileCheck () {
    return this.deviceService.isMobile();
  }

  smallScreenCheck () {
    return this.deviceService.isMobile() || window.innerWidth < 800 || window.innerHeight < 500;
  }

}
