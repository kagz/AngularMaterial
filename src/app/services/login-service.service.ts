import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {serverPath} from '../../../constants/app-constants'


import {map} from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  
 
  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(
      `${serverPath}/token`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    
  }
  
}
