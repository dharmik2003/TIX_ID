import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Theaters } from "../theaters/theater.entity";
import { Seats } from "../seats/seats.entity";
import { MovieShows } from "../movie-shows/movie-shows.entity";
import { ShowTime } from "../show-time/showtime.entity";
import { MyShow } from "../myshow/myshow.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "screens" })
export class Screens extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "dimension" })
  dimension: string;

  @ManyToOne(() => Theaters, (theater) => theater.screens)
  theater: Theaters;

  @OneToMany(() => Seats, (seat) => seat.screen)
  seats: Seats[];

  @OneToMany(() => MovieShows, (movieShow) => movieShow.seat)
  movieShows: MovieShows[];

  @OneToMany(() => ShowTime, (showTime) => showTime.screen)
  showtimes: ShowTime[];

  @OneToMany(() => MyShow, (myshow) => myshow.screen)
  myshows: MyShow[];
}
