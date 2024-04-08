<<<<<<< HEAD
<<<<<<< HEAD
import { RouterModule,Routes } from '@angular/router';
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";

export const routes: Routes = [
  {
    path: "addWorkspace",
    component: AddWorkspacesComponent
  },
  {
    path: "Workspaces",
    component: WorkspacesComponent
  }
  ]
=======
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {NgModule} from "@angular/core";
import {WorkspacepageComponent} from "./workspacepage/workspacepage.component";

export const routes: Routes = [
{
path:"homepage",
component:HomepageComponent
},
  {
    path:"workspacepage",
  component:WorkspacepageComponent
  }
]
>>>>>>> origin/main
=======
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


>>>>>>> origin/main
