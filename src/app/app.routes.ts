import { RouterModule,Routes } from '@angular/router';
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {BadgesComponent} from "./components/badges/badges.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

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
    path: "Badges",
    component: BadgesComponent
  },
  {
    path: "Calendar",
    component: CalendarComponent
  }
  ]
