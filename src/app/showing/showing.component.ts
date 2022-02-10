import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movies } from 'src/movie';
import { Show,shows } from 'src/show';

@Component({
  selector: 'app-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.css']
})
export class ShowingComponent implements OnInit {
  movie: Movie;
  show: Show;
  shows: Show[];
  myMap = new Map<string, string[]>();
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const movieSlugFromRoute = routeParams.get('slug');

  // Find the movie that correspond with the id provided in route.
  this.movie = movies.find(movie => movie.slug === movieSlugFromRoute);
  this.show = shows.find(show => show.movieName === this.movie.movieName);
  this.shows =shows.filter(show => show.movieName === this.movie.movieName);
  //this.shows.forEach((show,index)=>this.myMap.set(show.date,shows[index].startTime))
  
  this.shows.forEach((show,index)=>{if(this.myMap.has(show.date) === true){
    this.myMap.get(show.date).push(shows[index].startTime)
    console.log("Adding",this.myMap)
  }else{
    this.myMap.set(show.date,[shows[index].startTime])
    console.log("making",this.myMap)
  }})
   
   console.log(this.shows)
   console.log(this.myMap)

  //((show: { movieName: string; })=>show.movieName===this.movie.name)
  //this.show = shows.forEach(show);
  }

}
