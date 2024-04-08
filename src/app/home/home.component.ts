import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  goToToDoList() {
    return console.log("This page navigates to ToDoList.");
  }
  goToWorkspaces() {
    return console.log("This page navigates to Workspaces page.");
  }
}
