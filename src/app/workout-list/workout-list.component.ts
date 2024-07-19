import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Workout, WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[] = [];
  displayedWorkouts: Workout[] = [];
  searchName: string = '';
  filterType: string = '';
  pageIndex: number = 0;
  pageSize: number = 5;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.updateDisplayedWorkouts();
  }

  updateDisplayedWorkouts(): void {
    let filtered = this.workouts;

    if (this.searchName) {
      filtered = filtered.filter(workout => workout.username.toLowerCase().includes(this.searchName.toLowerCase()));
    }

    if (this.filterType) {
      filtered = filtered.filter(workout => workout.workoutType === this.filterType);
    }

    this.displayedWorkouts = filtered.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  onSearchChange(): void {
    this.pageIndex = 0;
    this.updateDisplayedWorkouts();
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedWorkouts();
  }

  getTotalWorkouts(username: string): number {
    return this.workouts.filter(workout => workout.username.toLowerCase() === username.toLowerCase()).length;
  }

  getTotalMinutes(username: string): number {
    return this.workouts
      .filter(workout => workout.username.toLowerCase() === username.toLowerCase())
      .reduce((total, workout) => total + workout.workoutMinutes, 0);
  }
}
