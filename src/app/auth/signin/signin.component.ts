import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username = ''
  password = ''
  loginError= false
  constructor(private router: Router,
    
    private basicAuthenticationService: LoginServiceService) { }
  ngOnInit() {
  }
  onLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['/'])
            this.loginError = false      
          },
          error => {
            console.log(error)
            this.loginError = true
          }
        )
  }

}
