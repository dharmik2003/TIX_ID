import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
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
}
