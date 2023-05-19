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

  ngOnInit(): void {
    this.refreshMuscleGroupList();
  }

  addClick(item:any){
    var val ={
      Muscle:item
    }
    this.service.addMuscleGroup(val).subscribe(res=>{
      alert(res.toString());
    })
    this.refreshMuscleGroupList();
  }

  deleteClick(){
    if(confirm('Are you sure you want to delete the exercises?')){
      this.service.deleteMuscleGroup().subscribe(data=>{
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
