import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor() { }

  openWorkspaceById(workspaceId: number): void {
    console.log(`Opening workspace with ID: ${workspaceId}`);
  }
}
