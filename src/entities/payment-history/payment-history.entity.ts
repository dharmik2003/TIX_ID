import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../auth/user.entity";
import { Orders } from "../orders/orders.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "payment_history" })
export class PaymentHistory extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "payment_status" })
  paymentStatus: boolean;

  @Column({ name: "payment_amount" })
  paymentAmount: number;

  @ManyToOne(() => User, (user) => user.paymentHistories)
  user: User;

  @OneToOne(() => Orders)
  order: Orders;

}
