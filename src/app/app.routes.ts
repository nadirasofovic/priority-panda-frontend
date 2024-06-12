import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {WorkspacepageComponent} from "./components/workspacepage/workspacepage.component";
import {AddWorkspacesComponent} from "./components/add-workspaces/add-workspaces.component";
import {WorkspacesComponent} from "./components/workspaces/workspaces.component";
import {SignoutComponent} from "./components/signout/signout.component";
import {PersonalListComponent} from "./components/personal-list/personal-list.component";
import {PersonalTaskCreationComponent} from "./components/personal-task-creation/personal-task-creation.component";
import {BadgesComponent} from "./components/badges/badges.component";

const routes: Routes = [
  { path: 'addWorkspace', component: AddWorkspacesComponent },
  { path: 'workspaces', component: WorkspacesComponent }, //ne
  { path: 'homepage', component: HomepageComponent },
  { path: 'workspacePage', component: WorkspacepageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-out', component: SignoutComponent },
  { path: 'personalList', component: PersonalListComponent },
  { path: 'personalTaskCreation', component: PersonalTaskCreationComponent },
  { path: 'Badges', component: BadgesComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'workspaces' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export { routes };
