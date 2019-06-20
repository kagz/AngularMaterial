import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor(private authenticationService: AuthenticationserviceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
      let currentUser = this.authenticationService.currentUserValue;
      if (currentUser && currentUser.token) {
          request = request.clone({
              setHeaders: { 
                  Authorization: `Bearer ${currentUser.token}`
              }
          });
      }

      return next.handle(request);
  }


}
