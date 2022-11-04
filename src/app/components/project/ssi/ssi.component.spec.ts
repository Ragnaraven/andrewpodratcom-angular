import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsiComponent } from './ssi.component';

describe('SsiComponent', () => {
  let component: SsiComponent;
  let fixture: ComponentFixture<SsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
