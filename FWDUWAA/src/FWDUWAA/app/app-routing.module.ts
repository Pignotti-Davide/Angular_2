/**
 * New typescript file
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent }   from './user/user.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserLoginComponent} from './user/user-login/user-login.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'user/:id',  component: UserComponent },
  { path: 'register', component:UserRegisterComponent},
  { path: 'log-in', component:UserLoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}