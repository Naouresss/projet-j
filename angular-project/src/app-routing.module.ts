import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { UtilisateurComponent } from './app/utilisateur/utilisateur.component';
import { UpdateutilisateurrComponent } from './app/updateutilisateurr/updateutilisateurr.component';
import { AjouteruserComponent } from './app/ajouteruser/ajouteruser.component';
import { UpdateutilisateurComponent } from './app/updateutilisateur/updateutilisateur.component';
import { UpdatestructureComponent } from './app/updatestructure/updatestructure.component';
import { StructureComponent } from './app/structure/structure.component';
import { AjoutstructureComponent } from './app/ajoutstructure/ajoutstructure.component';
import { CategorieComponent } from './app/categorie/categorie.component';
import { AjoutcategorieComponent } from './app/ajoutcategorie/ajoutcategorie.component';
import { UpdatecategorieComponent } from './app/updatecategorie/updatecategorie.component';
import { UpdatesouscategorieComponent } from './app/updatesouscategorie/updatesouscategorie.component';
import { SouscategorieComponent } from './app/souscategorie/souscategorie.component';
import { AjoutsouscategorieComponent } from './app/ajoutsouscategorie/ajoutsouscategorie.component';
import { UpdatearticleComponent } from './app/updatearticle/updatearticle.component';
import { AjoutarticleComponent } from './app/ajoutarticle/ajoutarticle.component';
import { ArticleComponent } from './app/article/article.component';
import { HomeuserComponent } from './app/homeuser/homeuser.component';
import { HomeroleComponent } from './app/homerole/homerole.component';
import { HomestructureComponent } from './app/homestructure/homestructure.component';



const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path: "utilisateur", component: UtilisateurComponent},
  {path:"updateSt/:id",component: UpdateutilisateurrComponent},
  {path: "ajoutu", component: AjouteruserComponent},
  {path:'updateU/:id',component: UpdateutilisateurComponent},
  {path:'updateO/:idStructure',component: UpdatestructureComponent},
  {path:'structure',component: StructureComponent},
  {path: 'categorie', component: CategorieComponent},
  {path:'ajout-categorie', component: AjoutcategorieComponent},
  {path:'ajout-structure',component: AjoutstructureComponent},
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
