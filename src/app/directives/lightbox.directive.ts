import { outputAst } from '@angular/compiler';
import { AfterContentInit, Directive, ElementRef, Output } from '@angular/core';
import { LightboxGroupDirective } from './lightbox-group.directive';

@Directive({
  selector: '[lightbox]',
})
export class LightboxDirective implements AfterContentInit {
  private parent: LightboxGroupDirective;

  @Output() source: string;
  @Output() caption: string;
  @Output() thumb: string;

  constructor(private elRef: ElementRef) {}

  ngAfterContentInit() {
    let image = this.elRef.nativeElement as HTMLImageElement;
    this.source = image.src;

    this.elRef.nativeElement.addEventListener('click', () => {
      this.parent.open(this.source);
    });
  }

  public setLightboxParent(parent: LightboxGroupDirective) {
    this.parent = parent;
  }
}
