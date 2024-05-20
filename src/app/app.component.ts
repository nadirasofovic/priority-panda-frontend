import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {CommonModule} from '@angular/common';
import {NgForOf} from "@angular/common";
import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from "./footer/footer.component";
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";
import { PersonalListComponent } from "./personal-list/personal-list.component";
import { PersonalTaskCreationComponent } from "./personal-task-creation/personal-task-creation.component";
import { WorkspacetasksService } from "./services/workspacetasks";


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
    WorkspacetasksService,
    HomeComponent,
  SignoutComponent
  ],
templateUrl: './app.component.html',

  ],
  providers: [
    WorkspacetasksService
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

})

export class AppComponent {
  title: any;

}
