import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { HomeComponent } from './home.component';

import { Router } from '@angular/router';

class HomeComponent {
  constructor(private router: Router) {}

  goToToDoList() {
    // Navigate to the to-do list page
    this.router.navigate(['/todo-list']);
  }

  goToWorkspaces() {
    // Navigate to the workspaces page
    this.router.navigate(['/workspaces']);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
