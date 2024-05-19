import { Component } from '@angular/core';
import {DayComponent} from "../day/day.component";
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-calendar',
  template: `
    <div class="calendar">
      <div class="week" *ngFor="let week of weeks">
        <app-day *ngFor="let day of week" [day]="day"></app-day>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    DayComponent,
    NgForOf
  ],
  styles: [`
    .calendar {
      display: flex;
      flex-direction: column;
    }

    .week {
      display: flex;
    }
  `]
})
export class CalendarComponent {
  weeks: number[][] = [];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(0);
        } else if (dayCounter > daysInMonth) {
          week.push(0);
        } else {
          week.push(dayCounter++);
        }
      }
      this.weeks.push(week);
    }
  }
}

