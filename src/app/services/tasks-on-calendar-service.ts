import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksOnCalendarService {
  private allTasks = [
    { title: 'Personal Task 1', date: '2023-06-07', type: 'personal' },
    { title: 'Workspace Task 1', date: '2023-06-08', type: 'workspace' },
    { title: 'Personal Task 2', date: '2023-06-09', type: 'personal' },
    { title: 'Workspace Task 2', date: '2023-06-10', type: 'workspace' },
  ];

  getTasks(taskTypes: Set<string>): Observable<any[]> {
    const filteredTasks = this.allTasks.filter(task => taskTypes.has(task.type));
    return of(filteredTasks);
  }
}
