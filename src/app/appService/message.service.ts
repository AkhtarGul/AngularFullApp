import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messageAlert() {
    alert('This is Message Service');
  }
}
