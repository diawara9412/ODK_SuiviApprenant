import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../User';

@Component({
  selector: 'app-rendu',
  templateUrl: './rendu.component.html',
  styleUrls: ['./rendu.component.css']
})
export class RenduComponent implements OnInit {
  selectedAdmin : any
  listRendu : any 
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.AllRendu();
  }
  public onSelectAdmin(selectedAdmin: User ): void {
    this.selectedAdmin = selectedAdmin;
    this.clickButton('openUserInfo');
  }
private clickButton(buttonId: string): void {
    document.getElementById(buttonId)?.click()
  }
 AllRendu(){
   this.service.getAllRendu().subscribe((data)=>{
    console.log(data)
     this.listRendu = data;
     
   })
 }
}