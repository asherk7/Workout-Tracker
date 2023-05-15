import { Component, OnInit, Input} from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-w-add-edit',
  templateUrl: './w-add-edit.component.html',
  styleUrls: ['./w-add-edit.component.css']
})
export class WAddEditComponent implements OnInit {

  constructor(private service:CrudService) { }

  @Input() workout:any;
  WorkoutID:string="";
  Split:string="";
  Date:string="";
  Duration:string="";
  Exercises:string="";
  Rating:string="";

  ngOnInit(): void {
    this.WorkoutID=this.workout.WorkoutID;
    this.Split=this.workout.Split;
    this.Date=this.workout.Date;
    this.Duration=this.workout.Duration;
    this.Exercises=this.workout.Exercises;
    this.Rating=this.workout.Rating;
  }

  addWorkout(){
    var val = {
      WorkoutID:this.WorkoutID,
      Split:this.Split,
      Date:this.Date,
      Duration:this.Duration,
      Exercises:this.Exercises,
      Rating:this.Rating
    };
    this.service.addWorkout(val).subscribe(res=>{
      alert(res.toString());
    }); //subscribe to the observable returned by addWorkout
  }

  updateWorkout(){
    var val = {
      WorkoutID:this.WorkoutID,
      Split:this.Split,
      Date:this.Date,
      Duration:this.Duration,
      Exercises:this.Exercises,
      Rating:this.Rating
    };
    this.service.updateWorkout(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
