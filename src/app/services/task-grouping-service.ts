import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TaskDto } from '../methods/task-dto.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupingService {
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
