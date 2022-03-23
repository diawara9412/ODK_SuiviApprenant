import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url='http://localhost:8080/api/';
  Photo='http://localhost:8080/api/findMatierePhoto/';
  PhotoBrief='http://localhost:8080/api/findBriefPhoto/';

  

  constructor(
    private http : HttpClient)
     { }

     getAllApprenant(){
      return this.http.get(this.url+"allAprenant");
    }
    addApprenant(data:any){
      return this.http.post(this.url+"ajoutApprenant",data);
    }
    deleteApprenant(id:any){
      return this.http.delete(this.url+"deleteApprenant/"+id,{responseType:'text'});
  }
  restoreApprenant(id:any){
    return this.http.delete(this.url+"restoreApprenant/"+id,{responseType:'text'});
}
  loginformateur(login :String,password : String){
    return this.http.get(this.url+"loginformateur/"+login+"&"+password)
  }
  loginApprenant(login :String,password : String){
    return this.http.get(this.url+"login/"+login+"&"+password)
  }
  updateApprenant(id: number, data: any){
    return this.http.put(this.url+"updateApprenant/"+id,data);
  }
  ApprenantById(id:any){
    return this.http.get(this.url +"apprenantById/"+ id);
  }
  ApprenantAssister(assister:any){
    return this.http.get(this.url +"allApprenantNonAssister/"+ assister);
  }
  getAllBrief(){
    return this.http.get(this.url+"allBrief");
  }
  addBrief(data:any, photo: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append("file", photo);
    return this.http.post(this.url+"ajoutBrief",formData);
  }
  ApprenantBrief(brief:any){
    return this.http.get(this.url +"findBriefByApprenant/"+ brief);
  }
  addevaluation(data:any){
    return this.http.post(this.url+"addEvaluation",data);
  }
  getAllMatiere(){
    return this.http.get(this.url+"allMatiere");
  }
  getAllEvaluation(){
    return this.http.get(this.url+"allEvaluation");
  }
  ApprenantEvaluation(evaluation:any){
    return this.http.get(this.url +"evaluationByApprenant/"+ evaluation);
  }
  BriefById(id:any){
    return this.http.get(this.url +"briefById/"+ id);
  }
  addRendu(data:any){
    return this.http.post(this.url+"addRendu",data);
  }
  getAllRendu(){
    return this.http.get(this.url+"allRendu");
  }
  addRessourceApprenant(data:any){
    return this.http.post(this.url+"addUrlApprenant",data);
  }
  RessourceParApprenant(apprenant:any){
    return this.http.get(this.url +"ressourceByApprenant/"+ apprenant);
  }
  addRessourceFormateur(data:any){
    return this.http.post(this.url+"addUrl",data);
  }
  RessourceParFormateur(formateur:any){
    return this.http.get(this.url +"ressourceByFormateur/"+ formateur);
  }
  RenduParBrief(Brief:any){
    return this.http.get(this.url +"renduByBrief/"+ Brief);
  }
  RessourceParToApprenant(apprenant:any){
    return this.http.get(this.url +"ressourceSendByFormateurToApprenant/"+ apprenant);
  }
  UpdateBrief(id :number,data:any){
    return this.http.put(this.url +"updateBrief/"+id,data);
  }
  AllMatiere(){
    return this.http.get(this.url+"allMatiere");
  }
    addMatiere(data:any, photo: File): Observable<any>{
      const formData: FormData = new FormData();
      formData.append("file", photo);
      return this.http.post(this.url+"addMatiere",formData)
    }
   
  UpdateMatiere(id :number,data:any){
    return this.http.put(this.url +"updateMatiere/"+id,data);
  }
  MatiereById(id:any){
    return this.http.get(this.url +"matiereById/"+ id);
  }

}
