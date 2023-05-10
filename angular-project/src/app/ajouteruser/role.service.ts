import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';







@Injectable()
export class RoleService{
  constructor(private http: HttpClient){

  }
  getRoles(): Observable<any>{
    return  this.http.get(API_URLS. ROLES_URL);  
  }


}