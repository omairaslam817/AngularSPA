import { Component } from '@angular/core';
import { ChildParentServiceService } from './child-parent/Service/child-parent-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private interactionService: ChildParentServiceService) {

  }
  // STEP2 send message from Teacher compent to source subject
  greetStudent() {
    this.interactionService.sendMessage("Good Morning");

  }
  appricateStudent() {
    this.interactionService.sendMessage("Wel Done");
  }
}
