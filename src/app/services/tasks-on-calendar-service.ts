import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksOnCalendarService {
  private url = 'https://localhost:8080/tasks/labels';

  constructor(private http: HttpClient) {}

  getTasks(taskLabels: Set<string>): Observable<any[]> {
    const labels = Array.from(taskLabels).join(',');
    return this.http.get<any[]>(`${this.url}?labels=${labels}`);
  }
}
