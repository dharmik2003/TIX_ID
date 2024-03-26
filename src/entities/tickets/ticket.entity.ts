import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Orders } from "../orders/orders.entity";
import { User } from "../auth/user.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "tickets" })
export class Tickets extends Time{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, (order) => order.tickets)
  order: Orders;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;


}
