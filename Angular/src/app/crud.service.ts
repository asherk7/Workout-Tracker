//created using ng generate service crud
//this is where we will make our http requests

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //handles asynchronous operations

@Injectable({
  providedIn: 'root'
})

export class CrudService {

readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) {  }

  getWorkoutList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/workouts/");
  } //returns an observable of type any array, all the workouts

  addWorkout(val:any){
    return this.http.post(this.APIUrl + '/workouts/',val);
  } //this will add a workout to the database

  updateWorkout(val:any){
    return this.http.put(this.APIUrl + '/workouts/',val);
  } //this will update a workout in the database

  deleteWorkout(val:any){
    return this.http.delete(this.APIUrl + '/workouts/'+val);
  } //this will delete a workout from the database



  getPRList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personalrecords/');
  } 
  
  addPR(val:any){
    return this.http.post(this.APIUrl + '/personalrecords/',val);
  } 
  
  updatePR(val:any){
    return this.http.put(this.APIUrl + '/personalrecords/',val);
  } 
  
  deletePR(val:any){
    return this.http.delete(this.APIUrl + '/personalrecords/'+val);
  } 
  


  getMuscleGroup():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/muscles/');
  }

  addMuscleGroup(val:any){
    return this.http.post(this.APIUrl + '/muscles/',val);
  }

  deleteMuscleGroup(val:any){
    return this.http.delete(this.APIUrl + '/muscles/'+val);
  } 



  getSplits():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/splits/');
  }

}
