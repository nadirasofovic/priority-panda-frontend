import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private apiUrl = 'http://example.com/api/workspaces';

  constructor(private http: HttpClient) { }

  deleteWorkspace(workspaceId: number): Observable<any> {
    const url = `${this.apiUrl}/${workspaceId}`;
    return this.http.delete(url);
  }
}
