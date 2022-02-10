import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/booking';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bookings: any;
  bookinglist: Booking[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:8081/api/v1/booking')
      .subscribe((data) => {
        console.log(data);
        this.bookings = data;
      });
    console.log(this.bookings);
  }

  findByEmail(email: String) {
    this.http
      .get<any>('http://localhost:8081/api/v1/booking')
      .subscribe((data) => {
        console.log(data);
        data.array.forEach((element: String) => {
          console.log(element);
        });
      });
  }
}
