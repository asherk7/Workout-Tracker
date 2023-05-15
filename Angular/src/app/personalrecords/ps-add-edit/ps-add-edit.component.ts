import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/crud.service'

@Component({
  selector: 'app-ps-add-edit',
  templateUrl: './ps-add-edit.component.html',
  styleUrls: ['./ps-add-edit.component.css']
})
export class PsAddEditComponent implements OnInit{

  constructor(private service:CrudService) {}

  @Input() personalrecord:any;
  RecordID:string='';
  Exercise:string='';
  Weight:string='';
  Reps:string='';
  Date:string='';
  BodyWeight:string='';

  ngOnInit(): void {
    this.RecordID=this.personalrecord.RecordID;
    this.Exercise=this.personalrecord.Exercise;
    this.Weight=this.personalrecord.Weight;
    this.Reps=this.personalrecord.Reps;
    this.Date=this.personalrecord.Date;
    this.BodyWeight=this.personalrecord.BodyWeight;
  }

  addPR(){
    var val = {
      RecordID:this.RecordID,
      Exercise:this.Exercise,
      Weight:this.Weight,
      Reps:this.Reps,
      Date:this.Date,
      BodyWeight:this.BodyWeight,
    };
    this.service.addPR(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePR(){
    var val = {
      RecordID:this.RecordID,
      Exercise:this.Exercise,
      Weight:this.Weight,
      Reps:this.Reps,
      Date:this.Date,
      BodyWeight:this.BodyWeight,
    };
    this.service.updatePR(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
