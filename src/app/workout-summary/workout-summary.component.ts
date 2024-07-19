import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout-summary',
  templateUrl: './workout-summary.component.html',
  styleUrls: ['./workout-summary.component.css']
})
export class WorkoutSummaryComponent {
  @Input() workoutData: any;
}
