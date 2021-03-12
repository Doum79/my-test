import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

DepartmentList:any[];

ModalTitle:string;
ActiviteAddEditDepComp:boolean=false;
dep:any;
  ngOnInit(): void {
   this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActiviteAddEditDepComp=true;
  }

  editClick(item){
      this.dep=item;
      this.ModalTitle="Edit Department";
      this.ActiviteAddEditDepComp=true;
  }


  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
}
  closeClick(){
    this.ActiviteAddEditDepComp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    }

    )
  }
 
}
