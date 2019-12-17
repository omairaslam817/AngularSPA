import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildParentServiceService {

  private _teacherMessageSource = new Subject<string>();
  teacherSource$ = this._teacherMessageSource.asObservable();

  constructor() { }
  sendMessage(message: string) { //STEP 1 Subject now accpets message from Teacher Component
    this._teacherMessageSource.next(message); //broadcast message to ngOnit() in which any that has subsribe to Observeable
    //STEP2 sending Message from teacher compenent to source
  }
}
