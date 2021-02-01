import { Component, Input, OnInit } from '@angular/core';
import { Showcase } from '../data/showcase';

import { LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-showcase-component',
  templateUrl: './showcase-component.component.html',
  styleUrls: ['./showcase-component.component.scss']
})
export class ShowcaseComponentComponent implements OnInit {

  @Input() showcase: Showcase;

  constructor() { }

  ngOnInit(): void {

  }

}
