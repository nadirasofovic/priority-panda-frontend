import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {FormGroup,ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { SignoutComponent } from "./signout/signout.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, ReactiveFormsModule, HeaderComponent,HomeComponent,FooterComponent,SignoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'priority-panda';
}
