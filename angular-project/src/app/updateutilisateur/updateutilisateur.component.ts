import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Structure } from '../_models/Structure';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { RoleService } from '../ajouteruser/role.service';
import { Role } from '../_models/Role';
import { StructureService } from '../structure/structure.service';
import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.css']
})
export class UpdateutilisateurComponent implements OnInit {
  utilisateur!: Utilisateur;
  user!: Utilisateur;
  role!:Role[] ;
  loading = false;
  loginForm!: FormGroup;
  operation: string = 'add';
  selectedUser!: Utilisateur;
  users!: Utilisateur[];
  id!:any;
  selectedStructure !: Structure;
  structures !: Structure[];
  roles!: Role[];
  selectedRole !: Role;
  submitted=false;
  cc !: string;
  constructor(private userService: UtilisateurService,private roleService: RoleService,private structureService: StructureService, private useService: LoginService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
 
  }

/*  ngOnInit() {
    this.getRoles();
    
     this.structures = this.route.snapshot.data['structures'];
 this.cc = 'Admin';
     this.loadStructures();
  
     this.roles = this.route.snapshot.data['roles'];
 
     this.loadRoles();
    this.utilisateur = new Utilisateur();
    this.id = this.route.snapshot.params['id'];
   
    this.initUtilisateur();
    this.users = this.route.snapshot.data['users'];

    this.loading = true;
    this.useService.currentUser.pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUtilisateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.utilisateur = data;
      }, error => console.log(error));

    
  }*/
  ngOnInit() {
    this.loadStructures();
    this.roles = this.route.snapshot.data['roles'];
    this.users = this.route.snapshot.data['users'];
    this.getRoles();

    this.utilisateur = new Utilisateur();
    this.loading = true;
    this.useService.currentUser.pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUtilisateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.utilisateur = data;
      }, error => console.log(error));
    }
  loadUtilisateurs() {
    this.userService.getAllUtilisateurs().subscribe(
      data => { this.users = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(
      data => { this.roles = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }

  loadStructures() {
    this.structureService.getStructures().subscribe(
      data => { this.structures = data },
      error => { console.log('An error was occured.') },
      () => { console.log('loading produits was done.') }
    );
  }


  initUtilisateur() {
    this.utilisateur = new Utilisateur();
  }



  logout() {
    this.router.navigate(['/login']);
  }
  getRoles(){
    this.roleService.getRoles().subscribe(
      data => {this.role=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  } 

  updateUtilisateurr() {
    this.userService.updateUtilisateurr(this.id, this.utilisateur)
    .subscribe(data => console.log(data), error => console.log(error));
    this.utilisateur = new Utilisateur();
    alert("Votre modification à été sauvegarder");
    this.gotoList();
  }
  onSubmit() {
    this.updateUtilisateurr();
  }
  gotoList() {
    this.router.navigate(['utilisateur']);
    //  location.reload();
  }





}


