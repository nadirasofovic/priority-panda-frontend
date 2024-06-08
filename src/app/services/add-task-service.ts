import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {
  private tasks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  getTasks(): Observable<any[]> {
    return this.tasks.asObservable();
  }

  addTask(task: any): void {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = [...currentTasks, task];
    this.tasks.next(updatedTasks);
  }
}
