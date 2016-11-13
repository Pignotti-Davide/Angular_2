import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import{UserService} from '../user.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  model: User=new User('','','','','');
  userService :UserService=new UserService();
  constructor() { }
ngOnInit() {
  };
  
  
  onSubmit() {
    console.log(this.model);
    var jsonUser: string=JSON.stringify(this.model);
    this.userService.addUser(jsonUser);
  };
}
