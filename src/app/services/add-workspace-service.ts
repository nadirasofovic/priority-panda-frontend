import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddWorkspaceService {

  constructor(private http: HttpClient) { }

  submitWorkspaceData(data: any): Observable<any> {
    return this.http.post<any>('https://example.com/api/workspaces', data);
  }
}
