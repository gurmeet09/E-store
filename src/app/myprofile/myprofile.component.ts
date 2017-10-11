import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
username;
array:any=[];
data:any;
  constructor(private activatedRoute:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.array = [
      {
        'Firstname': 'Jason',
        'Lastname':'Nash',
        'name':'jason',
        'password':'jason'
      }, {
        'Firstname': 'Newton',
        'Lastname':'Ton',
        'name': 'Newton',
        'password':'newton'
      }, {
        'Firstname': 'Gurmeet',
        'Lastname':'Kaur',
        'name': 'user',
        'password':'user'
      }
    ];
    this.data=this.array[0].name
  }
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.username=params['username']
    user(username){
      for(let i=0;i<this.array.length;i++){
        let username = this.array[i].name;
        console.log(this.array[i])
        if(this.array[i].name===this.username)
          {
            const session = sessionStorage.getItem('username');
            // this.router.navigate(['/products/'+username])
          }
          else{
            console.log("invalid");
          }
      }
    }
  }


