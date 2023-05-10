import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject,  Observable } from 'rxjs';

import { API_URLS} from '../config/api.url.config';
import { Utilisateur } from '../_models/Utilisateur';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginService{
 
  private currentUserSubject: BehaviorSubject<Utilisateur>;
  public currentUser: Observable<Utilisateur>;
 constructor(private http: HttpClient){

  this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
  this.currentUser = this.currentUserSubject.asObservable();
 }
 getAllUtilisateurs(): Observable<any>{
   return  this.http.get(API_URLS.USER_URL);  
 }
 creatUtilisateur( user:Utilisateur): Observable<any>{
     return this.http.post(API_URLS.USER_URL,user);
 }
 public get currentUserValue(): Utilisateur {
  return this.currentUserSubject.value;
}

findById(id: number): Observable<any> {
  return this.http.get(API_URLS. USER_URL + `/${id}`);
}
findByCinAndPassword( cin:string,password:string ): Observable<any>{
    return this.http.get(API_URLS. USER_URL +`/find/${cin}/${password}`).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      
      return user;
  }));
    
  
 
 }


 deleteUtilisateur(id:number):Observable<any>{
     return this.http.delete(API_URLS.USER_URL + `/${id}`);
 }

} 