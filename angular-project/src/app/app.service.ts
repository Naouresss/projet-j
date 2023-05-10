import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { API_URLS } from './config/api.url.config';
//import 'rxjs/add/operator/finally';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AppService {
authenticated: boolean = false;

constructor(private http: HttpClient, private cookieService : CookieService) { }

authenticate(credentials: { cin: string; password: string; }, callback: () => any) {
  if(credentials){
    const token = btoa(credentials.cin + ':' + credentials.password);
  this.cookieService.set('token', token);


    this.http.get(API_URLS.USER_URL).subscribe(response => {
        if (response) {
          //console.log(response);
            this.authenticated = true;
          
          

        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });
  }
  else{
    this.authenticated = false;
  }

}

logout(callback: () => any){
  this.authenticated = false;
  return callback && callback();
}

}