import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Badge} from "../methods/badge.model";

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private baseUrl = '/api/badges';

  constructor(private http: HttpClient) { }

  getBadgesByUserId(userId: number): Observable<Badge[]> {
    return this.http.get<Badge[]>(`${this.baseUrl}/user/${userId}`);
  }

}
