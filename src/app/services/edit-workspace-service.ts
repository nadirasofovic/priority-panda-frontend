import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditWorkspaceService {
  constructor() { }
  editWorkspace(workspaceId: number, updatedWorkspaceData: any): Observable<any> {
    console.log(`Simulating PUT request to update workspace ${workspaceId}`);
    console.log('Updated data:', updatedWorkspaceData);

    const fakeResponse = { success: true, message: 'Workspace updated successfully' };
    return of(fakeResponse);
  }
}

