import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.css'],
})
export class BookingSuccessComponent implements OnInit {
  currentBooking: Booking;
  id: String;
  movieName: String;
  date: String;
  time: String;
  numTickets: String;
  price: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentBooking = JSON.parse(this.route.snapshot.paramMap.get('id'));
    console.log(this.currentBooking);
    this.movieName = this.currentBooking.movieName;
    this.date = this.currentBooking.date;
    this.time = this.currentBooking.time;
    this.price = parseInt(this.currentBooking.numberOfTickets) * 7.99;
    this.id = this.currentBooking.id;
    this.numTickets = this.currentBooking.numberOfTickets;
  }
}
