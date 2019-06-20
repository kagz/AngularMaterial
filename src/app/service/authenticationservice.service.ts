import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from 'models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

 
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Users {
      return this.currentUserSubject.value;
  }



  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
