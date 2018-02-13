import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteBlockComponent } from './sticky-note-block.component';

describe('StickyNoteBlockComponent', () => {
  let component: StickyNoteBlockComponent;
  let fixture: ComponentFixture<StickyNoteBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyNoteBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNoteBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
