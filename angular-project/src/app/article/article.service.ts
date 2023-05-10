import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Article } from '../_models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrlU = 'http://localhost:8080/article';
  constructor(private http: HttpClient){


  }
  getArticles(): Observable<any>{
    return  this.http.get(API_URLS. ARTICLES_URL);  
  }
  addArticle( article:Article): Observable<any>{
      return this.http.post(API_URLS. ARTICLES_URL,article);
  }
  /*updateArticle( article:Article ): Observable<any>{
     return this.http.put(API_URLS. ARTICLES_URL,article);
  }*/
  deleteArticle(id:any):Observable<any>{
      return this.http.delete(API_URLS. ARTICLES_URL + `/${id}`);
  }
  findByNom_souscategorie(nom_souscategorie: string): Observable<any> {
    return this.http.get(API_URLS. ARTICLES_URL + `/${nom_souscategorie}`);
  }
  findByNom(designation_francais: string): Observable<any> {
    return this.http.get(API_URLS. ARTICLES_URL + `/${designation_francais}`);
  }
  findById(id: number): Observable<any> {
    return this.http.get(API_URLS. ARTICLES_URL + `/findByMail/${id}`);
  }
  findByIdd(id: number,idU: number,idStructure: number,idS: number,ida: number): Observable<any> {
    console.log("jamilpriprcid",ida);
    return this.http.get(this.baseUrlU + '/affectMagasin/' + id +'/' +idU + '/' +idStructure +'/' +idS + '/' +ida);
  }
  

  findArticle(id: number): Observable<any>{
    console.log("jamilpriprcid",id);
    return this.http.get(this.baseUrlU + '/updateA/' + id);
  }
  updateArticle(id: number, value: any): Observable<object>{
     return this.http.put(this.baseUrlU + '/updateA/' + id, value );
   }
}