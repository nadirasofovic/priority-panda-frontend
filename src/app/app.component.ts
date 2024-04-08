import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {PersonalListComponent} from "./personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./personal-task-creation/personal-task-creation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, PersonalListComponent, PersonalTaskCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}


