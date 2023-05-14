import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { PersonalrecordsComponent } from './personalrecords/personalrecords.component';
import { MusclesComponent } from './muscles/muscles.component';
import { SplitsComponent } from './splits/splits.component';
import { ShowDeleteComponent } from './workouts/show-delete/show-delete.component';
import { AddEditComponent } from './workouts/add-edit/add-edit.component';
import { AddComponent } from './muscles/add/add.component';
import { CrudService } from './crud.service';

import { HttpClientModule } from '@angular/common/http'; //used to make http requests
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //used to make forms

//created components using ng generate component <component name>

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    PersonalrecordsComponent,
    MusclesComponent,
    SplitsComponent,
    ShowDeleteComponent,
    AddEditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
