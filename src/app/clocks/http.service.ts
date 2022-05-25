import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'http://worldtimeapi.org/api/timezone/Europe/Warsaw'; //location['url'];
    return this.http.get(url);
  }
}
