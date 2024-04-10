import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MyShow } from "../myshow/myshow.entity";
import { User } from "../auth/user.entity";
import { Time } from "../time-stamp/time.entities";
import { Tickets } from "../tickets/ticket.entity";

@Entity({ name: "payment_history" })
export class PaymentHistory extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.paymentHistories)
  user: User;

  @ManyToOne(() => MyShow, (myShow) => myShow.paymentHistories)
  myShow: MyShow;

  @Column({ name: "gst", type: "decimal", precision: 10, scale: 2 })
  gst: number;

  @Column({
    name: "platform_changes",
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  platformChanges: number;

  @Column({ name: "total", type: "decimal", precision: 10, scale: 2 })
  total: number;

  @Column({ name: "payment_done", type: "boolean", default: false })
  paymentDone: boolean;

  @Column({ name: "transaction_id" })
  transactionId: string;

  @OneToMany(() => Tickets, (ticket) => ticket.paymentHistory)
  tickets: Tickets[];
}
