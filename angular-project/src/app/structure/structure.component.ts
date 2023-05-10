import { Component, OnInit, ViewChild } from '@angular/core'; 

import { ActivatedRoute, Router } from '@angular/router';
 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatSort } from '@angular/material/sort';
import { interval, Subscription } from 'rxjs';
import { StructureService } from './structure.service';
import { Structure } from '../_models/Structure';
import { Utilisateur } from '../_models/Utilisateur';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { first } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  users: Utilisateur[] | undefined;
  user: Utilisateur[] | undefined;
  user1:Utilisateur[] | undefined;
  user2:Utilisateur[] | undefined;
structures!: Structure[] ;
structureForm: FormGroup | undefined;
operation: string = 'add';
selectedStructure: Structure | undefined;
str: Structure[] | undefined;
selectedUser: Utilisateur | undefined;
selectedStr : Structure | undefined;
use:Utilisateur | undefined;
loading=false;
  constructor(private useService:LoginService,private structureService: StructureService,private userService: UtilisateurService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
    this.createForm();
  }
  updateSubscription : Subscription | undefined;
  displayedColumns: string[] = ['codeStructure','nom','type','emplacement_structure', 'tel_structure', 'update', 'Delete'];
  dataSource!: MatTableDataSource<Structure> ;
  listformat:Structure[] | undefined;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;
  ngOnInit() {
    this.initStructure();
    this.structures = this.route.snapshot.data['structures'];

    this.loadStructures();
    this.getStructures();

    this.loading = true;
    this.useService.currentUser.pipe(first()).subscribe(use => {
      this.loading = false;
      this.use = use;
  });
  this.structureService.getStructures().subscribe(
    (res: any) => {
      this.listformat= res; 
      this.dataSource = new MatTableDataSource(this.listformat);
      this.dataSource.paginator == this.paginator;  
      this.dataSource.sort == this.sort;
     
       
    })
  }


  createForm(){
    this.structureForm = this.fb.group({
      nom: ['', Validators.required],
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
  
loadStructures(){
  this.structureService.getStructures().subscribe(
    data => {this.structures=data},
    error =>{console.log('An error was occured.')},
  () => {console.log('loading produits was done.')}
    );
}
getStructures(){
  this.structureService.finds().subscribe(
    data => {this.str=data},
    error =>{console.log('An error was occured.')},
  () => {console.log('loading produits was done.')}
    );
}
addStructure(){
  const p = this.structureForm!.value;
  this.structureService.addStructure(p).subscribe(
    res => {
     this.initStructure();
      this.loadStructures();
    }
  );

}

updateStructure(idStructure: any){
  this.router.navigate(['updateO', idStructure]);
 
}
ajout(idStructure:number){
 this.router.navigate(['updateArticle',idStructure]);



}
initStructure(){
  this.selectedStructure = new Structure();
  this.createForm();
  this.loadStructures();
}
deleteStructure(idStructure:any){
  this.structureService.deleteStructure(idStructure).subscribe(
    res =>{
      this.selectedStructure= new Structure();
      this.loadStructures();
    }
  );

}
/*updateStructure(){
  this.router.navigate(['update']);
}*/
structureDetails(idStructure: number){
  this.router.navigate(['details', idStructure]);
}
logout(){
  this.router.navigate(['/login']); 
}
findstructure(nom: string){

  this.router.navigate(['findStructure', this.selectedStructure!.nom ]);

}
applyFilter(filterValue: string) {
  this.dataSource!.filter = filterValue.trim().toLowerCase();

  if (this.dataSource!.paginator) {
    this.dataSource!.paginator.firstPage();
  }
}


}


