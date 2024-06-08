import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskDto } from '../methods/task-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupingService {
  private tasks: BehaviorSubject<TaskDto[]> = new BehaviorSubject<TaskDto[]>([]);

  constructor() {}

  setTasks(tasks: TaskDto[]): void {
    this.tasks.next(tasks);
  }

  getTasks(): Observable<TaskDto[]> {
    return this.tasks.asObservable();
  }

  getTasksByLabel(): { [key: string]: TaskDto[] } {
    const currentTasks = this.tasks.getValue();
    return currentTasks.reduce((groups, task) => {
      const label = task.label;
      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(task);
      return groups;
    }, {} as { [key: string]: TaskDto[] });
  }
}
