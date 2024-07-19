import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css']
})
export class WorkoutProgressComponent implements OnInit {
  username: string = '';
  workouts: any[] = [];
  chart: any;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || 'defaultUser';
    this.workouts = this.workoutService.getWorkouts();
    this.createChart();
  }

  createChart(): void {
    const workoutData = this.workouts.filter(workout => workout.username === this.username);
    const labels = workoutData.map(workout => workout.date);
    const data = workoutData.map(workout => workout.workoutMinutes);

    this.chart = new Chart('workoutChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Workout Minutes',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
