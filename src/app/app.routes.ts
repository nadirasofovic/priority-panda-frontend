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




