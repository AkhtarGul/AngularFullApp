import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private msgSrv: MessageService) {
    this.msgSrv.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  ngOnInit() {}
  userName: string = 'Test';
  getName(uname) {
    confirm(uname.value);
    this.msgSrv.userName.next(uname.value);
  }
}
