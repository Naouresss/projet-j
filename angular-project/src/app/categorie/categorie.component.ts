import { Component, OnInit, ViewChild } from '@angular/core';
import { Structure } from '../_models/Structure';
import { Categorie } from '../_models/Categorie';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utilisateur } from '../_models/Utilisateur';
import { CategorieService } from './categorie.service';
import { LoginService } from '../login/login.service';
import { StructureService } from '../structure/structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, first } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  structures!:Structure[];
    categories!: Categorie[];
    categorieForm!: FormGroup;
    operation: string = 'add';
    selectedCategorie!: Categorie;
    selectedStructure!:Structure;
    user!: Utilisateur;
    loading=false;
      constructor(private categorieService: CategorieService,private userService : LoginService ,private structureService: StructureService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
        this.createForm();
      }
      updateSubscription !: Subscription;
      displayedColumns: string[] = ['nom', 'update', 'Delete'];
      dataSource!: MatTableDataSource<Categorie>;
      listformat!:Categorie[];
      @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
      @ViewChild(MatSort, {static: true}) sort!: MatSort;
      ngOnInit() {
        this.initCategorie();
        this.categories = this.route.snapshot.data['categories'];
    
        this.loadCategories();
    
    
        this.loadStructures();
  
      this.loading = true;
          this.userService.currentUser.pipe(first()).subscribe(user => {
              this.loading = false;
              this.user = user;
          });
          this.categorieService.getCategories().subscribe(
            (res: any) => {
              this.listformat= res; 
              this.dataSource = new MatTableDataSource(this.listformat);
              this.dataSource.paginator = this.paginator;  
              this.dataSource.sort = this.sort;
             
               
            })
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
      createForm(){
        this.categorieForm = this.fb.group({
          nom: ''
      
      
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
      const p = this.categorieForm.value;
      this.categorieService.addCategorie(p).subscribe(
        res => {
         this.initCategorie();
          this.loadCategories();
        }
      );
    
    }
    updateCategorie(id: any){
      this.router.navigate(['updateC', id]);
     
    }
   
    initCategorie(){
      this.selectedCategorie = new Categorie();
      this.createForm();
      this.loadCategories();
    }
    deleteCategorie(id:any){
      this.categorieService.deleteCategorie(id).subscribe(
        res =>{
          this.selectedCategorie= new Categorie();
          this.loadCategories();
     
        }
      );
    
    }
    gotoList(){
      this.router.navigate(['sous-categorie']); 
     }
   
    logout(){
      this.router.navigate(['/login']); 
    }
    findcategorie(nom: string){
  
      this.router.navigate(['findCategorie', this.selectedCategorie.nom ]);
    
    }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
  
  