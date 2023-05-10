import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../_models/Categorie';
import { Structure } from '../_models/Structure';
import { CategorieService } from '../categorie/categorie.service';
import { LoginService } from '../login/login.service';
import { StructureService } from '../structure/structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent implements OnInit {
  user!:Utilisateur;
  loading=false;
    categorieForm!: FormGroup;
    operation: string = 'add'; 
    selectedCategorie!: Categorie;
    categories!: Categorie[];
    structures!: Structure[];
    selectedStructure!: Structure;
    submitted=false;
      constructor(private categorieService: CategorieService,private userService: LoginService , private structureService: StructureService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
       this.createForm();
      }
      
      ngOnInit() {
      this.initCategorie();
       this.categories = this.route.snapshot.data['categories'];
      // this.initStructure();
     
      // this.structures = this.route.snapshot.data.structures[i];
    
       this.loadStructures();
    
          this.loading = true;
          this.userService.currentUser.pipe(first()).subscribe(user => {
              this.loading = false;
              this.user = user;
          });
          this.categorieForm = this.fb.group({
            nom: ['', Validators.required]
         
        
            });
       
     }
     loadStructures(){
  
       this.structureService.find().subscribe(
         data => {this.structures=data},
         error =>{console.log('An error was occured.')},
       () => {console.log('loading produits was done.')}
         );
     
     }
     initStructure(){
       this.selectedStructure = new Structure();
       this.createForm();
       this.loadStructures();
     }
     get f() { return this.categorieForm.controls; }
     createForm(){
        this.categorieForm = this.fb.group({
          nom: ['', Validators.required]
       
      
          });
     
      }
   loadCategories(){
      this.categorieService.getCategories().subscribe(
        data => {this.categories=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
    addCategorie(){
      this.submitted=true;
      if(this.categorieForm.valid){
      const p = this.categorieForm.value;
      this.categorieService.addCategorie(p).subscribe(
        res => {
         this.initCategorie();
         this.loadCategories();
         alert("Catégorie ajoutée !!");
         this.gotoList();
        }
      );
      }
    }
  gotoList(){
    this.router.navigate(['categorie']);
  }
    initCategorie(){
      this.selectedCategorie = new Categorie();
      this.createForm();
      this.loadCategories();
    }
   deleteCategorie(){
      this.categorieService.deleteCategorie(this.selectedCategorie.id).subscribe(
        res =>{
          this.selectedCategorie= new Categorie();
          this.loadCategories();
        }
      );
    }
  
     
    logout(){
      this.router.navigate(['/login']); 
    }
  }