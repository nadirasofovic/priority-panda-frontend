import { Component, OnInit } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  standalone: true,
  imports: [
    MatProgressBar,
    DecimalPipe
  ],
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  completedTasks: number = 0;
  totalTasks: number = 0;
  timeSpent: number = 0; // in minutes

  constructor() {}

  ngOnInit(): void {
    // Here, you would typically fetch this data from a service or state management store
    this.completedTasks = 5; // Example value
    this.totalTasks = 10; // Example value
    this.timeSpent = 120; // Example value in minutes
  }

  get completedPercentage(): number {
    return this.totalTasks ? (this.completedTasks / this.totalTasks) * 100 : 0;
  }
}
