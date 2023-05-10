import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Structure } from '../_models/Structure';
import { StructureService } from '../structure/structure.service';
import { LoginService } from '../login/login.service';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-ajoutstructure',
  templateUrl: './ajoutstructure.component.html',
  styleUrls: ['./ajoutstructure.component.css']
})
export class AjoutstructureComponent implements OnInit {
  user!:Utilisateur;
  loading = false;
  users!: Utilisateur[];
  structures!: Structure[];
  structureForm!: FormGroup;
  operation: string = 'add';
  selectedStructure!: Structure;
  selectedUser!: Utilisateur;
  str!:Structure[];
  submitted=false;
    constructor(private structureService: StructureService,private useService: LoginService,private userService: UtilisateurService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
     // this.createForm();
    }

    ngOnInit() {
      this.initStructure();
      this.structures = this.route.snapshot.data['structures'];
  this.structures
      this.loadStructures();
      this.find();
      this.loadUtilisateurs();
      this.structureForm = this.fb.group({
        nom: ['', Validators.required],
        codeStructure: ['', Validators.required],
        emplacement_structure:['', Validators.required],
        tel_structure: ['', Validators.required],
        type:['', Validators.required],
        
        nom_admin:'',
        nom_structure:''
    
        });
    this.loading = true;
        this.useService.currentUser.pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
    }
    get f() { return this.structureForm.controls; }
    loadUtilisateurs(){
      this.userService.getAllUtilisateurs().subscribe(
        data => {this.users=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
    find(){
      this.structureService.finds().subscribe(
        data => {this.str=data},
        error =>{console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}
        );
    }
    createForm(){
      this.structureForm = this.fb.group({
        nom: ['', Validators.required],
        codeStructure: ['', Validators.required],
        emplacement_structure:['', Validators.required],
        tel_structure: ['', Validators.required],
        type: ['', Validators.required],
        nom_agentm:'',
        nom_agentf:'',
        nom_respm:'',
        nom_respf:'',
        nom_resp:'',
        nom_admin:'',
        nom_structure:''
    
        });
  
    }
  loadStructures(){
    this.structureService.getStructures().subscribe(
      data => {this.structures=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }
  onSubmit(){
    this.submitted = true;
    if (this.structureForm.valid) {
    const p = this.structureForm.value;
    this.structureService.addStructure(p).subscribe(
      res => {
       this.initStructure();
        this.loadStructures();
        alert('Structure ajouté!! :-)\n\n');
        this.gotoList();
      }
    );
    }
  }
  gotoList(){
    this.router.navigate(['structure']);
  }
 /* updateStructure(){
    this.structureService.updateStructure(this.selectedStructure)
    .subscribe(
      res => {
        this.initStructure();
        this.loadStructures();
      }
    );
  }*/
  initStructure(){
    this.selectedStructure = new Structure();
    this.createForm();
    this.loadStructures();
  }
 
  
  logout(){
    this.router.navigate(['/login']); 
  }

}
