// booking.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Seats } from "../seats/seats.entity";
import { MovieShows } from "../movie-shows/movie-shows.entity";
import { Orders } from "../orders/orders.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "booking" })
export class Booking extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Seats, (seat) => seat.bookings)
  seat: Seats;

  @ManyToOne(() => MovieShows, (movieShow) => movieShow.bookings)
  movieShow: MovieShows;

  // @OneToMany(() => Orders, (order) => order.bookings)
  // order: Orders;

  @ManyToOne(() => Orders, (order) => order.booking)
  orders: Orders;

}
