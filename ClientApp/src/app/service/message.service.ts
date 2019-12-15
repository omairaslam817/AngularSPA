import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage(): string {
    return 'Serice reply message on Calling Constructor';
  }
}
