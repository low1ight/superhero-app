import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('superheroes')
export class Superhero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  real_name: string;

  @Column()
  origin_description: string;

  @Column()
  super_power: string;

  @Column()
  catch_phrase: string;

  @Column()
  image_url: string;

  @Column({ type: 'timestamptz' })
  created_at: Date;
}
