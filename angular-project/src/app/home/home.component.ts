import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Structure } from '../_models/Structure';
import { LoginService } from '../login/login.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Utilisateur[] | undefined;
  loginForm: FormGroup | undefined;
  operation: string = 'add'; 
  selectedUser: Utilisateur | undefined;
  selectedStructure : Structure | undefined;
  structures : Structure[] | undefined;

loading = false;
user: Utilisateur | undefined;

    constructor(private userService: LoginService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) {
      this.createForm();
    }
    ngOnInit() {
    
      this.loading = true;
        this.userService.currentUser.pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
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
