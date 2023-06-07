import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service : MasterService) {
    this.ListData = this.service.getData();
   }
   localName :any
  ngOnInit(): void {
   this.localName =  localStorage.getItem("name")
  }
  @Input() inputName:any;
  @Input() inputMarks:any;

  ListData =[{"name":"","marks":""}]

  updateList(obj:any){
    this.ListData.push(obj);
    return obj.name + "'s data is saved successfully!"
  }

  @Output() output = new EventEmitter<string>();
}
