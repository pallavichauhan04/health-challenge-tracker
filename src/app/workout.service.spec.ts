import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a workout', () => {
    const initialWorkoutsCount = service.getWorkouts().length;
    const newWorkout = {
      username: 'testuser',
      workoutType: 'running',
      workoutMinutes: 30,
      date: new Date(),
      day: 'Monday' // Include the 'day' property here
    };
    service.addWorkout(newWorkout);
    const updatedWorkoutsCount = service.getWorkouts().length;
    expect(updatedWorkoutsCount).toEqual(initialWorkoutsCount + 1);
  });

  // Add more tests for update, delete, and other methods as needed
});
