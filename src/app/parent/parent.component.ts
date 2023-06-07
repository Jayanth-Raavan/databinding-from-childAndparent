import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private service : MasterService) { 
    localStorage.setItem("name","Your Name Is Jayanth")
  }

  ngOnInit(): void {
  }
  title = "Parent Component"
  nameInput: any;
  marksInput:any;
  objInput = {"name":"","marks":""};
  response : any
  transferData(name:any, marks:any){
    // this.nameInput = name;
    // this.marksInput = marks;
    this.objInput = {"name":name,"marks":marks}
    this.service.saveData(this.objInput);
    // this.response=this.child.updateList(this.objInput)
  }

  @ViewChild(ChildComponent) child !: ChildComponent;

  updateTitle(title:any){
    this.title = title;
  }
}
