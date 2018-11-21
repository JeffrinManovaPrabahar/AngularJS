import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-tag',
  templateUrl: './message-tag.component.html',
  styleUrls: ['./message-tag.component.scss']
})
export class MessageTagComponent implements OnInit {

  @Input() public date;
  @Input() public message;
  
  constructor() { }

  ngOnInit() {
  }

}
