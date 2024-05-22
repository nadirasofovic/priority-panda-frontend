import { RouterModule,Routes } from '@angular/router';
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {NgModule} from "@angular/core";
import {WorkspacepageComponent} from "./components/workspacepage/workspacepage.component";
import {HomeComponent} from './components/home/home.component';
import {SignoutComponent} from "./components/signout/signout.component";
import {PersonalListComponent} from "./components/personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./components/personal-task-creation/personal-task-creation.component";
import {BadgesComponent} from "./components/badges/badges.component";

export const routes: Routes = [
  {
    path: "addWorkspace",
    component: AddWorkspacesComponent
  },
  {
    path: "Workspaces",
    component: WorkspacesComponent
  },

{
path:"homepage",
component:HomepageComponent
},
  {
    path:"workspacepage",
  component:WorkspacepageComponent
  },

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
  {
    path:'badges',
    component:BadgesComponent
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
