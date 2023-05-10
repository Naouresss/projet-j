import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Utilisateur } from '../_models/Utilisateur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  [x: string]: any;
  private baseUrlU = 'http://localhost:8080/user';
  private baseUrlUe = 'http://localhost:8080/role';
  private baseUrlUr = 'http://localhost:8080/auth';
 constructor(private http: HttpClient){


 }
 getAllUtilisateurs(): Observable<any>{
   return  this.http.get(API_URLS.USER_URL);  
 }
 creatUtilisateur( user:Utilisateur): Observable<any>{
     return this.http.post(API_URLS.USER_URL,user);
 }

 deleteUtilisateur(id:number):Observable<any>{
     return this.http.delete(API_URLS.USER_URL + `/${id}`);
 }
 updateProfile( utilisateur:Utilisateur ): Observable<any>{
  return this.http.put(API_URLS.USER_URL,utilisateur);
}
getUtilisateur(id: number): Observable<any> {
  return this.http.get(API_URLS. USER_URL + `/${id}`);
}

findf():Observable<any>{
  return this.http.get(API_URLS. USER_URL +`/findf`);
}

finda():Observable<any>{
  return this.http.get(API_URLS. USER_URL +`/finda`);
}

findByCinAndPassword( cin:string,password:string ): Observable<any>{
  return this.http.get(API_URLS.USER_URL+ `/find/${cin}/${password}`);
   


}
findUtilisateur(id: number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlU + '/updateUt/' + id);
}
updateUtilisateur(id: number, value: any): Observable<object>{
   return this.http.put(this.baseUrlU + '/updateUt/' + id, value );
 }
 updateUtilisateurr(id: any, value: any): Observable<object>{
  return this.http.put(this.baseUrlU + '/updateU/' + id, value );
}
updateUtilisateurres(idUt: number, value: any): Observable<object>{
  return this.http.put(this.baseUrlU + '/updateU/' + idUt, value );
}
findById(id:number,idU:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlUr  + '/suivant/' + id +'/' + idU);
}
Name(id:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlUr  + '/suivant/' + id );
}
cccc(id:number,idU:number,idStructure:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlUr  + '/suivant/' + id +'/' + idU +'/'+idStructure);
}
updateUtilisateurre(id:number,idU:number,idStructure:number, value: any): Observable<object>{
  console.log("jamilpriprcid",id);
  return this.http.put(this.baseUrlUr  + '/update/' + id +'/' + idU +'/'+idStructure , value);
}
updateUser(id:number,idU:number,idStructure:number,idUt:number, value: any): Observable<object>{
  console.log("jamilpriprcid",id);
  return this.http.put(this.baseUrlU  + '/update/' + id +'/' + idU +'/'+idStructure +'/'+idUt, value);
}
getU(id:number,idU:number,idStructure:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlUr  + '/suivant/' + id +'/' + idU +'/'+idStructure+'/profile');
}
getUser(id:number,idU:number,idStructure:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlU  + '/recherche/' + id +'/' + idU +'/'+idStructure);
}
roler(idU:number): Observable<any>{
 
  return this.http.get(this.baseUrlUe +'/cc/' +idU );
}
}