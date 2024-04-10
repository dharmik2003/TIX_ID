import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "comingsoon" })
export class ComingSoon extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "image" })
  image: string;

  @Column({ name: "date" })
  date: string;

  @Column({ name: "type1" })
  type1: string;

  @Column({ name: "type2" })
  type2: string;

  @Column({ name: "type3" })
  type3: string;

  @Column({ name: "tag", nullable: true })
  tag: string;

  @Column({ name: "description", nullable: true })
  description: string;
}
