import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Badge } from '../methods/badge-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private url = 'https://localhost:8080/badges';

  constructor(private http: HttpClient) { }

  getBadgesByUserId(userId: number): Observable<Badge[]> {
    return this.http.get<Badge[]>(`${this.url}/user/${userId}`);
  }
}

