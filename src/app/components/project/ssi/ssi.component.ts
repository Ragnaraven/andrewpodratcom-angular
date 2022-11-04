import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SsiIconComponent } from './ssi-icon/ssi-icon.component';

@Component({
  selector: 'app-ssi',
  templateUrl: './ssi.component.html',
  styleUrls: ['./ssi.component.scss'],
})
export class SsiComponent implements OnInit, OnDestroy {
  @Input() image: string;

  @ViewChild('next') next: SsiIconComponent;

  readonly count = 5;

  nextActive: string = '';
  active: string[] = [];

  timer: any;

  constructor() {}

  ngOnInit(): void {
    this.nextActive =
      this.allImages[Math.floor(Math.random() * this.allImages.length)];

    for (let i = 0; i < this.count; i++)
      this.active.push(
        this.allImages[Math.floor(Math.random() * this.allImages.length)]
      );

    this.timer = setInterval(() => {
      this.cycleSSI();
    }, 2000);
  }

  cycleSSI() {
    this.next.elref.nativeElement.style.animation = null;
    this.next.elref.nativeElement.classList.remove('animate');
    setTimeout(() => {
      this.active.unshift(this.nextActive);
      this.active = this.active.slice(0, this.count);

      this.nextActive =
        this.allImages[Math.floor(Math.random() * this.allImages.length)];

      this.next.elref.nativeElement.classList.add('animate');
      this.next.playSpin();
    }, 50);
  }

  ngOnDestroy() {
    this.timer.cancel();
  }

  allImages: any[] = [
    'ssi (1).webp',
    'ssi (2).webp',
    'ssi (3).webp',
    'ssi (4).webp',
    'ssi (5).webp',
    'ssi (6).webp',
    'ssi (7).webp',
    'ssi (8).webp',
    'ssi (9).webp',
    'ssi (10).webp',
    'ssi (11).webp',
    'ssi (12).webp',
    'ssi (13).webp',
    'ssi (14).webp',
    'ssi (15).webp',
    'ssi (16).webp',
    'ssi (17).webp',
    'ssi (18).webp',
    'ssi (19).webp',
    'ssi (20).webp',
    'ssi (21).webp',
    'ssi (22).webp',
    'ssi (23).webp',
    'ssi (24).webp',
    'ssi (25).webp',
    'ssi (26).webp',
    'ssi (27).webp',
    'ssi (28).webp',
    'ssi (29).webp',
    'ssi (30).webp',
    'ssi (31).webp',
    'ssi (32).webp',
    'ssi (33).webp',
    'ssi (34).webp',
    'ssi (35).webp',
    'ssi (36).webp',
    'ssi (37).webp',
    'ssi (38).webp',
    'ssi (39).webp',
    'ssi (40).webp',
    'ssi (41).webp',
    'ssi (42).webp',
    'ssi (43).webp',
    'ssi (44).webp',
    'ssi (45).webp',
    'ssi (46).webp',
    'ssi (47).webp',
    'ssi (48).webp',
    'ssi (49).webp',
    'ssi (50).webp',
    'ssi (51).webp',
    'ssi (52).webp',
    'ssi (53).webp',
    'ssi (54).webp',
    'ssi (55).webp',
    'ssi (56).webp',
    'ssi (57).webp',
    'ssi (58).webp',
    'ssi (59).webp',
    'ssi (60).webp',
    'ssi (61).webp',
    'ssi (62).webp',
    'ssi (63).webp',
    'ssi (64).webp',
    'ssi (65).webp',
    'ssi (66).webp',
    'ssi (67).webp',
    'ssi (68).webp',
    'ssi (69).webp',
    'ssi (70).webp',
    'ssi (71).webp',
    'ssi (72).webp',
    'ssi (73).webp',
    'ssi (74).webp',
  ];
}
