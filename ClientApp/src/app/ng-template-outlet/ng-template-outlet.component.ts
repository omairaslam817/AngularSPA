import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnInit {
 myinfo = { $implicit: 'imran', size: 50, alt: 'image_name' };
  constructor() { }

  ngOnInit() {
  }

}
