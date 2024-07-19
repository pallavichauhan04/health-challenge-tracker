import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css']
})
export class TrackerFormComponent implements OnInit {

  username: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;
  day: string = '';

  constructor(private workoutService: WorkoutService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const workoutData = {
      username: this.username,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes,
      day: this.day
    };
    this.workoutService.addWorkout(workoutData);
    this.router.navigate(['/workouts']);
  }
}
