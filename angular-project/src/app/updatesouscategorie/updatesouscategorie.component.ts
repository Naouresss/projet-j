import { Component, OnInit } from '@angular/core';
import { SousCategorie } from '../_models/SousCategorie';
import { Categorie } from '../_models/Categorie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieService } from '../categorie/categorie.service';
import { Utilisateur } from '../_models/Utilisateur';

import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SouscategorieService } from '../souscategorie/souscategorie.service';
@Component({
  selector: 'app-updatesouscategorie',
  templateUrl: './updatesouscategorie.component.html',
  styleUrls: ['./updatesouscategorie.component.css']
})
export class UpdatesouscategorieComponent implements OnInit {
  souscategorie!: SousCategorie;
  categorie!: Categorie;
  loading = false;
  souscategorieForm!: FormGroup;
  operation: string = 'add';
  selectedCategorie!: Categorie;
  selectedSousCategorie!: SousCategorie;
  souscategories!: SousCategorie[];
  user!:Utilisateur;
  selectedUser!:Utilisateur;
  users!:Utilisateur[];
  id!:any;
  categories!:Categorie[];
  constructor(private categorieService: CategorieService,private souscategorieService: SouscategorieService, private useService: LoginService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    /* this.initStructure();
     this.structures = this.route.snapshot.data.structures;
 
     this.loadStructures();*/
    this.souscategorie = new SousCategorie();
    this.id = this.route.snapshot.params['id'];
    this.souscategorieService.findSousCategorie(this.id)
      .subscribe(data => {
        console.log(data)
        this.souscategorie = data;
        //this.Organisation = data; 
      }, error => console.log(error));
    this.initSousCategorie();
    this.initUtilisateur();
    this.souscategories = this.route.snapshot.data['souscategories'];

    this.loading = true;
    this.useService.currentUser.pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
     this.loadCategories();
 
     /*this.loading = true;
         this.userService.currentUser.pipe(first()).subscribe(user => {
             this.loading = false;
             this.user = user;
         });*/
  }


  createForm() {
    this.souscategorieForm = this.fb.group({
      nom: ['', Validators.required],
      nom_categorie:''
    

    });

  }
  loadCategories() {
    this.categorieService.getCategories().subscribe(
      data => { this.categories = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }
  loadSousCategories() {
    this.souscategorieService.getSousCategories().subscribe(
      data => { this.souscategories = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }



  initUtilisateur() {
    this.selectedUser = new Utilisateur();
    this.createForm();
  }
  
  initSousCategorie() {
    this.selectedSousCategorie = new SousCategorie();
    this.createForm();
  }



  logout() {
    this.router.navigate(['/login']);
  }


  updateSousCategorie() {
    this.souscategorieService.updateSousCategorie(this.id, this.souscategorie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.souscategorie = new SousCategorie();
    alert("Votre modification à été sauvegarder");
    this.gotoList();
  }
  onSubmit() {
    this.updateSousCategorie();
  }
  gotoList() {
    this.router.navigate(['sous-categorie']);
    //  location.reload();
  }
}