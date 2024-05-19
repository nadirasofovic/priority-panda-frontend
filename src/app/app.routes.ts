<<<<<<< HEAD

import { RouterModule,Routes } from '@angular/router';
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {NgModule} from "@angular/core";
=======
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {HomepageComponent} from "./homepage/homepage.component";
>>>>>>> origin/main
import {WorkspacepageComponent} from "./workspacepage/workspacepage.component";
import {HomeComponent} from './home/home.component';
import {SignoutComponent} from "./signout/signout.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
<<<<<<< HEAD
=======


import {PersonalListComponent} from "./personal-list/personal-list.component";

import {PersonalTaskCreationComponent} from "./personal-task-creation/personal-task-creation.component";

>>>>>>> origin/main

export const routes: Routes = [
  {
    path: "addWorkspace",
    component: AddWorkspacesComponent
  },
  {
    path: "Workspaces",
    component: WorkspacesComponent
  },
<<<<<<< HEAD
=======

>>>>>>> origin/main
{
path:"homepage",
component:HomepageComponent
},
  {
    path:"workspacepage",
  component:WorkspacepageComponent
  },
<<<<<<< HEAD
  { path: 'home', component: HomeComponent },
  { path: 'sign-out', component: SignoutComponent },
];

=======

  {
    path: 'home',
    component: HomeComponent },

  { path: 'sign-out',
    component: SignoutComponent
  },

  { path: 'homepage',
    component: PersonalListComponent
  },

  { path: 'sign-out',
    component: PersonalListComponent
  },

  { path: 'personal-task-creation',
    component: PersonalTaskCreationComponent
  },

  { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
  ]

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
>>>>>>> origin/main
