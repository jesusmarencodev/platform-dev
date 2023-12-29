import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { ScheduleFactory } from '../../domain/aggregates/schedule.factory';
import { Schedule } from '../../domain/aggregates/schedule';
import { ScheduleVO } from '../../domain/value-objects/schedule-id.vo';

export class UpdateScheduleCommand implements ICommand {
  constructor(
    public readonly scheduleId: string,
    public subject: string,
    public status: string,
    public frequency: string,
    public duration: string,
    public startDate: Date,
    public phrase: string,
    public timeStartAndEnd: string,
    public zoomId: string,
  ) {}
}

@CommandHandler(UpdateScheduleCommand)
export class UpdateScheduleCommandHandler
  implements ICommandHandler<UpdateScheduleCommand, any>
{
  execute(command: UpdateScheduleCommand): Promise<any> {
    const { scheduleId } = command;

    const schedule = this.findScheduleById(scheduleId);

    schedule.update({
      subject: command.subject,
      status: command.status,
      frequency: command.frequency,
      duration: command.duration,
      startDate: new Date(command.startDate),
      phrase: command.phrase,
      timeStartAndEnd: command.timeStartAndEnd,
      zoomId: command.zoomId,
    });
    console.log(schedule);

    return Promise.resolve();
  }

  findScheduleById(scheduleId: string): Schedule {
    return new Schedule({
      scheduleId: ScheduleVO.create(scheduleId),
      courseId: 'd4900e82-3e24-4a68-abc9-8edf158dd659',
      subject: 'course Docker kubernetes from zero',
      status: 'success',
    });
  }
}
