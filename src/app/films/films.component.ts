import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { Movie, movies } from 'src/movie';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  images = [
    '../assets/images/spiderman.jpg',
    '../assets/images/matrix.jpg',
    '../assets/images/gucci.jpg',
  ];
  movies: Movie[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:8081/api/v1/movies');
    response.subscribe((data) => (this.movies = data as Movie[]));
  }
}
