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
