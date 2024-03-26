// movie-show.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { TheaterMovies } from "../theater-movies/theater-movie.entity";
import { Screens } from "../screens/screen.entity";
import { Booking } from "../booking/booking.entities";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "movie_shows" })
export class MovieShows extends Time{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TheaterMovies, (theaterMovie) => theaterMovie.movieShows)
  theaterMovie: TheaterMovies;

  @ManyToOne(() => Screens, (seat) => seat.movieShows)
  seat: Screens;

  @OneToMany(() => Booking, (bookings) => bookings.movieShow)
  bookings: Booking[];


}


