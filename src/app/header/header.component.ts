import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
<<<<<<< HEAD
export class HeaderComponent{
  goToHome(){
    return console.log("This navigates to homepage");
  }
  goToSignOut(){
    return console.log("THis navigates to sign out page");
  }
}

=======
export class HeaderComponent {
  goToHome() {
    return console.log("This page navigates to Home.");
  }
  goToSignOut() {
    return console.log("This page navigates to SignOut page.");
  }
}
>>>>>>> origin/main