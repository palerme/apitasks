import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>
    ) {}
  async create(createTaskDto: CreateTaskDto) {

    const newTask = this.repository.create(createTaskDto);

    await this.repository.save(createTaskDto);

    return newTask;
  }

  async  findAll() {

    const task = await this.repository.find()
    return task;
  }

  async findOne(id: string) {

    const task = await this.repository.find(
      {
        where: {
          id
        }
      }
    )
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
