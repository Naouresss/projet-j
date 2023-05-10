import { Component, OnInit, ViewChild } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs/internal/Subscription';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from './utilisateur.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  loginForm: FormGroup | undefined;
  operation: string = 'add'; 
  selectedUser: Utilisateur | undefined;
  users: Utilisateur[] | undefined;
  user:Utilisateur | undefined;
  use: Utilisateur | undefined;
  loading=false;
    constructor(private useService:LoginService,private userService: UtilisateurService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    updateSubscription : Subscription | undefined;
  displayedColumns: string[] = ['nom_prenom','cin','Telephone','mail', 'affect', 'update', 'Delete'];
  dataSource: MatTableDataSource<Utilisateur> | undefined;
  listformat:Utilisateur[] | undefined;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;  
    ngOnInit() {
      this.initUtilisateur();
      this.users = this.route.snapshot.data['users'];
      
      this.users = this.route.snapshot.data['users'];
  
      this.loading = true;
      this.useService.currentUser.pipe(first()).subscribe(use => {
        this.loading = false;
        this.use = use;
      });
      this.userService.getAllUtilisateurs().subscribe(
        (res: any) => {
          this.listformat= res; 
          this.dataSource = new MatTableDataSource(this.listformat);
          this.dataSource.paginator == this.paginator;  
          this.dataSource.sort == this.sort;
         
           
        })
    }
    createForm(){
      this.loginForm = this.fb.group({
        nom: ['', Validators.required],
        prenom:['', Validators.required],
        cin:'',
        Telephone:'',
        mail:'',
        password:'',
        role:'',
        id:''
        
    
        });
   
    }
  loadUtilisateurs(){
    this.userService.getAllUtilisateurs().subscribe(
      data => {this.users=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }
  addUtilisateur(){
    const p = this.loginForm?.value;
    this.userService.creatUtilisateur(p).subscribe(
      res => {
       this.initUtilisateur();
        this.loadUtilisateurs();
      }
    );
  
  }

  initUtilisateur(){
    this.selectedUser = new Utilisateur();
    this.createForm();
    this.loadUtilisateurs();
  }
  updateUtilisateurr(id: any){
    this.router.navigate(['updateU', id]);
   
  }
  updateUtilisateur(id: any){
    this.router.navigate(['updateSt', id]);
   
  }
  deleteUtilisateur(id:any){
    this.userService.deleteUtilisateur(id).subscribe(
      res =>{
        alert("voulez vous vraiment supprimer cette utilisateur!!")
        this.selectedUser= new Utilisateur();
        this.loadUtilisateurs();
      }
    );
  
  }
  userDetails(id: number){
    this.router.navigate(['detailss', id]);
  }
   
  logout(){
    this.router.navigate(['/login']); 
  }
  applyFilter(filterValue: string) {
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }
}
