import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from './locations';
import { HttpService } from './http.service';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css'],
})
export class ClocksComponent implements OnInit {
  locations = LOCATIONS;
  selectedLocation?: Location;
  data: any = {};
  public datetime: any;
  public intervalDate: any;

  constructor(private http: HttpService) {
    this.http.getData().subscribe((data) => {
      this.data = data;
      this.datetime = this.data['datetime'].substring(11, 19);
      //this.intervalDate = setInterval(this.data, 1000);
    });
  }

  ngOnInit(): void {
    /*setInterval(() => {
      const date = this.datetime;
      this.updateDate(date);
    }, 1000);*/
  }

  onSelect(location: Location): void {
    this.selectedLocation = location;
  }
}
