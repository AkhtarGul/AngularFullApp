import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css'],
})
export class PropertybindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  dynName = 'UxTrends';

  //pass dynamic value to disable property binding
  enable: boolean = true;
}
