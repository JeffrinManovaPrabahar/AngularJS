import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output() public messageEvent = new EventEmitter();
  public value: string = "";
  constructor() { }

  ngOnInit() { }

  saveMessage() {
    this.messageEvent.emit({
      t: new Date(),
      m: this.value
    });
    this.value = "";
  }

}
