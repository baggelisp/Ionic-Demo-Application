import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
  confirm_password: string = ""; 

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(
     this.name + ', ' + this.email + ', ' + this.password + ', ' + this.confirm_password
    )
 }

}
