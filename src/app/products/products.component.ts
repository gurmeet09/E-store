import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router'; 
import { Productservice } from '../app.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data1: any = [];
  username;

  constructor(private activatedRoute:ActivatedRoute, private service:Productservice,  public router:Router) {  }
   products:any = [
    {
      "productImage":"http://www.reliancedigital.in/media/catalog/product/cache/9/image/1800x/040ec09b1e35df139433887a97daa66f/l/y/lyf-jiofi-_router-_m2-491193575-i-1_2.png",
      "productName":"Jiofi",
      "price":"Rs.999"
  },
  {
      "productImage":"https://n1.sdlcdn.com/imgs/f/d/o/Micromax-Spark-Vdeo-Q15-8GB-SDL092310467-1-f434c.jpg",
      "productName":"Mobile",
      "price":"Rs.9999"
  },
  {
      "productImage":"http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05487351.png",
      "productName":"Laptop",
      "price":"Rs.45999"
  }
  ];
  ngOnInit() {
this.activatedRoute.params.subscribe((params: Params) => {
  this.username=params['username'];
})
  }
  productlink(event, item){
    console.log('hee',event,item)
  }
  show(productName){
    console.log('hhd',productName)
    this.router.navigate(['/productdetail/'+productName])
  }
  user(username){
    console.log('hhd',username)
    this.router.navigate(['/myprofile/'+username])
  }
  
}
