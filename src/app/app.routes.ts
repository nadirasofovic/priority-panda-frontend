import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router"
import {HomeComponent} from './home/home.component';
import {SignoutComponent} from "./signout/signout.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-out', component: SignoutComponent },
];


