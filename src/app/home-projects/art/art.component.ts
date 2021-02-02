import { Component, Input, OnInit } from '@angular/core';
import { ProjectGame } from '../../data/projects/games/project-game';
import { GAMES } from '../../data/projects/games/project-games-list';


@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  games = GAMES;

  project = this.games[0]; 

  constructor() { 
  }


  ngOnInit(): void {
  }


  scrollToElement($elementName): void {
    console.log($elementName)
    var temp = document.getElementById('item-' + $elementName);
    temp.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
