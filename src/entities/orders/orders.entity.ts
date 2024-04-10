import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "../auth/user.entity";
import { Booking } from "../booking/booking.entities";
import { Tickets } from "../tickets/ticket.entity";
import { PaymentHistory } from "../payment-history/payment-history.entity";
import { Voucher } from "../voucher/voucher.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "orders" })
export class Orders extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => User, (user) => user.orders)
  // user: User;

  // @OneToMany(() => Tickets, (ticket) => ticket.order)
  // tickets: Tickets[];

  @OneToOne(() => PaymentHistory)
  @JoinColumn()
  paymentHistory: PaymentHistory;

  @OneToOne(() => Voucher)
  @JoinColumn()
  Voucher: Voucher;

  @OneToMany(() => Booking, (booking) => booking.orders)
  booking: Booking[];
  
}
