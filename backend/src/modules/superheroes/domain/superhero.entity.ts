import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('superheroes')
export class Superhero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  realName: string;

  @Column()
  originDescription: string;

  @Column()
  superPower: string;

  @Column()
  catchPhrase: string;

  @Column()
  imageUrl: string;

  @Column({ type: 'timestamptz' })
  createdAt: Date;
}
