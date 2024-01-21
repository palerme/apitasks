import { IsNotEmpty, Length, isNotEmpty } from "class-validator";
import { Task } from "../entities/task.entity";
import { Column, CreateDateColumn } from "typeorm";

export class CreateTaskDto {

  @IsNotEmpty()
  @Length(1, 30)
  title: string;

  @IsNotEmpty()
  @Length(1, 150)
  description: string;

  @IsNotEmpty()
  status: string;
}
