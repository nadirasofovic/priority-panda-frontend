import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-day',
  template: `
    <div class="day">{{ day }}</div>`,
  standalone: true,
  styles: [`
    .day {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class DayComponent {
  @Input() day: number | undefined;
}
