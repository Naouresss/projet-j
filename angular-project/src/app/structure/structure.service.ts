import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Structure } from '../_models/Structure';
import { API_URLS } from '../config/api.url.config';
import { Article } from '../_models/Article';



@Injectable()
export class StructureService{
  private baseUrl = 'http://localhost:8080/structure/structures';
  private baseUrlU = 'http://localhost:8080/structure';
  private baseUrlUr = 'http://localhost:8080/role';
  private baseUrle = 'http://localhost:8080/strart';
  
 constructor(private http: HttpClient){


 }
 getStructures(): Observable<any>{
   return  this.http.get(API_URLS. STRUCTURES_URL);  
 }
 addStructure( structure:Structure): Observable<any>{
     return this.http.post(API_URLS. STRUCTURES_URL,structure);
 }
 updateStructurees( structure:Structure ): Observable<any>{
    return this.http.put(API_URLS. STRUCTURES_URL,structure);
 }

 deleteStructure(idStructure:any):Observable<any>{
     return this.http.delete(API_URLS. STRUCTURES_URL + `/${idStructure}`);
 }


getStructureById(idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/${idStructure}`);
}
getStructuree(id:number,idU:number,idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/ajout/${id}/${idU}/${idStructure}`);
}
getStr(id:number,idU:number,idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/ajoutbondecommande/${id}/${idU}/${idStructure}`);
}
getStructurees(id:number,idU:number,idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/ajoutmagasin/${id}/${idU}/${idStructure}`);
}
getNomS(id:number,idU:number,idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/magasin/${id}/${idU}/${idStructure}`);
}
getSN(id:number,idU:number,idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL+ `/affectrole/${id}/${idU}/${idStructure}`);
}
getNS(id:number,idU:number,idStructure: number): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/updateMagasin/${id}/${idU}/${idStructure}`);
}
getUs(id:number,idU:number,idStructure:number,idUt:number,idR:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlU  + '/recherches/' + id +'/' + idU +'/'+idStructure+'/'+idUt+'/'+idR);
}
getD(id:number,idU:number,idStructure:number,idm:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrle  + '/det/' + id +'/' + idU +'/'+idStructure+'/'+idm);
}
getR(id:number,idU:number,idStructure:number,idUt:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlUr  + '/recherches/' + id +'/' + idU +'/'+idStructure+'/'+idUt);
}
findq(id:number,idU:number,idStructure:number): Observable<any>{
  console.log("jamilpriprcid",id);
  return this.http.get(this.baseUrlU  + '/ajoutbondecommandexterne/' + id +'/' + idU +'/'+idStructure);
}
findByNom(nom: string): Observable<any> {
  return this.http.get(API_URLS. STRUCTURES_URL + `/findByNom/${nom}`);
}
find():Observable<any>{
  return this.http.get(API_URLS. STRUCTURES_URL + `/find`);
}
finds():Observable<any>{
  return this.http.get(API_URLS. STRUCTURES_URL + `/finds`);
}
findStructure(idStructure: number): Observable<any>{
  console.log("jamilpriprcid",idStructure);
  return this.http.get(this.baseUrlU + '/updateOr/' + idStructure);
}
getM(id:number,idU:number,idStructure: number): Observable<any>{
  console.log("jamilpriprcid",idStructure);
  return this.http.get(this.baseUrlU + '/ajoutContact/' + id+'/'+idU+'/'+idStructure);
}
updateStructure(idStructure: number, value: any): Observable<object>{
   return this.http.put(this.baseUrlU + '/updateOr/' + idStructure, value );
 }
/* ajoutProduit(idStructure:number) : Observable<any>{
  return this.http.post(API_URLS. STRUCTURES_URL, `/ajoutP`);
 }*/
updateArticle(idStructure: number, id:number,value: any): Observable<object>{
  return this.http.put(API_URLS. STRUCTURES_URL + '/updateArticle/'+ idStructure +'/' +id,value);
}
updateMagasin(id: number, idU:number,idStructure:number,idS:number,idarticle:number,value: any): Observable<object>{
  return this.http.put(API_URLS. STRUCTURES_URL + '/updateMagasin/'+id+'/'+idU+'/'+ idStructure +'/'+idS+'/' +idarticle,value);
}
updateS(idStructure: number,value: any): Observable<object>{
  return this.http.put(API_URLS. STRUCTURES_URL + idStructure,value );
}

}
