import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestsPageWrapperComponent } from './work-requests-page-wrapper.component';

describe('WorkRequestsPageWrapperComponent', () => {
  let component: WorkRequestsPageWrapperComponent;
  let fixture: ComponentFixture<WorkRequestsPageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestsPageWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestsPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
