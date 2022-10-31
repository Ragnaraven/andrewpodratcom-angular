import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../data/projects/project';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-project-listing-mac',
  templateUrl: './project-listing-mac.component.html',
  styleUrls: ['./project-listing-mac.component.scss']
})
export class ProjectListingMACComponent implements OnInit {

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
