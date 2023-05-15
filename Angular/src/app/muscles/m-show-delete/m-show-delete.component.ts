import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-m-show-delete',
  templateUrl: './m-show-delete.component.html',
  styleUrls: ['./m-show-delete.component.css']
})
export class MShowDeleteComponent implements OnInit{

  constructor(private service:CrudService) { }

  MuscleGroup:any=[];
  ModalTitle:string="";
  ActivateMAddEditComponent:boolean=false;
  muscleGroup:any;

  ngOnInit(): void {
    this.refreshMuscleGroupList();
  }

  refreshMuscleGroupList(){
    this.service.getMuscleGroup().subscribe(data=>{ 
      this.MuscleGroup=data;
    });
  }
}
