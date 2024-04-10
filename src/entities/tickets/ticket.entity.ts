import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { MyShow } from "../myshow/myshow.entity";
import { User } from "../auth/user.entity";
import { PaymentHistory } from "../payment-history/payment-history.entity";
import { MyTickets } from "../mytickets/mytickets.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "tickets" })
export class Tickets extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MyShow, (myShow) => myShow.tickets)
  myShow: MyShow;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;

  @ManyToOne(() => PaymentHistory, (paymentHistory) => paymentHistory.tickets)
  paymentHistory: PaymentHistory;

  // @ManyToOne(() => MyTickets, (myTicket) => myTicket.ticketId)
  // myTicketId: MyTickets;
  @ManyToOne(() => MyTickets, (myTicket) => myTicket.ticketId)
  @JoinColumn({ name: "myTicketId" }) // Specify the foreign key column name
  myTicketId: MyTickets;
}
