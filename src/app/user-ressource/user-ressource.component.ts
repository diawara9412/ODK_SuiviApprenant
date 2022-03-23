import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-ressource',
  templateUrl: './user-ressource.component.html',
  styleUrls: ['./user-ressource.component.css']
})
export class UserRessourceComponent implements OnInit {
  loginData: any;
  listRessource : any;
  apprenant:any;
  formgroup:FormGroup;
  matiere : any;
  matieres :any;
  apprenants:any;
  submitted = false;
  constructor(private service :ServicesService,private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    
    this.loginData=JSON.parse(localStorage["isLogin"]);
    
    this.formgroup = this.formBuilder.group({
    
      pdf: [''],
      url: [''],
     
     
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  this.AllRessourceByApprenant();
  }
  get f() { return this.formgroup.controls; }

  AllRessourceByApprenant(){
    this.service.RessourceParApprenant(this.loginData.id).subscribe((data)=>{
      
      this.listRessource = data
      console.log(this.listRessource)
    })
  }


ajouterRessource(fg : FormGroup){
  this.submitted = true;
  


  // stop here if form is invalid
  if (this.formgroup.invalid) {
      return;
  }

 

  var obj1: { [id: string]: any} = {};
  obj1['id'] = this.loginData.id; 
  fg.value.apprenant = obj1;
  this.service.addRessourceApprenant(fg.value).subscribe((data)=>{
    if(data){
      console.log("ajout effectuer avec succès");
      
        this.router.navigateByUrl("/listRessource");
      
    }
  })
}

}
