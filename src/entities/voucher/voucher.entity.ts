// // voucher.entity.ts
// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
// import { Orders } from "../orders/orders.entity";
// import { Time } from "../time-stamp/time.entities";

// @Entity({ name: "vouchers" })
// export class Voucher extends Time {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: "code", unique: true })
//   code: string;

//   @Column({ name: "price" })
//   price: number;

//   @OneToMany(() => Orders)
// }

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Orders } from "../orders/orders.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "vouchers" })
export class Voucher extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "code", unique: true })
  code: string;

  @Column({ name: "price" })
  price: number;

}
