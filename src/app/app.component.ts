import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {HttpClientModule} from '@angular/common/http';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {DayComponent} from "./components/day/day.component";
import { CommonModule } from '@angular/common';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NgOptimizedImage,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    WorkspacesComponent,
    AddWorkspacesComponent,
    HttpClientModule,
    CommonModule,
    NgForOf,
    DayComponent,
    CalendarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
