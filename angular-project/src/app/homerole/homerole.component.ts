import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import{AppService}from '../app.service';
import{Router, ActivatedRoute, RouterLink} from '@angular/router';
import { Utilisateur } from '../_models/Utilisateur';

import { StructureService } from '../structure/structure.service';
import { Structure } from '../_models/Structure';
import{LoginComponent} from '../login/login.component'
import { UtilisateurService } from '../utilisateur/utilisateur.service';

import { first } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-homerole',
  templateUrl: './homerole.component.html',
  styleUrls: ['./homerole.component.css']
})
export class HomeroleComponent implements OnInit {

  users!: Utilisateur[];
  loginForm!: FormGroup;
  operation: string = 'add'; 
  selectedUser!: Utilisateur;
  selectedStructure !: Structure;
  structures !: Structure[];
utilisateur!:Utilisateur;
loading = false;
user!: Utilisateur;
structure!:Structure;
id!:any;
idU!:any;
    constructor(private userService: LoginService, private useService: UtilisateurService, private structureService: StructureService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    ngOnInit() {
    
      this.loading = true;
        this.userService.currentUser.pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
        //this.structure = new Structure();
        this.id = this.route.snapshot.params['id'];
        this.idU = this.route.snapshot.params['idU'];
        this.useService.findById(this.id,this.idU)
          .subscribe(data => {
            console.log(data)
            this.structures = data;
            //this.Organisation = data; 
          }, error => console.log(error));
     //this.loadStructures();
    }
    loadStructures() {
      this.structureService.getStructures().subscribe(
        data => { this.structures = data },
        error => { console.log('An error was occured.') },
        () => { console.log('loading produits was done.') }
      );
    }
 suivant(idStructure:any){
  this.router.navigate([this.router.url,idStructure]);
 }
    
   logout(){
     this.router.navigate(['/login']);
   } 
   createForm(){
    this.loginForm = this.fb.group({
      cin: ['', Validators.required],
      password:['', Validators.required],
      
  
      });
 
  }
}

