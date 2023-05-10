import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/Article';
import { SousCategorie } from '../_models/SousCategorie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../_models/Categorie';
import { CategorieService } from '../categorie/categorie.service';
import { Utilisateur } from '../_models/Utilisateur';
import { LoginService } from '../login/login.service';
import { first } from 'rxjs/operators';
import { SouscategorieService } from '../souscategorie/souscategorie.service';
@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  loading = false;
  user!: Utilisateur;
  articles!: Article[];
  souscategories!: SousCategorie[];
  categories!: Categorie[];
  articleForm!: FormGroup;
  operation: string = 'add';
  selectedArticle!: Article;
  selectedSousCategorie!: SousCategorie;
  selectedCategorie!: Categorie;
  submitted=false;
    constructor(private articleService: ArticleService,private userService: LoginService,private categorieService: CategorieService,private souscategorieService: SouscategorieService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    createForm() {
      this.articleForm = this.fb.group({
      
        designation_arabe: ['', Validators.required],
        designation_francais: ['', Validators.required],
        reference: ['', Validators.required],

        infosArt: ['', Validators.required],
        nom_souscategorie:['', Validators.required]
      });
  
    }
    ngOnInit() {
      this.initArticle();
      this.articles = this.route.snapshot.data['articles'];
  
      this.loadArticles();
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
      this.articleForm = this.fb.group({
      
        designation_arabe: ['', Validators.required],
        designation_francais: ['', Validators.required],
        reference: ['', Validators.required],

        infosArt: ['', Validators.required],
        nom_souscategorie:['', Validators.required]
      });
  }
  
  get f() { return this.articleForm.controls; }
    initSousCategorie() {
      this.selectedSousCategorie = new SousCategorie();
      this.createForm();
      this.loadSousCategories();
    }
    loadSousCategories() {
      this.souscategorieService.getSousCategories().subscribe(
        data => { this.souscategories = data },
        error => { console.log('An error was occured.') },
        () => { console.log('loading produits was done.') }
      );
    }
    initCategorie(){
      this.selectedCategorie = new Categorie();
      this.createForm();
      this.loadCategories();
    }
    loadCategories(){
      this.categorieService.getCategories().subscribe(
        data => {this.categories=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
  loadArticles(){
    this.articleService.getArticles().subscribe(
      data => {this.articles=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }
  addArticle(){
    this.submitted=true;
    if(this.articleForm.valid){
    const p = this.articleForm.value;
    this.articleService.addArticle(p).subscribe(
      res => {
       this.initArticle();
        this.loadArticles();
        alert("Article ajoutée");
        this.gotoList();
      }
    );
    }
  }
  gotoList(){
    this.router.navigate(['article']);
  }
  initArticle(){
    this.selectedArticle = new Article();
    this.createForm();
    this.loadArticles();
  }
  deleteArticle(){
    this.articleService.deleteArticle(this.selectedArticle.id).subscribe(
      res =>{
        this.selectedArticle= new Article();
        this.loadArticles();
      }
    );
  
  }
 
 
  logout(){
    this.router.navigate(['/login']); 
  }
  
}


