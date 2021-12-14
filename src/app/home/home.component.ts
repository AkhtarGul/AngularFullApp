import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private msgSrv: MessageService) {}

  ngOnInit() {}
  msgAlert() {
    this.msgSrv.messageAlert();
  }
}
