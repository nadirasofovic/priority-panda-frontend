import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

<<<<<<< HEAD

=======
>>>>>>> origin/main
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'priority-panda-frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('priority-panda-frontend');
=======
  it(`should have the 'priority-panda' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('priority-panda');
>>>>>>> origin/main
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, priority-panda-frontend');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, priority-panda');
>>>>>>> origin/main
  });
});
