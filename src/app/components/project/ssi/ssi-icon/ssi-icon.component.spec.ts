import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsiIconComponent } from './ssi-icon.component';

describe('SsiIconComponent', () => {
  let component: SsiIconComponent;
  let fixture: ComponentFixture<SsiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsiIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
