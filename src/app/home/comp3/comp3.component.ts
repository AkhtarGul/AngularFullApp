import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private msgSrv: MessageService) {
    this.msgSrv.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  ngOnInit() {
  }
  userName: string ;
  getName(uname) {
    confirm(uname.value);
    this.msgSrv.userName.next(uname.value);
  }
}