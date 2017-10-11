import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


// when class does not have any own decorator and need to have a certain depedency
// like http in this case then injectable decorator is used.
// injectable means some depedency is injected in class not that class can be injected in other classes.
@Injectable()
export class Productservice implements OnInit {

  constructor(private _http:Http) { }

  private url:string = "app/product.json";

  getProducts() {
        return this._http.get(this.url)
          .map((res:Response)=>{ 
              const data = res.json();
              console.log('hhdd',data)
            return data;});
          
  }
  ngOnInit() {
      this.getProducts();
      console.log('dfsdfsdfdd',this.url)
  }

}