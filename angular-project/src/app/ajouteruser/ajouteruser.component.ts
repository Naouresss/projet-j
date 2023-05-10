import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilisateur } from '../_models/Utilisateur';

import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { first } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { Role } from '../_models/Role';
import { Structure } from '../_models/Structure';
import { RoleService } from './role.service';
import { StructureService } from '../structure/structure.service';
@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.css']
})
export class AjouteruserComponent  {
  user:Utilisateur | undefined;
  use:Utilisateur | undefined;
  structures:Structure[] | undefined;
  loading=false;
  role:Role[] | undefined;
  loginForm!: FormGroup;
  operation: string = 'add'; 
  selectedUser: Utilisateur | undefined;
  users: Utilisateur[] | undefined;
  submitted=false;
      constructor(private useService:LoginService,private router: Router,private roleService: RoleService,private userService: UtilisateurService,private fb: FormBuilder, private route: ActivatedRoute,private structureService: StructureService) {
        this.createForm();
      }
      getRoles(){
        this.roleService.getRoles().subscribe(
          data => {this.role=data},
          error =>{console.log('An error was occured.')},
        () => {console.log('loading produits was done.')}
          );
      }     
      ngOnInit() {
        this.getRoles();
        this.loadStructures();
        this.initUtilisateur();
        this.users = this.route.snapshot.data['users'];
     
        this.loading = true;
        this.useService.currentUser.pipe(first()).subscribe(user => {
          this.loading = false;
          this.user = user;
        });
        this.loginForm = this.fb.group({
          nom_prenom: ['', Validators.required],
       
          cin:['', Validators.required],
          telephone:['', Validators.required],
          mail:['',Validators.required],
          password:['', Validators.required],
          role:'',
          structure_nom:''
          });
      }
      createForm(){
        this.loginForm = this.fb.group({
          nom_prenom: ['', Validators.required],
       
          cin:['', Validators.required],
          telephone:['', Validators.required],
          mail:['', Validators.required,Validators.email],
          password:['', Validators.required],
          role:'',
          structure_nom:''
          });
     
      }
      onSubmit(){
       
         this.submitted = true;
     
         // stop here if form is invalid 
         if (this.loginForm!.valid) {
           const p = this.loginForm!.value;
           this.userService.creatUtilisateur(p).subscribe(
             res => {
               
              this.initUtilisateur();
               this.loadUtilisateurs();
              alert('Utilisateur ajouté!! :-)\n\n');
              this.gotoList();
             }
               
           );
         }}
      get f() { return this.loginForm!.controls; }
      gotoList(){
        this.router.navigate(['utilisateur']);
      }
      initUtilisateur(){
        this.selectedUser = new Utilisateur();
        this.createForm();
      }  loadUtilisateurs(){
        this.userService.getAllUtilisateurs().subscribe(
          data => {this.users=data},
          error =>{console.log('An error was occured.')},
        () => {console.log('loading produits was done.')}
          );
      }
   /* getRoles(){
      this.roleService.getRoles().subscribe(
        data => {this.role=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }*/
   loadStructures(){
      this.structureService.getStructures().subscribe(
        data => {this.structures=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
     
    logout(){
      this.router.navigate(['/login']); 
    }
  }
  