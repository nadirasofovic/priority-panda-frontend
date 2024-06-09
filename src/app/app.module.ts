import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { AddWorkspacesComponent } from './components/add-workspaces/add-workspaces.component';
import { PersonalListComponent } from './components/personal-list/personal-list.component';
import { PersonalTaskCreationComponent } from './components/personal-task-creation/personal-task-creation.component';
import { BadgesComponent } from './components/badges/badges.component';
import { HomeComponent } from './components/home/home.component';
import { SignoutComponent } from './components/signout/signout.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import {BadgeService} from "./services/badges";
import {WorkspacepageComponent} from "./components/workspacepage/workspacepage.component";

@NgModule({
  declarations: [
    AppComponent,
    AddWorkspacesComponent,
    BadgesComponent,
    CalendarComponent,
    WorkspacepageComponent,
    WorkspacesComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FullCalendarModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PersonalListComponent,
    PersonalTaskCreationComponent,
    HomeComponent,
    SignoutComponent,
    AnalyticsComponent,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [
    BadgeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
