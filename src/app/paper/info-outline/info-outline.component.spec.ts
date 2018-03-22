import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOutlineComponent } from './info-outline.component';

describe('InfoOutlineComponent', () => {
  let component: InfoOutlineComponent;
  let fixture: ComponentFixture<InfoOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
