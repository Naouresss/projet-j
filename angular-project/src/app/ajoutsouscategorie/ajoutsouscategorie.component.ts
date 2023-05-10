import { Component, OnInit } from '@angular/core';
import { SousCategorie } from '../_models/SousCategorie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie/categorie.service';
import { Categorie } from '../_models/Categorie';
import { first } from 'rxjs/operators';
import { Utilisateur } from '../_models/Utilisateur';
import { LoginService } from '../login/login.service';
import { SouscategorieService } from '../souscategorie/souscategorie.service';
@Component({
  selector: 'app-ajoutsouscategorie',
  templateUrl: './ajoutsouscategorie.component.html',
  styleUrls: ['./ajoutsouscategorie.component.css']
})
export class AjoutsouscategorieComponent implements OnInit {

  souscategories!: SousCategorie[];
user!: Utilisateur;
loading = false;
  souscategorieForm!: FormGroup;
  operation: string = 'add';
  selectedSousCategorie!: SousCategorie;
  categorieForm!: FormGroup;
submitted=false;
  selectedCategorie!: Categorie;
  categories!: Categorie[];
  constructor(private souscategorieService: SouscategorieService,private userService : LoginService ,private categorieService: CategorieService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.initSousCategorie();
    this.souscategories = this.route.snapshot.data['souscategories'];

    this.loadSousCategories();
    this.initCategorie();
    this.categories = this.route.snapshot.data['categories'];

    this.loadCategories();

    this.loading = true;
        this.userService.currentUser.pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
        this.souscategorieForm = this.fb.group({
          nom: ['', Validators.required],
          nom_categorie: ['', Validators.required]
        });
  }
  get f() { return this.souscategorieForm.controls; }
  createForm() {
    this.souscategorieForm = this.fb.group({
      nom: ['', Validators.required],
      nom_categorie: ['', Validators.required]
    });
 

  }


  loadSousCategories() {
    this.souscategorieService.getSousCategories().subscribe(
      data => { this.souscategories = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }
  addSousCategorie() {
    this.submitted=true;
    if(this.souscategorieForm.valid){
    const p = this.souscategorieForm.value;
    this.souscategorieService.addSousCategorie(p).subscribe(
      res => {
        this.initSousCategorie();
        this.loadSousCategories();
        alert("Sous-Catégorie ajoutée !!");
        this.gotoList();
      }
    );
    }
  }
  gotoList(){
    this.router.navigate(['sous-categorie']);
  }
  initSousCategorie() {
    this.selectedSousCategorie = new SousCategorie();
    this.createForm();
    this.loadSousCategories();
  }




  loadCategories() {
    this.categorieService.getCategories().subscribe(
      data => { this.categories = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }


  initCategorie() {
    this.selectedCategorie = new Categorie();
    this.createForm();
    this.loadCategories();
  }



  logout() {
    this.router.navigate(['/login']);
  }


}



