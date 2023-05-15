import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-ps-show-delete',
  templateUrl: './ps-show-delete.component.html',
  styleUrls: ['./ps-show-delete.component.css']
})
export class PsShowDeleteComponent implements OnInit{

  constructor(private service:CrudService) {}

  PRList:any=[]
  ModalTitle:string=''
  ActivatePsAddEditComponent:boolean=false
  personalrecord:any;

  ngOnInit(): void {
    this.refreshPRList();
  }

  addClick(){
    this.personalrecord={
      RecordID:0,
      Exercise:'',
      Weight:'',
      Reps:'',
      Date:'',
      BodyWeight:''
    }
    this.ModalTitle="Add Personal Record";
    this.ActivatePsAddEditComponent=true;
  }

  editClick(item:any){
    this.personalrecord=item;
    this.ModalTitle="Edit Personal Record";
    this.ActivatePsAddEditComponent=true;
  }

  closeClick(){
    this.ActivatePsAddEditComponent=false;
    this.refreshPRList();
  }

  deleteClick(item:any){
    if(confirm("Are you sure you want to delete your record?")){
      this.service.deletePR(item.RecordID).subscribe(data=>{
        alert(data.toString());
        this.refreshPRList();
      })
    };
  }

  refreshPRList(){
    this.service.getPRList().subscribe(data=>{
      this.PRList=data
    });
  }
}
