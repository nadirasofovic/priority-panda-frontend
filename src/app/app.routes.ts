<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/main
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
=======
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {PersonalListComponent} from "./personal-list/personal-list.component";

import {PersonalTaskCreationComponent} from "./personal-task-creation/personal-task-creation.component";

export const routes: Routes = [ { path: 'homepage', component: PersonalListComponent }, { path: 'sign-out', component: PersonalListComponent }, { path: 'personal-task-creation', component: PersonalTaskCreationComponent }, { path: '', redirectTo: '/homepage', pathMatch: 'full' } ];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }




>>>>>>> ed1e1901a44e0d5fbb1b87673a1930310cac6ef4
