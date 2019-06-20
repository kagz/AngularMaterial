import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
import {  ReactiveFormsModule }         from '@angular/forms';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { NewprofileComponent } from './newprofile/newprofile.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NotfoundComponent } from './errorpages/notfound/notfound.component';
import { ServererrorComponent } from './errorpages/servererror/servererror.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { OwnerDataComponent } from './owner/owner-details/owner-data/owner-data.component';
import { AccountDataComponent } from './owner/owner-details/account-data/account-data.component';
import { SuccessDialogComponent } from './shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/dialogs/error-dialog/error-dialog.component';
import { LoginServiceService } from './services/login-service.service';
import { UserServiceService } from './services/user-service.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,

    ForgetpasswordComponent,
    HomePageComponent,
    CreateprofileComponent,
    SigninComponent,
    HeaderComponent,
    SidenavComponent,
    NewprofileComponent,
    JobpostComponent,
    ViewprofileComponent,
    NotfoundComponent,
    ServererrorComponent,
    HomedetailsComponent,
    OwnerDataComponent,
    AccountDataComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,

  
   
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
LoginServiceService,
UserServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
