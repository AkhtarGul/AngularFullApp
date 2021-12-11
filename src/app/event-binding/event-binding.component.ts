import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Message: string = '';
  onNotify() {
    this.Message = 'hi click button';
  }
  clickInput(event) {
    console.log(event.target.value);
  }
  addCart(event) {
    this.Message = event.target.value + ' sadded to Cart';
  }

  //reference or template variable
  getInputValue(infoInput) {
    console.log(infoInput.name);
  }
}
