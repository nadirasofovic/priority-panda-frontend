import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {NgForOf} from "@angular/common";
import { RouterOutlet } from '@angular/router';
import {FormGroup,ReactiveFormsModule} from "@angular/forms";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacetasksService} from "./services/workspacetasks";
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { FooterComponent } from "./footer/footer.component";
import { SignoutComponent } from "./components/signout/signout.component";
import { HomeComponent } from "./components/home/home.component";
import {NgOptimizedImage} from "@angular/common";
import {PersonalListComponent} from "./components/personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./components/personal-task-creation/personal-task-creation.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
    NgForOf,
    FormGroup,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    WorkspacesComponent,
    AddWorkspacesComponent,
    PersonalListComponent,
    WorkspacetasksService,
  PersonalTaskCreationComponent,
    HomeComponent,
  SignoutComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  title: any;
}
