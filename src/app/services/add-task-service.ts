import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {
  private tasks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private baseUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<any[]> {
    return this.tasks.asObservable();
  }

  fetchTasks(): void {
    this.http.get<any[]>(this.baseUrl)
      .subscribe(tasks => this.tasks.next(tasks));
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, task).pipe(
      tap((newTask: any) => {
        const currentTasks = this.tasks.getValue();
        const updatedTasks = [...currentTasks, newTask];
        this.tasks.next(updatedTasks);
      })
    );
  }
}
