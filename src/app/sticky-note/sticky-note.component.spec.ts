import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookPageComponent } from './sticky-note.component';

describe('NotebookPageComponent', () => {
  let component: NotebookPageComponent;
  let fixture: ComponentFixture<NotebookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
