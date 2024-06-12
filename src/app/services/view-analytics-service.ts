import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private completedTasks = 0;
  private totalTasks = 10;
  private startTime: number;
  private url = 'https://localhost:8080/analytics';

  constructor(private http: HttpClient) {
    this.startTime = Date.now();
  }

  getCompletedTasks(): number {
    return this.completedTasks;
  }

  getTotalTasks(): number {
    return this.totalTasks;
  }

  getTimeSpentMinutes(): number {
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.startTime;
    return Math.floor(elapsedTime / 60000);
  }

  updateCompletedTasks(completedTasks: number) {
    this.completedTasks = completedTasks;
    this.updateAnalyticsOnServer();
  }

  private updateAnalyticsOnServer(): void {
    const analyticsData = {
      completionRate: this.completedTasks / this.totalTasks,
      timeSpent: this.getTimeSpentMinutes(),
      userId: 1,
      loginDate: new Date()
    };

    this.http.post(this.url, analyticsData).subscribe(
      response => console.log('Analytics updated', response),
      error => console.error('Error updating analytics', error)
    );
  }
  fetchAnalytics(): Observable<any> {
    return this.http.get(this.url + '/user/1');
  }
}
