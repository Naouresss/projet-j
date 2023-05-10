import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';

import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { XhrInterceptor } from './xhr.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UpdateutilisateurrComponent } from './updateutilisateurr/updateutilisateurr.component';
import { StructureComponent } from './structure/structure.component';
import { AjouteruserComponent } from './ajouteruser/ajouteruser.component';
import { RoleService } from './ajouteruser/role.service';
import { StructureService } from './structure/structure.service';
import { UpdateutilisateurComponent } from './updateutilisateur/updateutilisateur.component';
import { UpdatestructureComponent } from './updatestructure/updatestructure.component';
import { AjoutstructureComponent } from './ajoutstructure/ajoutstructure.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AjoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';
import { CategorieService } from './categorie/categorie.service';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';

import { AjoutsouscategorieComponent } from './ajoutsouscategorie/ajoutsouscategorie.component';
import { UpdatesouscategorieComponent } from './updatesouscategorie/updatesouscategorie.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';
import { SouscategorieService } from './souscategorie/souscategorie.service';
import { ArticleService } from './article/article.service';
import { ArticleComponent } from './article/article.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';

import { UpdatearticleComponent } from './updatearticle/updatearticle.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { HomeroleComponent } from './homerole/homerole.component';
import { HomestructureComponent } from './homestructure/homestructure.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UtilisateurComponent,

    UpdateutilisateurrComponent,
    
    StructureComponent,
    AjouteruserComponent,
    UpdateutilisateurComponent,
    UpdatestructureComponent,
    AjoutstructureComponent,
    CategorieComponent,
    AjoutcategorieComponent,
    UpdatecategorieComponent,
   
    AjoutsouscategorieComponent,
    UpdatesouscategorieComponent,
    SouscategorieComponent,
    ArticleComponent,
    AjoutarticleComponent,
   
    UpdatearticleComponent,
        HomeuserComponent,
        HomeroleComponent,
        HomestructureComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    CommonModule,
    
  ],
  providers: [LoginService,RoleService,StructureService,CategorieService,SouscategorieService,ArticleService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor,multi: true}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
