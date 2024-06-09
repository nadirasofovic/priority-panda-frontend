import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDto } from "../methods/task-dto.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  sortByDueDate(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${this.baseUrl}/sort/byDueDate`);
  }

  sortByPriority(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${this.baseUrl}/sort/byPriority`);
  }

  sortByCreationDate(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${this.baseUrl}/sort/byCreationDate`);
  }
}
