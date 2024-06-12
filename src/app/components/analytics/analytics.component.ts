import {Component, OnInit} from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {DecimalPipe} from "@angular/common";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  standalone: true,
  imports: [
    MatProgressBar,
    DecimalPipe,
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  completedTasks: number = 0;
  totalTasks: number = 0;
  timeSpent: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.completedTasks = 5;
    this.totalTasks = 10;
    this.timeSpent = 120;
  }

  get completedPercentage(): number {
    return this.totalTasks ? (this.completedTasks / this.totalTasks) * 100 : 0;
  }
}
