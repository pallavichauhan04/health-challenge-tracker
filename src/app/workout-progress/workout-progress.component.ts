import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Workout, WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css']
})
export class WorkoutProgressComponent implements OnInit {

  chart: any;
  workouts: Workout[] = [];
  username: string = '';

  constructor(private workoutService: WorkoutService) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
  }

  searchProgress(): void {
    if (this.username) {
      const userWorkouts = this.workouts.filter(workout => workout.username.toLowerCase() === this.username.toLowerCase());

      const workoutTypes = userWorkouts.map(workout => workout.workoutType);
      const workoutMinutes = userWorkouts.map(workout => workout.workoutMinutes);

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart('progressChart', {
        type: 'bar',
        data: {
          labels: workoutTypes,
          datasets: [{
            label: 'Workout Minutes',
            data: workoutMinutes,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
