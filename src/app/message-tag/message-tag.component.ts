import { Component, OnInit, Input } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';

@Component({
  selector: 'app-message-tag',
  templateUrl: './message-tag.component.html',
  styleUrls: ['./message-tag.component.scss']
})
export class MessageTagComponent implements OnInit {

  public messages = [];

  constructor(private _journalService: JournalServiceService) { }

  ngOnInit() {
    this.messages = this._journalService.getMessages();
  }

  addMessage(date: Date, message: string) {
    this.messages.push({
      "t": date,
      "m": message
    })
  }

}
