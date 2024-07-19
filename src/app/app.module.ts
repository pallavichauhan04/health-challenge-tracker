import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TrackerFormComponent } from './tracker-form/tracker-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutProgressComponent } from './workout-progress/workout-progress.component';
import { WorkoutService } from './workout.service';

const routes: Routes = [
  { path: '', redirectTo: '/tracker', pathMatch: 'full' },
  { path: 'tracker', component: TrackerFormComponent },
  { path: 'workouts', component: WorkoutListComponent },
  { path: 'progress', component: WorkoutProgressComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TrackerFormComponent,
    WorkoutListComponent,
    WorkoutProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
