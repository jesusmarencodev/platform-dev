import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ScheduleController } from './backoffice/bounded-contexts/course-schedule/interfaces/http/schedule.controllet';
import { CreateScheduleCommandHandler } from './backoffice/bounded-contexts/course-schedule/application/commands/create-schedule.command';
import { DeleteScheduleCommandHandler } from './backoffice/bounded-contexts/course-schedule/application/commands/delete-schedule.command';
import { UpdateScheduleCommandHandler } from './backoffice/bounded-contexts/course-schedule/application/commands/update-schedule.command';

const modules = [CqrsModule];

@Module({
  imports: [...modules],
  controllers: [AppController, ScheduleController],
  providers: [
    AppService,
    CreateScheduleCommandHandler,
    DeleteScheduleCommandHandler,
    UpdateScheduleCommandHandler
  ],
})
export class AppModule {}
