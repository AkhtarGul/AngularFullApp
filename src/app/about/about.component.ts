import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private proSrv:ProductService) { }
product:any;
  ngOnInit() {
    this.proSrv.getProduct().subscribe(res=>{
      this.product=res;
    })
  }

}