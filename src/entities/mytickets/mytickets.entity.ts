import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { User } from "../auth/user.entity";
import { Tickets } from "../tickets/ticket.entity";
import { MyShow } from "../myshow/myshow.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "my_tickets" })
export class MyTickets extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "image", nullable: true })
  image: string;

  @Column({ name: "title" })
  title: string;

  @Column({ type: "date" })
  date: string;
  
  @Column({ type: "time" })
  time: string;

  @Column({ foreignKeyConstraintName: "theater" })
  theater: string;

  @Column({ name: "screen" })
  screen: string;

  @ManyToOne(() => User, (user) => user.myTickets)
  user: User;

  @OneToMany(() => Tickets, (ticket) => ticket.myTicketId)
  ticketId: Tickets[];

  @ManyToOne(() => MyShow, (myShow) => myShow.myTicket)
  @JoinColumn({ name: "myShowId" }) 
  myShowId: MyShow;
}
