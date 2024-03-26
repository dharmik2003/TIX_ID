// seat.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Screens } from "../screens/screen.entity";
import { Time } from "../time-stamp/time.entities";
import { Movies } from "../movies/movie.entity";

@Entity({ name: "show_time" })
export class ShowTime extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "time" })
  time: string;

  @ManyToOne(() => Movies, (movie) => movie.showtimes)
  movie: Movies;

  @ManyToOne(() => Screens, (screen) => screen.showtimes)
  screen: Screens;
}
