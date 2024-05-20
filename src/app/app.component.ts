import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from "./footer/footer.component";
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";
import { WorkspacesComponent } from "./components/workspaces/workspaces.component";
import { AddWorkspacesComponent } from "./components/add-workspaces/add-workspaces.component";
import { PersonalListComponent } from "./personal-list/personal-list.component";
import { PersonalTaskCreationComponent } from "./personal-task-creation/personal-task-creation.component";
import { WorkspacetasksService } from "./services/workspacetasks";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormGroup,
    NgOptimizedImage,
    ReactiveFormsModule,
    HeaderComponent,
    HomeComponent,
    HomepageComponent,
    SignoutComponent,
    FooterComponent,
    WorkspacesComponent,
    AddWorkspacesComponent,
    PersonalListComponent,
    PersonalTaskCreationComponent,
    BrowserModule,

  ],
  providers: [
    WorkspacetasksService
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'priority-panda';
}
