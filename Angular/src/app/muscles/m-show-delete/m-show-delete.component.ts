import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-m-show-delete',
  templateUrl: './m-show-delete.component.html',
  styleUrls: ['./m-show-delete.component.css']
})
export class MShowDeleteComponent implements OnInit{

  constructor(private service:CrudService) { }

  MuscleGroupList:any=[];
  muscleGroup:any;
  Muscle:string="";

  ngOnInit(): void {
    this.refreshMuscleGroupList();
  }

  addClick(){
    this.muscleGroup={
      Muscle:this.Muscle
    }
    this.service.addMuscleGroup(this.muscleGroup).subscribe(res=>{
      alert(res.toString());
    })
    this.refreshMuscleGroupList();
  }

  deleteClick(item:any){
    if(confirm('Are you sure you want to delete the exercises?')){
      this.service.deleteMuscleGroup(item.MuscleGroupID).subscribe(data=>{
        alert(data.toString());
        this.refreshMuscleGroupList();
      })
    };
  }

  refreshMuscleGroupList(){
    this.service.getMuscleGroup().subscribe(data=>{ 
      this.MuscleGroupList=data;
    });
  }
}
