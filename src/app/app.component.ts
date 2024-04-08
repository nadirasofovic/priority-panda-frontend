import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
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

=======
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {PersonalListComponent} from "./personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./personal-task-creation/personal-task-creation.component";
>>>>>>> ed1e1901a44e0d5fbb1b87673a1930310cac6ef4

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomepageComponent,FooterComponent],
=======
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, PersonalListComponent, PersonalTaskCreationComponent],
>>>>>>> ed1e1901a44e0d5fbb1b87673a1930310cac6ef4
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}

<<<<<<< HEAD
=======
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomeComponent,FooterComponent,SignoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'priority-panda';
}
>>>>>>> origin/main
=======

>>>>>>> ed1e1901a44e0d5fbb1b87673a1930310cac6ef4
