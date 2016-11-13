import { Injectable } from '@angular/core';

import {User} from './user';

@Injectable()
export class UserService {

  constructor() {
  }

  addUser(user) {
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://localhost:8080/FWDUWAA/webapi/user/create'
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/JSON");
    xmlhttp.setRequestHeader("Content-Length", user.length);
    xmlhttp.setRequestHeader('Accept', 'application/json');
    xmlhttp.onreadystatechange = function() { //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
      }
    }
    xmlhttp.send(user);
  }

  getUser(accessParam) {
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://localhost:8080/FWDUWAA/webapi/user/get/' + accessParam.accessName + '/' + accessParam.password;
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() { //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        alert(xmlhttp.responseText);
      else console.log("something wrong");
    }
    xmlhttp.send();
    console.log(xmlhttp.responseText);
  }

}
