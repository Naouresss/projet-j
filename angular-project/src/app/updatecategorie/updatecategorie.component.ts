import { Component, OnInit } from '@angular/core';
import { Categorie } from '../_models/Categorie';
import { Utilisateur } from '../_models/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../categorie/categorie.service';
import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {
  categorie!: Categorie;
  user!: Utilisateur;
  loading = false;
  categorieForm!: FormGroup;
  operation: string = 'add';
  selectedCategorie!: Categorie;
  categories!: Categorie[];
  selectedUser!:Utilisateur;
  id!:any;
  constructor(private categorieService: CategorieService, private useService: LoginService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    /* this.initStructure();
     this.structures = this.route.snapshot.data.structures;
 
     this.loadStructures();*/
    this.categorie = new Categorie();
    this.id = this.route.snapshot.params['id'];
    this.categorieService.findCategorie(this.id)
      .subscribe(data => {
        console.log(data)
        this.categorie = data;
        //this.Organisation = data; 
      }, error => console.log(error));
    this.initCategorie();
    this.categories = this.route.snapshot.data['categories'];

    this.loading = true;
    this.useService.currentUser.pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
    /* this.loadUtilisateurs();
 
     this.loading = true;
         this.userService.currentUser.pipe(first()).subscribe(user => {
             this.loading = false;
             this.user = user;
         });*/
  }


  createForm() {
    this.categorieForm = this.fb.group({
      nom: ['', Validators.required]
    

    });

  }
  loadCategories() {
    this.categorieService.getCategories().subscribe(
      data => { this.categories = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }
 



  initUtilisateur() {
    this.selectedUser = new Utilisateur();
    this.createForm();
  }
  
  initCategorie() {
    this.selectedCategorie = new Categorie();
    this.createForm();
  }



  logout() {
    this.router.navigate(['/login']);
  }


  updateCategorie() {
    this.categorieService.updateCategorie(this.id, this.categorie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categorie = new Categorie();
    alert("Votre modification à été sauvegarder");
    this.gotoList();
  }
  onSubmit() {
    this.updateCategorie();
  }
  gotoList() {
    this.router.navigate(['categorie']);
    //  location.reload();
  }



}
