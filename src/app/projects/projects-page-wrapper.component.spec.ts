import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPageWrapperComponent } from './projects-page-wrapper.component';

describe('ProjectsPageWrapperComponent', () => {
  let component: ProjectsPageWrapperComponent;
  let fixture: ComponentFixture<ProjectsPageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPageWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
