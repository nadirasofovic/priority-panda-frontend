import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

interface Task {
  label: string;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        UpperCasePipe,
        RouterLink
    ],
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent implements OnInit {
  tasks: Task[] = [];
  labels: string[] = ['work', 'school', 'personal', 'health', 'finance', 'social', 'other'];

  constructor() {
  }

  ngOnInit(): void {
  }

  getTasksByLabel(label: string): Task[] {
    return this.tasks.filter(task => task.label === label);
  }

  addTask(label: string): void {
    const description = prompt(`Enter a new task for ${label}`);
    if (description) {
      this.tasks.push({label, description, done: false});
    }
  }

  editTask(task: Task): void {
    const description = prompt('Edit the task', task.description);
    if (description !== null) {
      task.description = description;
    }
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  markAsDone(task: Task): void {
    task.done = true;
  }
}
