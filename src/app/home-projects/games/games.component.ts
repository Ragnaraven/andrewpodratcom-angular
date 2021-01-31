import { Component, OnInit } from '@angular/core';

import { ProjectListingComponent } from '../../project-listing/project-listing.component';
import { GAMES } from '../../data/projects/games/project-games-list';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games = GAMES;

  constructor() { }

  ngOnInit(): void {


  }

  scrollToElement($elementName): void {
    console.log($elementName)
    var temp = document.getElementById('item-' + $elementName);
    temp.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
