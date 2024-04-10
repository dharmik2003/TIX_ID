import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "../auth/user.entity";
import { Movies } from "../movies/movie.entity";
import { Screens } from "../screens/screen.entity";
import { Voucher } from "../voucher/voucher.entity";
import { PaymentHistory } from "../payment-history/payment-history.entity";
import { Time } from "../time-stamp/time.entities";
import { Tickets } from "../tickets/ticket.entity";
import { MyTickets } from "../mytickets/mytickets.entity";
import { ShowTime } from "../show-time/showtime.entity";

@Entity({ name: "myshow" })
export class MyShow extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Movies)
  @JoinColumn({ name: "movieId" })
  movie: Movies;

  @ManyToOne(() => Screens)
  @JoinColumn({ name: "screenId" })
  screen: Screens;

  @Column("simple-array", { name: "selected_seat" })
  selectedSeats: string[];

  @Column({ name: "seat_price", type: "decimal", precision: 10, scale: 2 })
  seatPrice: number;

  @Column({ name: "total_seat" })
  totalSeats: number;

  @Column({ name: "total_amount", type: "decimal", precision: 10, scale: 2 })
  totalAmount: number;

  @ManyToOne(() => Voucher)
  @JoinColumn({ name: "voucherId" })
  voucher: Voucher;

  @ManyToOne(() => ShowTime)
  @JoinColumn({ name: "showTimeId" })
  showTime: ShowTime;

  @Column({
    name: "voucher_amount",
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  voucherAmount: number;

  @Column({ name: "final_price", type: "decimal", precision: 10, scale: 2 })
  finalPrice: number;

  @Column({ name: "payment_done", type: "boolean", default: false })
  paymentDone: boolean;

  @OneToMany(() => PaymentHistory, (paymentHistory) => paymentHistory.myShow)
  paymentHistories: PaymentHistory[];

  @OneToMany(() => Tickets, (ticket) => ticket.myShow)
  tickets: Tickets[];

  @OneToMany(() => MyTickets, (myTicket) => myTicket.myShowId)
  myTicket: MyTickets[];
}
