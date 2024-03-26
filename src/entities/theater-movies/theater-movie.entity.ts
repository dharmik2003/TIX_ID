import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Movies } from "../movies/movie.entity";
import { Theaters } from "../theaters/theater.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "theater_movies" })
export class TheaterMovies extends Time {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Theaters, (theater) => theater.movies)
  theater: Theaters;

  @ManyToOne(() => Movies, (movie) => movie.theaters)
  movie: Movies;

}
