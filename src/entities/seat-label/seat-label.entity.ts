// seat-label.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Seats } from "../seats/seats.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "seat_labels" })
export class SeatLabel extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Seats, (seat) => seat.seatLabels)
  seat: Seats;

  @Column({ name: "screen" })
  screen: number;

  @Column({ name: "row" })
  row: number;

  @Column({ name: "col" })
  col: number;

  @Column({ name: "seat_label" })
  seatlabel: string;

  @Column({ name: "is_booked" })
  isbooked: boolean;

}
