import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent implements OnInit {

  @Input() text: string; 
  @Input() icon: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
