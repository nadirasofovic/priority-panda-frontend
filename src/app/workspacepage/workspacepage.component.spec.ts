import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacePageComponent } from './workspacepage.component';

describe('WorkspacepageComponent', () => {
  let component: WorkspacePageComponent;
  let fixture: ComponentFixture<WorkspacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspacePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkspacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
