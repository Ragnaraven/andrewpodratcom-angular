import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponentComponent } from './showcase-component.component';

describe('ShowcaseComponentComponent', () => {
  let component: ShowcaseComponentComponent;
  let fixture: ComponentFixture<ShowcaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
