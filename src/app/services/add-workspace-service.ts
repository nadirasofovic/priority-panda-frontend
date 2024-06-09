import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WorkspaceDto} from "../methods/workspace-dto.interface";

@Injectable({
  providedIn: 'root'
})
export class AddWorkspaceService {

  private url: string = 'https://localhost:8080/workspaces';

  constructor(private http: HttpClient) { }

  createWorkspace(workspace: WorkspaceDto): Observable<WorkspaceDto> {
    return this.http.post<WorkspaceDto>(this.url, workspace);
  }
}
