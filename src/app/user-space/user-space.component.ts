import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
 loginData : any;
 list :any;
 img : any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.EvaluationParApprenant();
    this.img = this.service.Photo
  }
  EvaluationParApprenant(){
    this.service.ApprenantEvaluation(this.loginData.id).subscribe((data)=>{
     console.log(data)
     this.list = data;
    })
  }

}
