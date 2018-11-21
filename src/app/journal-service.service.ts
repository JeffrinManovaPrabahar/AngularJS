import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JournalServiceService {

  constructor() { }

  getMessages() {
    return [{
      "t": "Wed Nov 21 2018 21:45:22 GMT+0530 (India Standard Time)",
      "m": "First Message."
    }, {
      "t": "Wed Nov 21 2018 21:45:22 GMT+0530 (India Standard Time)",
      "m": "Second Message."
    }, {
      "t": "Wed Nov 21 2018 21:45:22 GMT+0530 (India Standard Time)",
      "m": "Third Message."
    }]
  }
}
