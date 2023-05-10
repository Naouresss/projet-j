import { Component, OnInit, ViewChild } from '@angular/core'; 




import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { interval, Subscription } from 'rxjs';
import { SousCategorie } from '../_models/SousCategorie';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SouscategorieService } from './souscategorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../_models/Categorie';
import { CategorieService } from '../categorie/categorie.service';
import { first } from 'rxjs/operators';
import { Utilisateur } from '../_models/Utilisateur';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-souscategorie',
  templateUrl: './souscategorie.component.html',
  styleUrls: ['./souscategorie.component.css']
})
export class SouscategorieComponent implements OnInit {

  souscategories!:  SousCategorie[];
  
 categories!:  Categorie[];
  souscategorieForm!: FormGroup;
  operation: string = 'add';
  selectedSousCategorie!: SousCategorie;
  selectedCategorie!: Categorie;
  user!:Utilisateur;
loading=false;
  constructor(private userService:LoginService,private souscategorieService:  SouscategorieService, private categorieService:  CategorieService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    updateSubscription! : Subscription;
    displayedColumns: string[] = ['nom','nom_categorie', 'update', 'Delete'];
    dataSource!: MatTableDataSource<SousCategorie>;
    listformat!:SousCategorie[];
    @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort!: MatSort;
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
      this.souscategorieService.getSousCategories().subscribe(
        (res: any) => {
          this.listformat= res; 
          this.dataSource = new MatTableDataSource(this.listformat);
          this.dataSource.paginator = this.paginator;  
          this.dataSource.sort = this.sort;
         
           
        })
    }
    createForm(){
      this.souscategorieForm = this.fb.group({
        nom: '',
        nom_categorie:''
        });
  
    }
  loadSousCategories(){
    this.souscategorieService.getSousCategories().subscribe(
      data => {this.souscategories=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }
  addSousCategorie(){
    const p = this.souscategorieForm.value;
    this.souscategorieService.addSousCategorie(p).subscribe(
      res => {
       this.initSousCategorie();
        this.loadSousCategories();
      }
    );
  
  }
 /* findByNom_categorie (nom_categorie){
    this.souscategorieService.findByNom_categorie(nom_categorie).subscribe(data =>{
      this.souscategories=data ;
    },error=>{
      console.log(error);
    })
  }*/
  initCategorie() {
    this.selectedCategorie = new Categorie();
    this.createForm();
    this.loadCategories();
    //this.findByNom_categorie (this.selectedCategorie);
  }
  find(nom_categorie: string){

    this.router.navigate(['findSousCategorie', this.selectedSousCategorie.nom_categorie ]);
 
  }


  loadCategories() {
    this.categorieService.getCategories().subscribe(
      data => { this.categories = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }
  updateSousCategorie(id: any){
    this.router.navigate(['updateS', id]);
   
  }
 
  deleteSousCategorie(id:any){
    this.souscategorieService.deleteSousCategorie(id) .subscribe(data => console.log(data), error => console.log(error));
     
        this.selectedSousCategorie= new SousCategorie();
   
        alert("Votre suppression à été effectuer avec succée");
        this.loadSousCategories();
        this.gotoList();

      }
  
  
  
  initSousCategorie(){
    this.selectedSousCategorie = new SousCategorie();
    this.createForm();
    this.loadSousCategories();
  }

 gotoList(){
  this.router.navigate(['sous-categorie']); 
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
