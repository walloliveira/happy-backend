import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Images from './Images';

@Entity('orphanages')
export default class Orphanages {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  opens_at_weekends: boolean;

  @OneToMany(
    () => Images,
    image => image.orphanage,
    {
      cascade: ['insert', 'update'],
      eager: true,
    },
  )
  images: Array<Images>;

}
