import { Injectable } from '@angular/core';
import { Users } from 'models/users';
import { HttpClient } from '@angular/common/http';
import { serverPath } from 'constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  constructor(private http: HttpClient) { }


  register(user: Users) {
    return this.http.post(`${serverPath}/user/newUser`, user);
}
	
}
