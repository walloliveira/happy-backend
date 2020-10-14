import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Orphanages from './Orphanages';

@Entity('images')
export default class Images {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => Orphanages, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanages
};
