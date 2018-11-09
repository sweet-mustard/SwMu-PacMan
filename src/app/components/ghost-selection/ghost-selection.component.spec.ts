import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostSelectionComponent } from './ghost-selection.component';

describe('GhostSelectionComponent', () => {
  let component: GhostSelectionComponent;
  let fixture: ComponentFixture<GhostSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
