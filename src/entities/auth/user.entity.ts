import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { PaymentHistory } from "../payment-history/payment-history.entity";
import { Tickets } from "../tickets/ticket.entity";
import { Orders } from "../orders/orders.entity";
import { Time } from "../time-stamp/time.entities";

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

  @OneToMany(() => Tickets, (ticket) => ticket.user)
  tickets: Tickets[];

  @OneToMany(() => Orders, (order) => order.user)
  orders: Orders[];

}
