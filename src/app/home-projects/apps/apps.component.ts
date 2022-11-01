import { Component, OnInit } from '@angular/core';

import { ThemeService } from 'src/app/theme/theme.service';

import { APPS } from '@data/projects';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  APPS = APPS;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  scrollToElement($elementName): void {
    var temp = document.getElementById('item-' + $elementName);
    temp.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
