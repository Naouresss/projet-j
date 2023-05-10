import { Component, OnInit } from '@angular/core';
import { Structure } from '../_models/Structure';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../_models/Utilisateur';
import { StructureService } from '../structure/structure.service';
import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-updatestructure',
  templateUrl: './updatestructure.component.html',
  styleUrls: ['./updatestructure.component.css']
})
export class UpdatestructureComponent implements OnInit {
  structures!: Structure[];
  structureForm!: FormGroup;
  operation: string = 'add';
  selectedStructure!: Structure;
    idStructure !: any;
  structure!: Structure;
  selectedUser!: Utilisateur;
  user!:Utilisateur;
  loading=false;
  users !: Utilisateur[];
  str!:Structure[];
  constructor(private structureService: StructureService,private userService: LoginService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    
    ngOnInit() {
     /* this.initStructure();
      this.structures = this.route.snapshot.data.structures;
  
      this.loadStructures();*/
      this.structure = new Structure();
      this.idStructure = this.route.snapshot.params['idStructure'];
      this.structureService.findStructure(this.idStructure) 
      .subscribe(data => { console.log(data) 
       this.structure = data;
        //this.Organisation = data; 
      }, error => console.log(error)); 
      this.loadUtilisateurs();

      this.loading = true;
          this.userService.currentUser.pipe(first()).subscribe(user => {
              this.loading = false;
              this.user = user;
          });
          this.find();
      }
    createForm(){
      this.structureForm = this.fb.group({
        nom: ['', Validators.required],
        codeStructure: ['', Validators.required],
        emplacement_structure:'',
        tel_structure: '',
        nom_admin: '',
        prenom_admin: '',
       cin: '',
        password_admin: '',
        nom_structure:''
    
        });
  
    }
    find(){
      this.structureService.finds().subscribe(
        data => {this.str=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
  loadStructures(){
    this.structureService.getStructures().subscribe(
      data => {this.structures=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }
  addStructure(){
    const p = this.structureForm.value;
    this.structureService.addStructure(p).subscribe(
      res => {
       this.initStructure();
        this.loadStructures();
      }
    );
  
  }
  /*updateStructure(){
    this.structureService.updateStructure(this.selectedStructure)
    .subscribe(
      res => {
        this.initStructure();
        this.loadStructures();
      }
    );
  }*/
  updateStructure() { 
    this.structureService.updateStructure(this.idStructure, this.structure) 
    .subscribe(data => console.log(data), error => console.log(error)); 
    this.structure = new Structure(); 
    alert("Votre modification à été sauvegarder");
    this.gotoList(); 
  }
  onSubmit() { 
    this.updateStructure();
    }
  gotoList() { 
    this.router.navigate(['structure']); 
  //  location.reload();
   }
  initStructure(){
    this.selectedStructure = new Structure();
    this.createForm();
    this.loadStructures();
  }
  deleteStructure(){
    this.structureService.deleteStructure(this.selectedStructure.idStructure).subscribe(
      res =>{
        this.selectedStructure= new Structure();
        this.loadStructures();
      }
    );
  
  }
  
  structureDetails(idStructure: number){
    this.router.navigate(['details', idStructure]);
  }
  logout(){
    this.router.navigate(['/login']); 
  }


  loadUtilisateurs(){
    this.userService.getAllUtilisateurs().subscribe(
      data => {this.users=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }


  
  }
  
  
  