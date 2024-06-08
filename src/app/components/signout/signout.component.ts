import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  Login() {
  return console.log("This page navigates to Login page.");
}
}

