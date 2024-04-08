import { Component, OnInit } from '@angular/core';
import { ViewWorkspaceService } from "../../services/view-workspace-service";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-workspaces',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgForOf,
  ],
  standalone:true,
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})

export class WorkspacesComponent implements OnInit {

  allworkspaces: any[] = [];

  constructor(private service: ViewWorkspaceService) {}

  ngOnInit(): void {
    this.service.getWorkspace().subscribe(workspace => {
      this.allworkspaces = workspace;
    });
  }

  goToCalendar() {
    console.log("This navigates to calendar page");
  }

  addWorkspace() {
    console.log("This navigates to page for workspace addition");
  }
}
