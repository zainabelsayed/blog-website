import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementSectionComponent } from './task-management-section.component';

describe('TaskManagementSectionComponent', () => {
  let component: TaskManagementSectionComponent;
  let fixture: ComponentFixture<TaskManagementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagementSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
