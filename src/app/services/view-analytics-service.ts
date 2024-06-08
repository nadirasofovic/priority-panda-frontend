import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private completedTasks = 0;
  private totalTasks = 10;
  private startTime: number;

  constructor() {
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
  }
}
