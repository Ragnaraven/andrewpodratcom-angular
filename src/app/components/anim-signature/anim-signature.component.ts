import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anim-signature',
  templateUrl: './anim-signature.component.html',
  styleUrls: ['./anim-signature.component.scss'],
})
export class AnimSignatureComponent implements OnInit {
  @Input() id = 0;
  @Input() loop = true;

  constructor() {}

  ngOnInit(): void {}
}
