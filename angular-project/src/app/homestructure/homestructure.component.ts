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
import { Str_art } from '../_models/Str_art';
@Component({
  selector: 'app-homestructure',
  templateUrl: './homestructure.component.html',
  styleUrls: ['./homestructure.component.css']
})
export class HomestructureComponent implements OnInit {
  structureForm!: FormGroup;
  users!: Utilisateur[];
  loginForm!: FormGroup;
  operation: string = 'add'; 
  selectedUser!: Utilisateur;
  selectedStructure! : Structure;
  structures !: Structure[];
utilisateur!:Utilisateur;
loading = false;
user!: Utilisateur;
structure!:Structure;
id!:any;
idU!:any;
idStructure!:any;
str!: Structure[];
role!:Role;
sss!:Str_art[];
stra!:number;
    constructor(private userService: LoginService, private useService: UtilisateurService, private structureService: StructureService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
 
    }
    updateStructure(){
      this.structureService.updateStructurees(this.selectedStructure)
      .subscribe(
        res => {
          this.initStructure();
          this.loadStructures();
        }
      );
    }
    ngOnInit() {
    
      this.loading = true;
        this.userService.currentUser.pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
        this.structure = new Structure();
        this.id = this.route.snapshot.params['id'];
        this.idU = this.route.snapshot.params['idU'];
        this.idStructure = this.route.snapshot.params['idStructure'];
        this.useService.cccc(this.id,this.idU,this.idStructure)
          .subscribe(data => {
            console.log(data)
            this.structure = data;
            //this.Organisation = data; 
          }, error => console.log(error));
     //this.loadStructures();
     this.useService.roler(this.idU)
     .subscribe(data => {
       console.log(data)
       this.role = data;
       //this.Organisation = data; 
     }, error => console.log(error));
     /*this.strartService.vv(this.id,this.idU,this.idStructure)
     .subscribe(data => {
       console.log(data)
       this.stra = data;
       //this.Organisation = data; 
     }, error => console.log(error));*/
     this.getStructures();
     //this.getStr();
    }
    /*updateStructure(idStructure: number){
      this.router.navigate([this.router.url,idStructure]);
     
    }*/
    getStructures(){
      this.structureService.finds().subscribe(
        data => {this.str=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
      /* getStr(){
      this.strartService.cc(this.idU,this.idStructure).subscribe(
        data => {this.sss=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }*/
    ajout(idS:number){
      this.router.navigate(['affectMagasin',this.id,this.idU,this.idStructure,idS]);
     
     
     
     }
    deleteStructure(idStructure:number){
      this.structureService.deleteStructure(idStructure).subscribe(
        res =>{
          this.selectedStructure= new Structure();
         // this.loadStructures();
        }
      );
    
    }
    loadStructures(){
      this.structureService.getStructures().subscribe(
        data => {this.structures=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
    initStructure(){
      this.selectedStructure = new Structure();
      this.createForm();
    }
    createForm(){
      this.structureForm = this.fb.group({
        nom: '',
        emplacement_structure:'',
        tel_structure: '',
        type: '',
        nom_structure: '',
        nom_admin:'',
        nom_agentf:'',
        nom_agentm:'',
        nom_respf:'',
        nom_respm:''
        
      
    
        });
  
    }   
   logout(){
     this.router.navigate(['/login']);
   } 
   modifierStructure(idStructure:number){
     this.router.navigate(['modifier',this.id,this.idU,idStructure])
   }
   cc(){
    this.router.navigate(['suivant',this.id,this.idU,this.idStructure]);
   }
  
   dd(){
    this.router.navigate(['suivant',this.id,this.idU,this.idStructure,'profile']);
   }
   aa(){
    this.router.navigate(['recherche',this.id,this.idU,this.idStructure]);
   }
rrr(){
    this.router.navigate(['bondecommande',this.id,this.idU,this.idStructure]);
   }
   aaa(){
    this.router.navigate(['rbondecommande',this.id,this.idU,this.idStructure]);
   }
   magasin(){
    this.router.navigate(['magasin',this.id,this.idU,this.idStructure]);
   }
   eee(){
    this.router.navigate(['bondecommandexterne',this.id,this.idU,this.idStructure]);
  }
  ddd(){
    this.router.navigate(['rbondecommandexterne',this.id,this.idU,this.idStructure]);
  }
  fff(){
    this.router.navigate(['four',this.id,this.idU,this.idStructure]);
   } 
   contact(){
    this.router.navigate(['list',this.id,this.idU,this.idStructure]);
  }
}

