import { Component, OnInit } from '@angular/core';
import { WorkspaceTaskService} from "../../services/workspace-task-service";
import { TaskDto } from '../../methods/task-dto.interface';
import {HeaderComponent} from "../header/header.component";
import {DatePipe} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspacepage.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    DatePipe,
    FooterComponent
  ],
  styleUrls: ['./workspacepage.component.css']
})
export class WorkspacepageComponent implements OnInit {
  allworkspaces: { [key: string]: TaskDto[] } = {
    'to-do': [],
    'doing': [],
    'done': []
  };

  constructor(private workspaceTaskService: WorkspaceTaskService) {}

  ngOnInit(): void {
    this.workspaceTaskService.getTasksByStatus('to-do').subscribe(tasks => {
      this.allworkspaces['to-do'] = tasks;
    });
    this.workspaceTaskService.getTasksByStatus('doing').subscribe(tasks => {
      this.allworkspaces['doing'] = tasks;
    });
    this.workspaceTaskService.getTasksByStatus('done').subscribe(tasks => {
      this.allworkspaces['done'] = tasks;
    });
  }
}
