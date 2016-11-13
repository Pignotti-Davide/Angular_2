import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import{UserService} from '../user.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model=new Object();
  userService :UserService=new UserService();
  
  constructor() { }

  ngOnInit() {
  }
onSubmit() {
   this.userService.getUser(this.model);
    
  };
}
