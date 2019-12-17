import { Component, OnInit } from '@angular/core';
import { ChildParentServiceService } from '../Service/child-parent-service.service';

@Component({
  selector: 'app-child-parent-talk-using-service',
  templateUrl: './child-parent-talk-using-service.component.html',
  styleUrls: ['./child-parent-talk-using-service.component.css']
})
export class ChildParentTalkUsingServiceComponent implements OnInit {//Student component 

  constructor(private interactionService: ChildParentServiceService) { }

  ngOnInit() {
    this.interactionService.teacherSource$.subscribe(message => {

      if (message == 'Good Morning') {
        alert("Good Morning Teacher");
      }
      else if (message == 'Wel Done') {
        alert("Thankyou Teacher");
      }
    })
  }
  //STEP3 Subscribe to Observaeable in child component,making using Subject as an Observeable


}
