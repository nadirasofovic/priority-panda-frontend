import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AddWorkspaceService } from '../../services/add-workspace-service';
import {Subject, takeUntil} from "rxjs";
import {WorkspaceDto} from "../../methods/workspace-dto.interface";
import {ViewWorkspacesService} from "../../services/view-workspaces-service";

@Component({
  selector: 'app-add-workspaces',
  templateUrl: './add-workspaces.component.html',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  styleUrls: ['./add-workspaces.component.css']
})
export class AddWorkspacesComponent {
  form: FormGroup;
  unsubsrcibe$: Subject<void> = new Subject<void>();
  workspaces : WorkspaceDto[] = [];

  constructor(private formBuilder: FormBuilder,
              private addWorkspaceService : AddWorkspaceService,
              private viewWorkspacesService : ViewWorkspacesService) {
    this.form = this.formBuilder.group({
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
      .pipe(takeUntil(this.unsubsrcibe$))
      .subscribe(workspaces => {
        this.workspaces = workspaces;
      });
  }

  submitForm(): void {
    const membersArray: string[] = this.form.value.addMembers.split(',');
    const trimmedMembersArray: string[] = membersArray.map(member => member.trim());
    const formData = {
      ...this.form.value,
      addMembers: trimmedMembersArray
    };

    this.addWorkspaceService.createWorkspace(formData)
      .pipe(takeUntil(this.unsubsrcibe$))
      .subscribe(() =>  {
        this.loadWorkspaces();
    })
    }
}



