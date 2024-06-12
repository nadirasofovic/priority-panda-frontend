import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDto } from '../methods/task-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkspacetasksService {

  private baseUrl = 'http://localhost:8080/workspaces';

  constructor(private http: HttpClient) { }

  getTasksByWorkspaceAndStatus(workspaceId: number, status: string): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${this.baseUrl}/${workspaceId}/tasks`, { params: { status } });
  }
}
