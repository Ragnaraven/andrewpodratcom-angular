import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListingMACComponent } from './project-listing-mac.component';

describe('ProjectListingMACComponent', () => {
  let component: ProjectListingMACComponent;
  let fixture: ComponentFixture<ProjectListingMACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListingMACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListingMACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
