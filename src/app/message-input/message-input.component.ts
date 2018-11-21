import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output() public messageEvent = new EventEmitter();
  @Output() public dateEvent = new EventEmitter();
  public value = "";
  constructor() { }

  ngOnInit() { }

  saveMessage() {
    this.messageEvent.emit(this.value);
    this.dateEvent.emit(new Date());
  }

}
