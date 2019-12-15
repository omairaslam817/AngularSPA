import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  msg: string;
  myArt: any = ['Angular 5', 'Angular 6','Angular 8'];
  constructor(private msgService: MessageService) {
    this.msg = this.msgService.getMessage();
    alert(this.msg);
    alert('Parent Component called');
  }

  ngOnInit() {
    alert('Parent Component NgOnInit called');
  }
  addValue() {
    this.myArt.push("Angular 9");
  }
}
