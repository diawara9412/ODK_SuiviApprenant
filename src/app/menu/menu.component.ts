import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginData:any;
  loginStatus:boolean = false;
  formateur : boolean = false;
  apprenant : boolean = false;
  userRole:any;
  constructor() { }

  ngOnInit(): void {
    if(localStorage["isLogin"]){
      this.loginData=JSON.parse(localStorage["isLogin"]);
    }
    if(localStorage["userRole"]){
      this.userRole=JSON.parse(localStorage["userRole"]);
    }
    console.log(this.userRole)
    
    if(localStorage["loginStatus"]){
      this.loginStatus=JSON.parse(localStorage["loginStatus"]);
    }
    if(localStorage["formateur"]){
      this.formateur=JSON.parse(localStorage["formateur"]);
    }
    if(localStorage["apprenant"]){
      this.apprenant=JSON.parse(localStorage["apprenant"]);
    }
  }
  logOut(){
    localStorage.removeItem('isLogin');
    localStorage.removeItem('loginStatus')
    location.replace("/");


}

}
