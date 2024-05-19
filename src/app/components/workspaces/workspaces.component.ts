import { Component, OnInit } from '@angular/core';
import { ViewWorkspacesService } from "../../services/view-workspaces-service";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {WorkspaceService} from "../../services/view-workspace-service";
import { EditWorkspaceService } from "../../services/edit-workspace-service";


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

  allWorkspaces: any[] = [];

  constructor(private viewWorkspacesService: ViewWorkspacesService,
              private workspaceService: WorkspaceService,
              private editWorkspaceService: EditWorkspaceService) {
  }

  ngOnInit(): void {
    this.viewWorkspacesService.getWorkspace().subscribe(workspace => {
      this.allWorkspaces = workspace;
    });
  }

  goToCalendar() {
    console.log("This navigates to calendar page");
  }

  addWorkspace() {
    console.log("This navigates to page for workspace addition");
  }

  openWorkspace(workspaceId: number): void {
    this.workspaceService.openWorkspaceById(workspaceId);
  }

  editWorkspace(workspaceId: number, updatedWorkspaceData: any): void {
    this.editWorkspaceService.editWorkspace(workspaceId, updatedWorkspaceData)
      .subscribe(response => {
        console.log(response);
      });
  }
}
