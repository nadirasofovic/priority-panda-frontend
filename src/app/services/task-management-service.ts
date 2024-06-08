import { Injectable } from '@angular/core';
import { TaskDto } from '../methods/task-dto.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  private tasks: BehaviorSubject<TaskDto[]> = new BehaviorSubject<TaskDto[]>([]);

  constructor() {}

  editTask(taskId: number, updatedTask: Partial<TaskDto>): void {
    const currentTasks = this.tasks.getValue();
    const taskIndex = currentTasks.findIndex(task => task.taskId === taskId);
    if (taskIndex !== -1) {
      currentTasks[taskIndex] = { ...currentTasks[taskIndex], ...updatedTask };
      this.tasks.next(currentTasks);
    }
  }

  deleteTask(taskId: number): void {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = currentTasks.filter(task => task.taskId !== taskId);
    this.tasks.next(updatedTasks);
  }

  setTasks(tasks: TaskDto[]): void {
    this.tasks.next(tasks);
  }

  getTasks() {
    return this.tasks.asObservable();
  }
}
