import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import { TaskDto } from '../methods/task-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceTaskService {
  private tasks: BehaviorSubject<TaskDto[]> = new BehaviorSubject<TaskDto[]>([]);

  constructor() {}


  getTasksByWorkspaceAndStatus(workspaceId: number, status: string): TaskDto[] {
    const currentTasks = this.tasks.getValue();
    return currentTasks.filter(task => task.workspaceId === workspaceId && task.status === status);
  }

  getTasksByStatus(status: string): Observable<TaskDto[]> {
    return this.tasks.pipe(
      map(tasks => tasks.filter(task => task.status === status))
    );
  }
}
