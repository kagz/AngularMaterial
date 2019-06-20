import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { NotfoundComponent } from './errorpages/notfound/notfound.component';

import { ServererrorComponent } from './errorpages/servererror/servererror.component';

const routes: Routes = [
{path:'', component: HomePageComponent },
{path:'myprofile', component: CreateprofileComponent },
{path:'forgetpassword', component: ForgetpasswordComponent },
{path:'signup', component: SignupComponent },
{path:'login', component: SigninComponent },
{ path: '404', component: NotfoundComponent}, 
{ path: '500', component: ServererrorComponent },
{ path: 'details/:id', component: HomedetailsComponent},

{ path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
