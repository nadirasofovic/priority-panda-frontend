import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']  // Correct plural 'styleUrls'
})
export class HeaderComponent {
  goToHome() {
    console.log("This navigates to homepage");
  }

  goToSignOut() {
    console.log("This navigates to sign out page");
  }
}

