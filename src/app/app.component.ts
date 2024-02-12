import { Component, OnInit } from '@angular/core';
import  Utm from 'geodesy/utm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lat = 0;
  lon = 0;
  ngOnInit(): void {
    this.lat = 1; this.lon = 1;
    const utm = Utm.parse('48 N 377298.745 1483034.794');
    const latlon = utm.toLatLon();
    this.lat = latlon.latitude;
    this.lon = latlon.longitude;
  }
  title = 'geodesy-demo1';
}
