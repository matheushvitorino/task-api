import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { TaskModule } from './tasks/tasks.module';


@Module({
  imports: [DataBaseModule,TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
