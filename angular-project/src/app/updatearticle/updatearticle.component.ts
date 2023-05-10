import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/Article';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SousCategorie } from '../_models/SousCategorie';
import { Utilisateur } from '../_models/Utilisateur';
import { ArticleService } from '../article/article.service';

import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SouscategorieService } from '../souscategorie/souscategorie.service';
@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.css']
})
export class UpdatearticleComponent implements OnInit {

  souscategorie!: SousCategorie;
  article!: Article;
  loading = false;
  articleForm!: FormGroup;
  operation: string = 'add';
  selectedArticle!: Article;
  selectedSousCategorie!: SousCategorie;
  souscategories!: SousCategorie[];
  user!:Utilisateur;
  selectedUser!:Utilisateur;
  users!:Utilisateur[];
  id:any;
  articles!:Article[];
  constructor(private articleService: ArticleService,private souscategorieService: SouscategorieService, private useService: LoginService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    /* this.initStructure();
     this.structures = this.route.snapshot.data.structures;
 
     this.loadStructures();*/
    this.article = new Article();
    this.id = this.route.snapshot.params['id'];
    this.articleService.findArticle(this.id)
      .subscribe(data => {
        console.log(data)
        this.article = data;
        //this.Organisation = data; 
      }, error => console.log(error));
    this.initArticle();
    this.initUtilisateur();
    this.articles = this.route.snapshot.data['articles'];

    this.loading = true;
    this.useService.currentUser.pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
     this.loadSousCategories();
 
     /*this.loading = true;
         this.userService.currentUser.pipe(first()).subscribe(user => {
             this.loading = false;
             this.user = user;
         });*/
  }


  createForm() {
    this.articleForm = this.fb.group({
      designation_arabe: '',
      designation_francais: '',
      reference: '',

      infosArt: '',
      nom_souscategorie:''
    

    });

  }
  loadArticles() {
    this.articleService.getArticles().subscribe(
      data => { this.articles = data },
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
  initArticle() {
    this.selectedArticle = new Article();
    this.createForm();
  }


  logout() {
    this.router.navigate(['/login']);
  }


  updateArticle() {
    this.articleService.updateArticle(this.id, this.article)
      .subscribe(data => console.log(data), error => console.log(error));
    this.article = new Article();
    alert("Votre modification à été sauvegarder");
    this.gotoList();
  }
  onSubmit() {
    this.updateArticle();
  }
  gotoList() {
    this.router.navigate(['article']);
    //  location.reload();
  }
}
