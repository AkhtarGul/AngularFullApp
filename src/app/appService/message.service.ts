import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messageAlert() {
    alert('This is Message Service');
  }

  userName = new Subject<any>();
}
