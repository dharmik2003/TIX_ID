// theater.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { TheaterMovies } from "../theater-movies/theater-movie.entity";
import { Screens } from "../screens/screen.entity";
import { Time } from "../time-stamp/time.entities";

@Entity({ name: "theaters" })
export class Theaters extends Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "address" })
  address: string;

  @Column({ name: "city" })
  city: string;

  @Column({ name: "badge" })
  badge: string;

  @OneToMany(() => TheaterMovies, (theaterMovie) => theaterMovie.theater)
  movies: TheaterMovies[];

  @OneToMany(() => Screens, (screen) => screen.theater)
  screens: Screens[];

}
