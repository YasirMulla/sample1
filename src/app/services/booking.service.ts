import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/booking';

@Injectable({ providedIn: 'root' })
export class BookingService {
  baseURL: string = 'http://localhost:8081/api/v1/booking';

  currentBooking: Booking;
  count: number = 0;

  constructor(private http: HttpClient) {}

  getBooking(): Observable<Booking[]> {
    console.log('getBooking ' + this.baseURL + 'booking');
    return this.http.get<Booking[]>(this.baseURL + 'booking');
  }

  addBooking(booking: Booking): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(booking);
    console.log(body);
    return this.http.post(this.baseURL + body, { headers: headers });
  }

  saveBooking(booking: Booking) {
    this.currentBooking = booking;
  }

  getCurrentBooking() {
    return this.currentBooking;
  }
}
