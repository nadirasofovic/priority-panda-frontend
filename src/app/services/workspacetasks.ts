import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: "root"})

export class WorkspacetasksService {
  public getWorkspace(): Observable<any[]> {
    return of([
      {title: 'Workspace 1', description:'Workspace description'},
      {title: 'Workspace 2', description:'Workspace description'},
      {title: 'Workspace 3', description:'Workspace description'},
    ]);
  }
}
