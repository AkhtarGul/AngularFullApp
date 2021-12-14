import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() productSelected: boolean = false;
  @Output() passProduct = new EventEmitter<any>();
  // proSelected: boolean = false;
  @Input() selectProduct: string;
  addedPorduct: any;
  onCart() {
    this.addedPorduct = this.selectProduct;
    console.log(this.addedPorduct);
    this.passProduct.emit(this.addedPorduct);
  }
  // onSelect(){

  // }
}
