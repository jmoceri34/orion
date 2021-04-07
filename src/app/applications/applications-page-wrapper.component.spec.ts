import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsPageWrapperComponent } from './applications-page-wrapper.component';

describe('ApplicationsPageWrapperComponent', () => {
  let component: ApplicationsPageWrapperComponent;
  let fixture: ComponentFixture<ApplicationsPageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsPageWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
