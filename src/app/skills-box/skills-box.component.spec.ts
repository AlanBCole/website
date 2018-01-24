import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBoxComponent } from './skills-box.component';

describe('SkillsBoxComponent', () => {
  let component: SkillsBoxComponent;
  let fixture: ComponentFixture<SkillsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
