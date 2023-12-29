import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateScheduleCommand } from '../../application/commands/create-schedule.command';
import { CommandBus } from '@nestjs/cqrs';
import { DeleteScheduleCommand } from '../../application/commands/delete-schedule.command';
import { UpdateScheduleCommand } from '../../application/commands/update-schedule.command';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() body: any) {
    const { courseId, subject, status } = body;

    const command = new CreateScheduleCommand(courseId, subject, status);

    this.commandBus.execute(command);

    return 'ok';
  }

  @Delete(':scheduleId')
  delete(@Param() param: any) {
    const { scheduleId } = param;

    const command = new DeleteScheduleCommand(scheduleId);

    this.commandBus.execute(command);

    return 'ok';
  }

  @Put(':scheduleId')
  update(@Param() param: any, @Body() body: any) {
    const { scheduleId } = param;
    const {
      subject,
      status,
      frequency,
      duration,
      startDate,
      phrase,
      timeStartAndEnd,
      zoomId,
    } = body;

    const command = new UpdateScheduleCommand(
      scheduleId,
      subject,
      status,
      frequency,
      duration,
      startDate,
      phrase,
      timeStartAndEnd,
      zoomId,
    );

    this.commandBus.execute(command);

    return 'ok';
  }
}
