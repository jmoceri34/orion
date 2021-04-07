import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestViewComponent } from './work-request-view.component';

describe('WorkRequestComponent', () => {
  let component: WorkRequestViewComponent;
  let fixture: ComponentFixture<WorkRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
