
import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {CommonModule} from '@angular/common';
import {NgForOf} from "@angular/common";
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {FormGroup,ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FooterComponent } from "./footer/footer.component";
import {WorkspacetasksService} from "./services/workspacetasks";
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";

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
  styleUrl: './app.component.css'
})


export class AppComponent {
  title: any;
}
