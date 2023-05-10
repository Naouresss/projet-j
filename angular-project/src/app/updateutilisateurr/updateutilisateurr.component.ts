import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../_models/Utilisateur';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-updateutilisateurr',
  templateUrl: './updateutilisateurr.component.html',
  styleUrls: ['./updateutilisateurr.component.css']
})
export class UpdateutilisateurrComponent  {
  id: any | undefined;
  user!: Utilisateur;
  loading = false;
  utilisateur!: Utilisateur;
  constructor(private userService: UtilisateurService, private route: ActivatedRoute,private useService: LoginService, private router: Router) {
 
  }
  
  ngOnInit() {
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


  logout() {
    this.router.navigate(['/login']);
  }


  updateUtilisateur() {
    this.userService.updateUtilisateur(this.id, this.utilisateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.utilisateur = new Utilisateur();
    alert("Votre modification à été sauvegarder");
    this.gotoList();
  }

  onSubmit() {
    this.updateUtilisateur();
  }
  gotoList() {
    this.router.navigate(['utilisateur']);
    //  location.reload();
  }



}


