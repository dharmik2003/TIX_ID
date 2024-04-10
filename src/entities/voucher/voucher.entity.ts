import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { MyShow } from "../myshow/myshow.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "vouchers" })
export class Voucher extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "code", unique: true })
  code: string;

  @Column({ name: "price" })
  price: number;

  @OneToMany(() => MyShow, (myshow) => myshow.voucher)
  myshows: MyShow[];
}
