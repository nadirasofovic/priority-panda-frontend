import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WorkspaceDto} from "../methods/workspace-dto.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditWorkspaceService {

  private url: string = 'https://localhost:8080/workspaces';

  constructor(private http: HttpClient) { }

  public editWorkspace(id:number, workspace: WorkspaceDto) : Observable<WorkspaceDto> {
    return this.http.post<WorkspaceDto>(this.url + '/' + id, workspace);
  }
}

