import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { IJournalMessage } from './journal';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class JournalServiceService {

  private _url: string = "/assets/data/21Nov2018.json";

  constructor(private http: HttpClient) { }

  getMessages(): Observable<IJournalMessage[]> {
    return this.http.get<IJournalMessage[]>(this._url);
  }
}
