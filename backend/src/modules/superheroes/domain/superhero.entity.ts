import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SuperheroImagesSet } from './superhero-images-set.entity';

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

  @Column({ type: 'varchar', nullable: true })
  image_url: string | null;

  @Column({ type: 'timestamptz' })
  created_at: Date;

  @OneToMany(() => SuperheroImagesSet, (img) => img.superhero, {
    cascade: true,
  })
  imagesSet: SuperheroImagesSet[];
}
