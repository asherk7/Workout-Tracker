import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-w-show-delete',
  templateUrl: './w-show-delete.component.html',
  styleUrls: ['./w-show-delete.component.css']
})
export class WShowDeleteComponent implements OnInit {

  constructor(private service:CrudService) { }

  WorkoutList:any=[];
  ModalTitle:string="";
  ActivateWAddEditComponent:boolean=false;
  workout:any;

  ngOnInit(): void { //this is called when the component is loaded
    this.refreshWorkoutList();
  }

  addClick(){
    this.workout={
      WorkoutID:0,
      Split:"",
      Date:"",
      Duration:"",
      Exercises:"",
      Rating:"",
    }
    this.ModalTitle="Add Workout";
    this.ActivateWAddEditComponent=true;
  }

  closeClick(){
    this.ActivateWAddEditComponent=false;
    this.refreshWorkoutList
  }

  editClick(item:any){
    this.workout=item;
    this.ModalTitle="Edit Workout";
    this.ActivateWAddEditComponent=true;
  }

  refreshWorkoutList(){
    this.service.getWorkoutList().subscribe(data=>{ 
      this.WorkoutList=data;
    });
  }
}
