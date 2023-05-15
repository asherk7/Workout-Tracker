import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WorkoutsComponent } from './workouts/workouts.component';
import { PersonalrecordsComponent } from './personalrecords/personalrecords.component';
import { MusclesComponent } from './muscles/muscles.component';
import { SplitsComponent } from './splits/splits.component';

import { CrudService } from './crud.service';
import { HttpClientModule } from '@angular/common/http'; //used to make http requests
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MShowDeleteComponent } from './muscles/m-show-delete/m-show-delete.component';
import { MAddEditComponent } from './muscles/m-add-edit/m-add-edit.component';
import { WShowDeleteComponent } from './workouts/w-show-delete/w-show-delete.component';
import { WAddEditComponent } from './workouts/w-add-edit/w-add-edit.component';
import { PsAddEditComponent } from './personalrecords/ps-add-edit/ps-add-edit.component';
import { PsShowDeleteComponent } from './personalrecords/ps-show-delete/ps-show-delete.component';
import { SShowComponent } from './splits/s-show/s-show.component'; //used to make forms

//created components using ng generate component <component name>

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    PersonalrecordsComponent,
    MusclesComponent,
    SplitsComponent,
    MShowDeleteComponent,
    MAddEditComponent,
    WShowDeleteComponent,
    WAddEditComponent,
    PsAddEditComponent,
    PsShowDeleteComponent,
    SShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
