import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageTagComponent } from './message-tag/message-tag.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public date: Date;
  @ViewChild(MessageTagComponent) public messageTag: MessageTagComponent;

  ngOnInit() { }
  insetMessage(item) {
    this.messageTag.addMessage(item.t, item.m);
  }

}
