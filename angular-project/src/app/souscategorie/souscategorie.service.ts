import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_URLS} from '../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { SousCategorie } from '../_models/SousCategorie';
@Injectable()
export class SouscategorieService {
  private baseUrlU = 'http://localhost:8080/souscategorie';
  constructor(private http: HttpClient){

  }
  getSousCategories(): Observable<any>{
    return  this.http.get(API_URLS. SOUSCATEGORIES_URL);  
  }
  addSousCategorie( souscategorie:SousCategorie): Observable<any>{
      return this.http.post(API_URLS. SOUSCATEGORIES_URL,souscategorie);
  }
  /*updateSousCategorie( souscategorie:SousCategorie ): Observable<any>{
     return this.http.put(API_URLS. SOUSCATEGORIES_URL,souscategorie);
  }*/
  deleteSousCategorie(id:number):Observable<any>{
      return this.http.delete(API_URLS. SOUSCATEGORIES_URL + `/${id}`);
  }
 findByNom_categorie(nom_categorie: string): Observable<any> {
  return this.http.get(API_URLS. SOUSCATEGORIES_URL + `/${nom_categorie}`);
}

findSousCategorie(id: number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlU + '/updateS/' + id);
}
updateSousCategorie(id: number, value: any): Observable<object>{
   return this.http.put(this.baseUrlU + '/updateS/' + id, value );
 }
}