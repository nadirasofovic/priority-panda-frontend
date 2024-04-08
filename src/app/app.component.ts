<<<<<<< HEAD
import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {FormGroup,ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
<<<<<<< HEAD
import { HomepageComponent } from "./homepage/homepage.component";
import { FooterComponent } from "./footer/footer.component";
import {WorkspacetasksService} from "./services/workspacetasks";
=======
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
>>>>>>> origin/main

>>>>>>> origin/main

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent, FooterComponent, WorkspacesComponent, AddWorkspacesComponent],
=======
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomepageComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'priority-panda';
}

>>>>>>> origin/main
=======
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomeComponent,FooterComponent,SignoutComponent],
>>>>>>> origin/main
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
<<<<<<< HEAD

=======
  title = 'priority-panda';
>>>>>>> origin/main
}
>>>>>>> origin/main
