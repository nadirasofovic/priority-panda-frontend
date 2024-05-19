
import { RouterModule,Routes } from '@angular/router';
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {NgModule} from "@angular/core";
import {WorkspacepageComponent} from "./workspacepage/workspacepage.component";
import {HomeComponent} from './home/home.component';
import {SignoutComponent} from "./signout/signout.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

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
  { path: 'home', component: HomeComponent },
  { path: 'sign-out', component: SignoutComponent },
];

