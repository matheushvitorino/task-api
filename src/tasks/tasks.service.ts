import { Injectable, Param } from "@nestjs/common";
import { Task } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";

interface CreateRequest {
    task: string;
  }
interface IdRequest{
    id: number;
  }
interface TaskRequest{
    task:string;
}

@Injectable()
export class TasksService{
    constructor(private prisma: PrismaService){}

    async create(data: CreateRequest): Promise<Task> {
        return this.prisma.task.create({ data });
      }

    async findAll():Promise<Task[]>{
        const tasks = await this.prisma.task.findMany();
        return tasks;
    }

    async findById(id: IdRequest):Promise<Task | null>{
        
        const task = await this.prisma.task.findUnique({where:id})
        return task
    }

    async delete(id: IdRequest):Promise<void>{
        await this.prisma.task.delete({where:id})
    }

    async edit(id: IdRequest, task: TaskRequest):Promise<Task>{
        const n_user = await this.prisma.task.update({where:id,data:task})
        return n_user
    }
}