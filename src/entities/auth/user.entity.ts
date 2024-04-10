import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PaymentHistory } from "../payment-history/payment-history.entity";
import { MyShow } from "../myshow/myshow.entity";
import { Tickets } from "../tickets/ticket.entity";
import { Time } from "../time-stamp/time.entities";
import { MyTickets } from "../mytickets/mytickets.entity";

@Entity({ name: "users" })
export class User extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "phone_number" })
  phoneNumber: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "password" })
  password: string;


  @OneToMany(() => PaymentHistory, (paymentHistory) => paymentHistory.user)
  paymentHistories: PaymentHistory[];

  @OneToMany(() => MyShow, (myshow) => myshow.user)
  myshows: MyShow[];

  @OneToMany(() => Tickets, (ticket) => ticket.user)
  tickets: Tickets[];

  @OneToMany(() => MyTickets, (myTicket) => myTicket.user)
  myTickets: MyTickets[];
}
