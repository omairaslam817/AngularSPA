import { Component, OnInit, Input } from '@angular/core';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() pData: string;
  @Input() artList: any = [];
  parentCurrentValue: string;
  privousParentValue: string;
  constructor() {
    alert('Child Component called');
  }

  ngOnInit() {
    alert('Child Component NgOnInit called');
    this.privousParentValue = "Omair";
    this.parentCurrentValue = "aslam";
    alert("parentPreviousValue:" + this.privousParentValue + " parentCurrentValue:" + this.parentCurrentValue);
  }
  ngOnChanges(changes: any) {
    alert('ngOnChanges Life Cycle Hook called');
    for (let propertyName in changes) {
      let change = changes[propertyName];
      this.parentCurrentValue = change.currentValue;
      this.privousParentValue = change.previousValue;
      alert(propertyName + "=> parentPreviousValue:" + this.privousParentValue + " parentCurrentValue:" + this.parentCurrentValue);
    }
  }

  ngDoCheck() {
    alert('Ng Do Check Life Cycle Hook');
  }
}
