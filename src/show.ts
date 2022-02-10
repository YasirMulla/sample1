import { Time } from "@angular/common";
import { Movie } from "./movie";

export interface Show {
    showId: string;
    date: string;
    startTime: string;
    endTime: string;
    price:number;
    cinemaHallId: number;
    movieName: string;
    
  }


  export const shows:Show[] = [
    {
      showId: "1ABAS",
      date: "2019-01-15",
      startTime:"9:00 AM",
      endTime: "SPIDER SPIDER()",
      price:9.99,
      cinemaHallId: 111,
      movieName: 'SPIDER-MAN: NO WAY HOME'
    },
    {
      showId: "2ABAS",
      date: "2019-01-16",
      startTime:"9:30 AM",
      endTime: "SPIDER SPIDER()",
      price:9.99,
      cinemaHallId: 111,
      movieName: 'SPIDER-MAN: NO WAY HOME'
    },
    {
      showId: "1ApAS",
      date: "2019-01-17",
      startTime:"9:30 PM",
      endTime: "SPIDER SPIDER()",
      price:9.99,
      cinemaHallId: 111,
      movieName: 'SPIDER-MAN: NO WAY HOME'
    },
    {
      showId: "1ABAS",
      date: "2019-01-15",
      startTime:"9:30 AM",
      endTime: "SPIDER SPIDER()",
      price:9.99,
      cinemaHallId: 111,
      movieName: 'SPIDER-MAN: NO WAY HOME'
    },
    {
      showId: "2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      date:  "2019-01-16",
      startTime:"9:30 AM",
      endTime: "new Date()",
      price:9.99,
      cinemaHallId: 111,
      movieName: 'MATRIX: RESSURECTIONS'
    },
  ];

