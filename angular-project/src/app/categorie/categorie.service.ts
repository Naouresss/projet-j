import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS} from '../config/api.url.config';
import { Categorie } from '../_models/Categorie';


@Injectable()
export class CategorieService{
  private baseUrlU = 'http://localhost:8080/categorie';
  constructor(private http: HttpClient){


  }
  getCategories(): Observable<any>{
    return  this.http.get(API_URLS. CATEGORIES_URL);  
  }
  addCategorie( categorie:Categorie): Observable<any>{
      return this.http.post(API_URLS. CATEGORIES_URL,categorie);
  }
  /*updateCategorie( categorie:Categorie ): Observable<any>{
     return this.http.put(API_URLS. CATEGORIES_URL,categorie);
  }*/
  deleteCategorie(id:any):Observable<any>{
      return this.http.delete(API_URLS. CATEGORIES_URL + `/${id}`);
  }
  findByNom(nom: string): Observable<any> {
    return this.http.get(API_URLS. CATEGORIES_URL + `/findByNom/${nom}`);
  }
 
findCategorie(id: number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlU + '/updateC/' + id);
}
updateCategorie(id: number, value: any): Observable<object>{
   return this.http.put(this.baseUrlU + '/updateC/' + id, value );
 }
}