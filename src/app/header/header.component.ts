import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  goToHome() {
    return console.log("This page navigates to Home.");
  }
  goToSignOut() {
    return console.log("This page navigates to SignOut page.");
  }
}
