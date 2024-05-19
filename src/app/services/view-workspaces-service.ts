import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {WorkspaceDto} from "../methods/workspace-dto.interface";

@Injectable({providedIn: "root"})

export class ViewWorkspacesService {

  private url: string = 'https://localhost:8080/workspaces';

  constructor(private http: HttpClient) {
  }

  public getAllWorkspaces() : Observable<WorkspaceDto[]> {
    return this.http.get<WorkspaceDto[]>(this.url + "/list");
  }

}
