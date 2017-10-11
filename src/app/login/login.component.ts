import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  names:any = [];
  data:any
  public loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(public fb: FormBuilder, public router:Router) {}

  ngOnInit() {
    this.names = [
      {
        'name': 'Jason',
        'password':'jason'
      }, {
        'name': 'Newton',
        'password':'newton'
      }, {
        'name': 'user',
        'password':'user'
      }
    ];
    this.data=this.names[0].name
  }

  doLogin(event) {
    console.log(event);
    for(let i=0;i<this.names.length;i++){
      let username = this.names[i].name;
      console.log(this.names[i])
      if(this.names[i].name===this.loginForm.value.name)
        {
          localStorage.setItem('username',username);
          this.router.navigate(['/products/'+username])
        }
        else{
          console.log("invalid");
        }
    }
    console.log('hell',this.data);
    console.log(this.loginForm.value);
  }

}