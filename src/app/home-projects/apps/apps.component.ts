import { Component, OnInit } from '@angular/core';

import { ThemeService } from 'src/app/theme/theme.service';

import { APPS } from '@data/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  APPS = APPS;

  constructor(public themeService: ThemeService, private router: Router) {}

  ngOnInit(): void {}

  scrollToElement($elementName): void {
    var temp = document.getElementById('item-' + $elementName);
    temp.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  redirect(url: string) {
    console.log(url);
    this.router.navigate([url]);
  }
}
