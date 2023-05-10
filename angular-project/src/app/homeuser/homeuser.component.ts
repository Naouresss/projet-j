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
import { Role } from '../_models/Role';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent  implements OnInit {
  users!: Utilisateur[];
  loginForm!: FormGroup;
  operation: string = 'add'; 
  selectedUser!: Utilisateur;
  selectedStructure! : Structure;
  structures !: Structure[];
utilisateur!:Utilisateur;
role!:Role;
loading = false;
user!: Utilisateur;
id!:any;
roles!:Role[];
    constructor(private userService: LoginService, private useService: UtilisateurService, private structureService: StructureService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    ngOnInit() {
    
      this.loading = true;
        this.userService.currentUser.pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
        //this.role = new Role();
        this.id = this.route.snapshot.params['id'];
       
        this.useService.Name(this.id)
          .subscribe(data => {
            console.log(data)
            this.roles = data;
            //this.Organisation = data; 
          }, error => console.log(error)); 
    }
  
  suivant(id:any,idU:any){
    this.router.navigate(['suivant',id,idU]);
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
