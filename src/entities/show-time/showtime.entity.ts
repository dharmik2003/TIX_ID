// showtime.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Screens } from "../screens/screen.entity";
import { Time } from "../time-stamp/time.entities";
import { Movies } from "../movies/movie.entity";
import { MyShow } from "../myshow/myshow.entity";
import { SeatLabel } from "../seat-label/seat-label.entity";

@Entity({ name: "show_time" })
export class ShowTime extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "date" })
  date: string;

  @Column({ name: "time" })
  time: string;

  @Column({ name: "price" })
  price: number;

  @ManyToOne(() => Movies, (movie) => movie.showtimes)
  movie: Movies;

  @ManyToOne(() => Screens, (screen) => screen.showtimes)
  screen: Screens;

  @OneToMany(() => MyShow, (myShow) => myShow.showTime)
  myShows: MyShow[];

  @OneToMany(() => SeatLabel, (seatLabel) => seatLabel.showTime)
  seatLabels: SeatLabel[];
}
