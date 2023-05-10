import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit() {
    this.initUtilisateur();
      this.users = this.route.snapshot.data['users'];
  }
  users!: Utilisateur[];
  loginForm!: FormGroup ;
  operation: string = 'add'; 
  public selectedUser!: Utilisateur;
  constructor(private userService: LoginService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
    this.createForm();

  }
  createForm(){
    this.loginForm = this.fb.group({
      cin: ['', Validators.required],
      password:['', Validators.required],
      
  
      });
 
  }
  loadUtilisateurs(){
    this.userService.getAllUtilisateurs().subscribe(
      data => {this.users=data},
      error =>{console.log('An error was occured.')},
    () => {console.log('loading produits was done.')}
      );
  }
  initUtilisateur(){
    this.selectedUser = new Utilisateur();
    this.createForm();
  }
  get f() { return this.loginForm.controls; }

 findByCinAndPassword(cin: any,password: any){
    this.users = this.route.snapshot.data['users'];
    
    this.loadUtilisateurs();
    



    this.userService.findByCinAndPassword(this.f['cin'].value, this.f['password'].value)
        .pipe(first())
        .subscribe(
            data => {
          /* for(let i=0;i<100;i++){
               if(data.role=="SuperAdmin")
                    this.router.navigate(["/home"]);
               else{
                    //this.router.navigate(['suivant',data.id]);
                  alert('cin ou password invalide');
                  this.router.navigate(['/login']);}

            }*/
            for(let i=0;i<100;i++){
              if(data.roles[i].name=="SuperAdmin")
                   this.router.navigate(["/home"]);
    
                   else
                   this.router.navigate(['suivant',data.id]);

           }
        

      }, error => console.log(error));
  }

  }
     