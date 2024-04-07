import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent, FooterComponent, WorkspacesComponent, AddWorkspacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
