import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByPriorityComponent } from './task-by-priority.component';

describe('TaskByPriorityComponent', () => {
  let component: TaskByPriorityComponent;
  let fixture: ComponentFixture<TaskByPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskByPriorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskByPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
