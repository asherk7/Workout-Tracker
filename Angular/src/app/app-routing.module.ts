import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutsComponent } from './workouts/workouts.component';
import { PersonalrecordsComponent } from './personalrecords/personalrecords.component';
import { MusclesComponent } from './muscles/muscles.component';
import { SplitsComponent } from './splits/splits.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'personalrecords', component: PersonalrecordsComponent },
  { path: 'muscles', component: MusclesComponent },
  { path: 'splits', component: SplitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
