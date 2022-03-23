import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brief',
  templateUrl: './add-brief.component.html',
  styleUrls: ['./add-brief.component.css']
})
export class AddBriefComponent implements OnInit {
  loginData: any;
  formateur :any
  login:any;
  apprenant:any;
  formgroup:FormGroup;
  public imgfile : any = File;
 
  Type: any;
  apprenants:any;
  submitted = false;
  constructor(private service : ServicesService, 
    private router : Router,
    public  route: ActivatedRoute,public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.apprenants= this.listeApprenant();
    this.formgroup = this.formBuilder.group({

      type: ['', Validators.required],
      description: ['', Validators.required],
      formateur: ['', Validators.required],
      apprenant:['',Validators.required],
     
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }



  listeApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      
      this.apprenants=data;
      console.log(this.apprenant)
    })
  }
  get f() { return this.formgroup.controls; }

  chargephoto(files: any){
    this.imgfile = files
    console.log(this.imgfile)
  }

  ajouterBrief(fg : FormGroup){
    this.submitted = true;
    


    // stop here if form is invalid
    if (fg.value) {
        
   

    var obj: { [id: string]: any} = {};
    obj['id'] = fg.value.apprenant; 
    fg.value.apprenant = obj;

    var obj1: { [id: string]: any} = {};
    obj1['id'] = this.loginData.id; 
    fg.value.formateur = obj1;


    

    
    this.service.addBrief(fg.value, this.imgfile[0]).subscribe((data)=>{
      
     
      
      data.type=fg.value['type']
      data.description=fg.value['description']
      data.apprenant=fg.value['apprenant']
      console.log(data.apprenant)
      data.formateur=fg.value['formateur']
      this.service.UpdateBrief(data.id, data).subscribe((res)=>{
        console.log(res)
           return this.router.navigateByUrl('/brief')
       
       })
    })

  } }

}
