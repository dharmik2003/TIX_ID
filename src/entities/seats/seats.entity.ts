// seat.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Screens } from "../screens/screen.entity";
import { Booking } from "../booking/booking.entities";
import { Time } from "../time-stamp/time.entities";
import { SeatLabel } from "../seat-label/seat-label.entity";

@Entity({ name: "seats" })
export class Seats extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "row_num" })
  rownum: number;

  @Column({ name: "seat_num" })
  seatnum: number;

  @ManyToOne(() => Screens, (screen) => screen.seats)
  screen: Screens;

  @OneToMany(() => SeatLabel, (seatLabel) => seatLabel.seat)
  seatLabels: SeatLabel[];

  @OneToMany(() => Booking, (booking) => booking.seat)
  bookings: Booking[];
}
