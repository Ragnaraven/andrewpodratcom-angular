import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-container',
  templateUrl: './expandable-container.component.html',
  styleUrls: ['./expandable-container.component.scss'],
})
export class ExpandableContainerComponent implements OnInit {
  @Input() @Output() opened = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.opened = !this.opened;
  }
}
