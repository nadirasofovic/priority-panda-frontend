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
