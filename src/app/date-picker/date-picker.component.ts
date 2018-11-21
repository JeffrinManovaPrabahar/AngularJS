import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  public date = new Date();
  constructor() {
    console.log(this);
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

}
