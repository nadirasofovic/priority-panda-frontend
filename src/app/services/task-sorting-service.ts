import { Injectable } from '@angular/core';
import {TaskDto} from "../methods/task-dto.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskSortingService {
  constructor() {}

  sortByDueDate(tasks: TaskDto[]): TaskDto[] {
    return tasks.sort((a, b) => {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
  }

  sortByPriority(tasks: TaskDto[]): TaskDto[] {
    return tasks.sort((a, b) => {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  sortByCreationDate(tasks: TaskDto[]): TaskDto[] {
    return tasks.sort((a, b) => {
      return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
    });
  }
}

