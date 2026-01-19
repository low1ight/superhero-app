import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Superhero } from './superhero.entity';

@Entity('superhero_images')
export class SuperheroImagesSet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  img_key: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @Column()
  superhero_id: number;

  @ManyToOne(() => Superhero, (hero) => hero.imagesSet, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'superhero_id' })
  superhero: Superhero;
}
