import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationserviceService } from 'src/app/service/authenticationservice.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  registerForm: FormGroup;
 //loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationserviceService,
      private userService: UserServiceService,
     // private alertService: AlertService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          
          email: [''],
          username: ['']
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      //this.loading = true;
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                //  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                 // this.alertService.error(error);
               //   this.loading = false;
              });
  }
}
