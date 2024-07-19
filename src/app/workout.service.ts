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

  constructor() { }

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }
}
