import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { TheaterMovies } from "../theater-movies/theater-movie.entity";
import { Time } from "../time-stamp/time.entities";
import { ShowTime } from "../show-time/showtime.entity";

@Entity({ name: "movies" })
export class Movies extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "image" })
  image: string;

  @Column({ name: "duration" })
  duration: string;

  @Column({ name: "rate" })
  rate: string;

  @Column({ name: "tag" })
  tag: string;

  @Column({ name: "director" })
  director: string;

  @OneToMany(() => TheaterMovies, (theaterMovie) => theaterMovie.movie)
  theaters: TheaterMovies[];

  @OneToMany(() => ShowTime, (showTime) => showTime.movie)
  showtimes: ShowTime[];
}
