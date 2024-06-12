import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaskDto } from '../methods/task-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  private tasks: BehaviorSubject<TaskDto[]> = new BehaviorSubject<TaskDto[]>([]);
  private baseUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  fetchTasks(): void {
    this.http.get<TaskDto[]>(this.baseUrl)
      .pipe(
        tap(tasks => this.tasks.next(tasks))
      )
      .subscribe();
  }

  editTask(taskId: number, updatedTask: Partial<TaskDto>): void {
    this.http.put<TaskDto>(`${this.baseUrl}/${taskId}`, updatedTask)
      .pipe(
        tap(() => {
          const currentTasks = this.tasks.getValue();
          const taskIndex = currentTasks.findIndex(task => task.taskId === taskId);
          if (taskIndex !== -1) {
            currentTasks[taskIndex] = { ...currentTasks[taskIndex], ...updatedTask };
            this.tasks.next(currentTasks);
          }
        })
      )
      .subscribe();
  }

  deleteTask(taskId: number): void {
    this.http.delete(`${this.baseUrl}/${taskId}`)
      .pipe(
        tap(() => {
          const currentTasks = this.tasks.getValue();
          const updatedTasks = currentTasks.filter(task => task.taskId !== taskId);
          this.tasks.next(updatedTasks);
        })
      )
      .subscribe();
  }

  setTasks(tasks: TaskDto[]): void {
    this.tasks.next(tasks);
  }

  getTasks(): Observable<TaskDto[]> {
    return this.tasks.asObservable();
  }
}
