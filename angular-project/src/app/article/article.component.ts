import { Component, OnInit,ViewChild } from '@angular/core';
import { Article } from '../_models/Article';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { interval, Subscription } from 'rxjs'; 
import { ArticleService } from './article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SousCategorie } from '../_models/SousCategorie';
import { first } from 'rxjs/operators';
import { Utilisateur } from '../_models/Utilisateur';
import { LoginService } from '../login/login.service';
import { SouscategorieService } from '../souscategorie/souscategorie.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  user!:Utilisateur;
  loading=false;
  
    articles!: Article[];
    souscategories!: SousCategorie[];
    articleForm!: FormGroup;
    operation: string = 'add';
    selectedArticle!: Article;
    selectedSousCategorie!: SousCategorie;
      constructor(private articleService: ArticleService, private userService: LoginService ,private souscategorieService: SouscategorieService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
        this.createForm();
      }
      updateSubscription !: Subscription;
      displayedColumns: string[] = ['designation_arabe','designation_francais','nom_souscategorie','reference', 'update', 'Delete'];
      dataSource!: MatTableDataSource<Article>;
      listformat!:Article[];
      @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
      @ViewChild(MatSort, {static: true}) sort!: MatSort;
      
      ngOnInit() {
        this.initArticle();
        this.articles = this.route.snapshot.data['articles'];
    
        this.loadArticles();
        this.initSousCategorie();
        this.souscategories = this.route.snapshot.data['souscategories'];
    
        this.loadSousCategories();
     
            this.loading = true;
                this.userService.currentUser.pipe(first()).subscribe(user => {
                    this.loading = false;
                    this.user = user;
                });
                this.articleService.getArticles().subscribe(
                  (res: any) => {
                    this.listformat= res; 
                    this.dataSource = new MatTableDataSource(this.listformat);
                    this.dataSource.paginator = this.paginator;  
                    this.dataSource.sort = this.sort;
                   
                     
                  })
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
      initSousCategorie(){
        this.selectedSousCategorie = new SousCategorie();
        this.createForm();
        this.loadSousCategories();
      }
      loadSousCategories(){
        this.souscategorieService.getSousCategories().subscribe(
          data => {this.souscategories=data},
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
      const p = this.articleForm.value;
      this.articleService.addArticle(p).subscribe(
        res => {
         this.initArticle();
          this.loadArticles();
        }
      );
    
    }
    updateArticle(id: any){
      this.router.navigate(['updateA', id]);
     
    }
   
    deleteArticle(id:any){
      this.articleService.deleteArticle(id).subscribe(
        res =>{
          this.selectedArticle= new Article();
          this.loadArticles();
        }
      );
    
    }
    initArticle(){
      this.selectedArticle = new Article();
      this.createForm();
      this.loadArticles();
    }
   
    find(nom_souscategorie: string){
  
      this.router.navigate(['findArticle', this.selectedArticle.nom_souscategorie ]);
   
    }
    articleDetails(id: number){
      this.router.navigate(['detailsa', id]);
    }
   
    logout(){
      this.router.navigate(['/login']); 
    }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
  