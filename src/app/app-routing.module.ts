import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerFormComponent } from './tracker-form/tracker-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutProgressComponent } from './workout-progress/workout-progress.component';

const routes: Routes = [
  { path: '', redirectTo: '/tracker-form', pathMatch: 'full' },
  { path: 'tracker-form', component: TrackerFormComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'workout-progress', component: WorkoutProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
