import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  proSelected: boolean = false;
  selectProduct: string;
  addedPorduct: any;

  onSelectProduct(pro: string) {
    this.proSelected = true;
    this.selectProduct = pro;
  }
  onCart(value) {
    this.addedPorduct = value;
    console.log(this.addedPorduct);
  }
}
