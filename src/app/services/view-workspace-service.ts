import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkspaceDto} from "../methods/workspace-dto.interface";

@Injectable({
  providedIn: 'root'
})
export class ViewOneWorkspaceService {

  private url: string = 'https://localhost:8080/workspaces';

  constructor(private http: HttpClient) {
  }

  public getWorkspace(id : number) : Observable<WorkspaceDto> {
    return this.http.get<WorkspaceDto>(this.url + '/' + id);
  }
}
