import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  clients = [
    { name: 'omair', paid: false, money: 100 },
    { name: 'ali', paid: true, money: 50 },
    { name: 'imran', paid: true, money: 150 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
