import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/appService/message.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private msgSrv: MessageService) {
    this.msgSrv.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  ngOnInit() {}
  userName: string = 'Test';
  getName(uname) {
    confirm(uname.value);
    this.userName = uname.value;
  }
}
