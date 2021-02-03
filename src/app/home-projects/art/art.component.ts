import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.router.navigate(['/under-construction']);

  }

}
