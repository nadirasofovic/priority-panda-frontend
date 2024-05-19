<<<<<<< HEAD

import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {CommonModule} from '@angular/common';
import {NgForOf} from "@angular/common";
=======
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import { Component } from '@angular/core';
>>>>>>> origin/main
import { RouterOutlet } from '@angular/router';
import {FormGroup,ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FooterComponent } from "./footer/footer.component";
import {WorkspacetasksService} from "./services/workspacetasks";
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";
<<<<<<< HEAD
=======
import {NgOptimizedImage} from "@angular/common";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {PersonalListComponent} from "./personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./personal-task-creation/personal-task-creation.component";


>>>>>>> origin/main

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
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
    WorkspacetasksService,
    HomeComponent,
  SignoutComponent
  ],
templateUrl: './app.component.html',
=======

  imports: [RouterOutlet, FormGroup,NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomeComponent, HomepageComponent,SignoutComponent,FooterComponent, WorkspacesComponent, AddWorkspacesComponent, PersonalListComponent, PersonalTaskCreationComponent, PersonalListComponent,WorkspacetasksService, AddWorkspacesComponent ],

  templateUrl: './app.component.html',
>>>>>>> origin/main
  styleUrl: './app.component.css'
})


export class AppComponent {
<<<<<<< HEAD
  title: any;
=======
  title = 'priority-panda';
>>>>>>> origin/main
}
