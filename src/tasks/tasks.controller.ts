import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "@prisma/client";
import { CreateTaskDto } from "./dtos/createTaskDto";

@Controller('tasks')
export class TasksController{
    constructor(private tasksService: TasksService){}

    @Post()
    createTask(@Body() body: CreateTaskDto){
        return this.tasksService.create(body)
        
    }
    @Get('all')
    async getAllTasks(){
        const tasks = await this.tasksService.findAll()
        return tasks
    }
    @Get(':id')
    async getTaskById(@Param('id', ParseIntPipe) id: number){
        const task = await this.tasksService.findById({id})
        return task
    }
    @Delete(':id')
    async deleteTask(@Param('id', ParseIntPipe)id: number){
        await this.tasksService.delete({id})
    }

    @Patch(':id')
    async editTask(@Param('id', ParseIntPipe) id: number,@Body() body: CreateTaskDto){

        const n_user = await this.tasksService.edit({id},body);
        return n_user;

        
    }
}