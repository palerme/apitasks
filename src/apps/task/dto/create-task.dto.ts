import { IsNotEmpty, Length, isNotEmpty } from "class-validator";
import { Task } from "../entities/task.entity";
import { Column, CreateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 30)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 150)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  status: string;
}
