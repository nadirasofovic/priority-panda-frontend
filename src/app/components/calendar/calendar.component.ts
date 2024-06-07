import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [
    FullCalendarModule,
    FooterComponent
  ],
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendarOptions: any;
  allTasks = [
    { title: 'Personal Task 1', date: '2023-06-07', type: 'personal' },
    { title: 'Workspace Task 1', date: '2023-06-08', type: 'workspace' },
    { title: 'Personal Task 2', date: '2023-06-09', type: 'personal' },
    { title: 'Workspace Task 2', date: '2023-06-10', type: 'workspace' },
    // Add more tasks as needed
  ];
  selectedTypes: Set<string> = new Set(['personal', 'workspace']);
  filteredTasks = this.allTasks;

  constructor() {
    this.updateFilteredTasks();
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin],
      events: this.filteredTasks,
      dateClick: this.handleDateClick.bind(this),
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      }
    };
  }

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }

  onTaskTypeChange(event: any) {
    const taskType = event.target.value;
    if (event.target.checked) {
      this.selectedTypes.add(taskType);
    } else {
      this.selectedTypes.delete(taskType);
    }
    this.updateFilteredTasks();
    this.calendarOptions = { ...this.calendarOptions, events: this.filteredTasks };
  }

  updateFilteredTasks() {
    this.filteredTasks = this.allTasks.filter(task => this.selectedTypes.has(task.type));
  }
}
