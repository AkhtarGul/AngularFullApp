import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messageAlert() {
    alert('This is Message Service');
  }

  // userName = new Subject<any>();

  //set initial value of behaviour Subject
  userName=new BehaviorSubject('Test');
}
