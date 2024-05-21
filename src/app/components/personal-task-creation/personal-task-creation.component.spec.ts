import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTaskCreationComponent } from './personal-task-creation.component';

describe('PersonalTaskCreationComponent', () => {
  let component: PersonalTaskCreationComponent;
  let fixture: ComponentFixture<PersonalTaskCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalTaskCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalTaskCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
