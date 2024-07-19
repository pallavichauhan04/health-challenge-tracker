import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css']
})
export class TrackerFormComponent {
  username = '';
  workoutType = '';
  workoutMinutes = 0;
  day = '';
  date = new Date();

  constructor(private workoutService: WorkoutService, private router: Router) {}

  onSubmit() {
    const newWorkout = {
      username: this.username,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes,
      day: this.day,
      date: this.date
    };
    this.workoutService.addWorkout(newWorkout);
    this.router.navigate(['/workout-list']);
  }
}
