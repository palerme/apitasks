import { IsNotEmpty, Length, isUUID } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdat' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedat' })
  updatedAt: Date;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}

export enum TaskStatus {
  StardBai = 1,
  Active = 2,
  Finish = 3

}