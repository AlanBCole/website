import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceBoxComponent } from './experience-box.component';

describe('ExperienceBoxComponent', () => {
  let component: ExperienceBoxComponent;
  let fixture: ComponentFixture<ExperienceBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
