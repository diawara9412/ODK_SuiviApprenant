import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { AddBriefComponent } from './add-brief/add-brief.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { AddmatiereComponent } from './addmatiere/addmatiere.component';
import { BriefDetailComponent } from './brief-detail/brief-detail.component';
import { BriefComponent } from './brief/brief.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';


import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FormaBriefComponent } from './forma-brief/forma-brief.component';
import { FormaRessourceComponent } from './forma-ressource/forma-ressource.component';
import { GuardloginGuard } from './guardlogin.guard';
import { ListFormaRessourceComponent } from './list-forma-ressource/list-forma-ressource.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { ListRessourceComponent } from './list-ressource/list-ressource.component';
import { LoginComponent } from './login/login.component';
import { RenduDetailComponent } from './rendu-detail/rendu-detail.component';
import { RenduComponent } from './rendu/rendu.component';


import { RessourceComponent } from './ressource/ressource.component';
import { UpdateApprenantComponent } from './update-apprenant/update-apprenant.component';
import { UpdateMatiereComponent } from './update-matiere/update-matiere.component';

import { UserBriefComponent } from './user-brief/user-brief.component';
import { UserRenduComponent } from './user-rendu/user-rendu.component';
import { UserRessourceComponent } from './user-ressource/user-ressource.component';
import { UserSpaceComponent } from './user-space/user-space.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'user', component: UserSpaceComponent},
  { path: 'userBrief', component: UserBriefComponent},

  { path: 'ressource', component: RessourceComponent},
  { path: 'userRendu', component: UserRenduComponent},
  
  { path: 'addBrief', component: AddBriefComponent},
  { path: 'userRessource', component: UserRessourceComponent},
  {path : 'addApprenant', component: AddApprenantComponent},
  {path : 'formaBrief', component: FormaBriefComponent},
  {path : 'login', component: LoginComponent,canActivate:[GuardloginGuard]},
  {path : 'updateApprenant/:id', component: UpdateApprenantComponent},
  {path : 'detailApprenant/:id', component: DetailApprenantComponent},
  {path : 'brief', component: BriefComponent},
  {path : 'corbeille', component: CorbeilleComponent},
  {path : 'evaluation', component: EvaluationComponent},
  {path : 'addevaluation', component: AddEvaluationComponent},
  {path : 'briefDetail/:id', component: BriefDetailComponent},
  {path : 'renduDetail/:id', component: RenduDetailComponent},
  {path : 'rendu', component: RenduComponent},
  {path : 'formaressource', component: FormaRessourceComponent},
  {path : 'listRessource', component: ListRessourceComponent},
  {path : 'listFormaRessource', component: ListFormaRessourceComponent},
  {path : 'listMatiere', component: ListMatiereComponent},
  {path : 'addMatiere', component: AddmatiereComponent},
  {path : 'updateMatiere/:id', component: UpdateMatiereComponent},
  { path: '**', redirectTo: '/login', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
