import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "news" })
export class News extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "image" })
  image: string;

  @Column({ name: "date" })
  date: string;

  @Column({ name: "tag", nullable: true })
  tag: string;

  @Column({ name: "trailer", nullable: true })
  trailer: string;

  @Column({ name: "description", nullable: true })
  description: string;

  @Column({ name: "like", default: 0 })
  like: number;
}
