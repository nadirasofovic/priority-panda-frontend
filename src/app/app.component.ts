import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormGroup,ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FooterComponent } from "./footer/footer.component";
import {WorkspacetasksService} from "./services/workspacetasks";
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";
import {NgOptimizedImage} from "@angular/common";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {PersonalListComponent} from "./personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./personal-task-creation/personal-task-creation.component";



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, FormGroup,NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomeComponent, HomepageComponent,SignoutComponent,FooterComponent, WorkspacesComponent, AddWorkspacesComponent, PersonalListComponent, PersonalTaskCreationComponent, PersonalListComponent,WorkspacetasksService, AddWorkspacesComponent ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'priority-panda';
}
