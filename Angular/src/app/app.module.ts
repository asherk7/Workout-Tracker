import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { PersonalrecordsComponent } from './personalrecords/personalrecords.component';
import { MusclesComponent } from './muscles/muscles.component';
import { SplitsComponent } from './splits/splits.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    PersonalrecordsComponent,
    MusclesComponent,
    SplitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
