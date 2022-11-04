import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  QueryList,
} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { LightboxDirective } from './lightbox.directive';

@Directive({
  selector: '[lightbox-group]',
})
export class LightboxGroupDirective implements AfterContentInit {
  @ContentChildren(LightboxDirective, { descendants: true })
  gallery: QueryList<LightboxDirective>;

  private albums = [];
  constructor(private lightbox: Lightbox) {}

  ngAfterContentInit() {
    this.gallery.forEach((lightboxElement) => {
      lightboxElement.setLightboxParent(this);

      const album = {
        src: lightboxElement.source,
        caption: lightboxElement.caption,
        thumb: lightboxElement.thumb,
      };

      this.albums.push(album);
    });
  }

  private indexOfSource(source: string): number {
    return this.albums.findIndex((album) => album.src == source);
  }

  open(source: string): void {
    console.log(this.albums, this.indexOfSource(source));
    this.lightbox.open(this.albums, this.indexOfSource(source));
  }

  close(): void {
    this.lightbox.close();
  }
}
