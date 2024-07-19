import { Injectable } from '@angular/core';

export interface Workout {
  username: string;
  workoutType: string;
  workoutMinutes: number;
  day: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  constructor() {
    this.loadWorkouts();
  }

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
    this.saveWorkouts();
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  private saveWorkouts(): void {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  private loadWorkouts(): void {
    const storedWorkouts = localStorage.getItem('workouts');
    if (storedWorkouts) {
      this.workouts = JSON.parse(storedWorkouts);
    }
  }
}
