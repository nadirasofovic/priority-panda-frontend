import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AddWorkspaceService } from '../../services/add-workspace-service';

@Component({
  selector: 'app-add-workspaces',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './add-workspaces.component.html',
  styleUrl: './add-workspaces.component.css'
})
export class AddWorkspacesComponent {

  form: FormGroup;

  constructor(FormBuilder: FormBuilder) {
    this.form = FormBuilder.group(
      {
        title: [],
        description: [],
        dueDate: [],
        addMembers: [[]]
      });
  }
  submitThis() {
        console.log('Form data submitted successfully:');
  }
}


