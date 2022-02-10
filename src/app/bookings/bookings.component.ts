import { HttpClient } from '@angular/common/http';
import { identifierName, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/booking';
import { Movie, movies } from 'src/movie';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  providers: [BookingService],
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];
  booking: Booking = new Booking();
  bookingString: String;
  bookingId: string;
  numberOfTickets: string;
  movie: Movie;
  movieName: string;
  date: string;
  time: string;
  postId: string;

  items: any[] = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
    { id: 9, name: '9' },
    { id: 10, name: '10' },
  ];
  selected: number = 1;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.bookingId = Math.floor(Math.random() * 100000000).toString();
    this.date = this.route.snapshot.paramMap.get('show.key');
    this.time = this.route.snapshot.paramMap.get('time');
    const routeParams = this.route.snapshot.paramMap;
    const movieSlugFromRoute = routeParams.get('slug');
    //Get movie object
    this.movie = movies.find((movie) => movie.slug === movieSlugFromRoute);
    //Get name from movie object and save to variable
    this.movieName = this.movie.movieName;
    console.log(this.movieName, this.date, this.time);
  }

  generateBooking() {
    this.booking.id = this.bookingId;
    this.booking.date = this.date;
    this.booking.movieName = this.movieName;
    this.booking.time = this.time;
    this.booking.numberOfTickets = this.numberOfTickets;
    console.log(this.booking.movieName);
    // this.bookingService.addBooking(this.booking).subscribe((data) => {
    //   console.log(data);
    // });
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    const body = this.booking;
    this.http
      .post<any>('http://localhost:8081/api/v1/booking', body, { headers })
      .subscribe((data) => {
        this.postId = data.id;
      });
    this.bookingService.saveBooking(this.booking);

    this.bookingString = JSON.stringify(this.booking);
  }
}
