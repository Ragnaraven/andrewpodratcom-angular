import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ssi-icon',
  templateUrl: './ssi-icon.component.html',
  styleUrls: ['./ssi-icon.component.scss'],
})
export class SsiIconComponent {
  @Input() image: string;
  @ViewChild('imageRef') imageRef: ElementRef;

  constructor(public elref: ElementRef) {}

  public playSpin() {
    this.imageRef.nativeElement.classList.remove('spinner');
    setTimeout(() => {
      this.imageRef.nativeElement.classList.add('spinner');
    }, 50);
  }
}
