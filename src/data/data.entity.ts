import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Data extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @Column()
  name: string

  @Column()
  count: number

  @Column()
  distance: number

}
