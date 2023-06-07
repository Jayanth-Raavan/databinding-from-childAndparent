import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  IsLoggedIn(){
    const username = localStorage.getItem("username");
    if(username == "" || username == null){
      return false
    }
    else
      return true;
  }

  HaveRoleAccess(menu:any){
    const role = localStorage.getItem("role");
    if(role == "admin"){
      return true;
    }
    else if(menu == "contact")
      return true;
    else 
      return false
  }
}
