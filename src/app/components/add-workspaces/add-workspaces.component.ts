import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AddWorkspaceService } from '../../services/add-workspace-service';

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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: [''],
      description: [''],
      dueDate: [''],
      addMembers: ['']
    });
  }

  submitThis(): void {
    const formData = this.form.value;
    const membersArray = formData.addMembers.split(/[\n,]/).map((member: string) => member.trim());
    console.log('Form data submitted successfully:');
    console.log('Title:', formData.title);
    console.log('Description:', formData.description);
    console.log('Due Date:', formData.dueDate);
    console.log('Members:', membersArray);
  }
}



