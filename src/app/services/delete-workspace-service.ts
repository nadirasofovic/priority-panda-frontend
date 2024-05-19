import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class deleteWorkspaceService {
  private url: string = 'https://localhost:8080/workspaces';

  constructor(private http: HttpClient) { }

 public deleteWorkspace(id : number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
 }
}
