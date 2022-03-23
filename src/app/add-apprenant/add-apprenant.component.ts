import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent implements OnInit {
  formgroup :any;
  submitted = false;
  constructor( public  route: ActivatedRoute,
    public router : Router,private service : ServicesService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({

      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      login: ['', Validators.required],
      telephone: ['', Validators.required],
      etat: ['', Validators.required],
      genre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', [Validators.required, Validators.minLength(6)]],
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }
  get f() { return this.formgroup.controls; }




  ajouter_apprenant(fg : FormGroup){
    this.submitted = true;
  
  this.service.addApprenant(fg.value).subscribe((data)=>{
 console.log(data);
  if(data){
    this.router.navigateByUrl("/accueil");
  }
  })
 
  }
}
