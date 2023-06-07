import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  ListData =[{"name":"Raj","marks":"175"}]

  getData(){
    return this.ListData;
  }

  saveData(obj:any){
    return this.ListData.push(obj)
  }
}
