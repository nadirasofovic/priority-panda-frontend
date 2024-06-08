import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewWorkspacesService } from "../../services/view-workspaces-service";
import { EditWorkspaceService } from "../../services/edit-workspace-service";
import { Subject, takeUntil } from "rxjs";
import { WorkspaceDto } from "../../methods/workspace-dto.interface";
import { ViewOneWorkspaceService } from "../../services/view-workspace-service";
import { deleteWorkspaceService } from "../../services/delete-workspace-service";
import {FormBuilder, FormGroup} from "@angular/forms";

export interface EditableWorkspaceDto extends WorkspaceDto {
  isEditing: boolean;
}

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})

export class WorkspacesComponent{
  form: FormGroup;
  unsubscribe$: Subject<void> = new Subject<void>();
  workspaces: EditableWorkspaceDto[] = [];
  workspace!: WorkspaceDto | null;

  constructor(private formBuilder: FormBuilder,
              private viewWorkspacesService: ViewWorkspacesService,
              private viewOneWorkspaceService: ViewOneWorkspaceService,
              private deleteWorkspaceService: deleteWorkspaceService,
              private editWorkspaceService: EditWorkspaceService) { this.form = this.formBuilder.group({
    title: [''],
    description: [''],
    dueDate: [''],
    addMembers: ['']
  });
  }

  ngOnInit(): void {
    this.loadWorkspaces();
  }

  private loadWorkspaces(): void {
    this.viewWorkspacesService.getAllWorkspaces()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((workspaces: WorkspaceDto[]) => {
        this.workspaces = workspaces.map(workspace => ({ ...workspace, isEditing: false }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getOneWorkspace(id: number): void {
    this.viewOneWorkspaceService.getWorkspace(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(workspace => {
        this.workspace = workspace;
      });
  }

  deleteWorkspace(id: number): void {
    this.deleteWorkspaceService.deleteWorkspace(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.workspace = null!;
        this.loadWorkspaces();
      });
  }

  saveWorkspace(workspace: EditableWorkspaceDto): void {
    this.editWorkspaceService.editWorkspace(workspace.id, workspace)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(updatedWorkspace => {
        workspace.isEditing = false;
        this.loadWorkspaces();
      });
  }

  cancelEdit(workspace: EditableWorkspaceDto): void {
    workspace.isEditing = false;
    this.getOneWorkspace(workspace.id);
  }
}

