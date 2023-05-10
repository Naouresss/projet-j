import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UpdateutilisateurrComponent } from './updateutilisateurr/updateutilisateurr.component';
import { FormsModule } from '@angular/forms';
import { AjouteruserComponent } from './ajouteruser/ajouteruser.component';
import { UpdateutilisateurComponent } from './updateutilisateur/updateutilisateur.component';
import { UpdatestructureComponent } from './updatestructure/updatestructure.component';
import { StructureComponent } from './structure/structure.component';
import { AjoutstructureComponent } from './ajoutstructure/ajoutstructure.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AjoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';
import { UpdatesouscategorieComponent } from './updatesouscategorie/updatesouscategorie.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';
import { AjoutsouscategorieComponent } from './ajoutsouscategorie/ajoutsouscategorie.component';
import { ArticleComponent } from './article/article.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';
import { UpdatearticleComponent } from './updatearticle/updatearticle.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { HomeroleComponent } from './homerole/homerole.component';
import { HomestructureComponent } from './homestructure/homestructure.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path:'updateSt/:id',component: UpdateutilisateurrComponent},
  {path: "ajoutu", component: AjouteruserComponent},
  {path:'updateU/:id',component: UpdateutilisateurComponent},
  {path:'updateO/:idStructure',component: UpdatestructureComponent},
  {path:'structure',component: StructureComponent},
  {path:'ajout-structure',component: AjoutstructureComponent},
  {path: 'categorie', component: CategorieComponent},
  {path:'ajout-categorie', component: AjoutcategorieComponent},
  {path:'updateC/:id',component: UpdatecategorieComponent},
  {path:'updateS/:id',component: UpdatesouscategorieComponent},
  {path:'sous-categorie',component: SouscategorieComponent},
  {path:'ajout-sous-categorie',component: AjoutsouscategorieComponent},
  {path:'updateA/:id',component: UpdatearticleComponent},
  {path:'ajout-article',component: AjoutarticleComponent},
  {path:'article',component: ArticleComponent},
  {path:'suivant/:id',component:HomeuserComponent},
  {path:'suivant/:id/:idU',component:HomeroleComponent},
  {path:'suivant/:id/:idU/:idStructure',component:HomestructureComponent},
];

@NgModule({
  imports: [FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
