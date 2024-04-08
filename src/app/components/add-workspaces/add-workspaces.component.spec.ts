import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkspacesComponent } from './add-workspaces.component';

describe('AddWorkspacesComponent', () => {
  let component: AddWorkspacesComponent;
  let fixture: ComponentFixture<AddWorkspacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkspacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWorkspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
