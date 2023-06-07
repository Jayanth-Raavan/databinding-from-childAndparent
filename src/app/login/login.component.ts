import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  proceedLogin(username:any, role:any){
    localStorage.setItem("username",username);
    localStorage.setItem("role",role);

    this.route.navigate([""]);
  }
}
