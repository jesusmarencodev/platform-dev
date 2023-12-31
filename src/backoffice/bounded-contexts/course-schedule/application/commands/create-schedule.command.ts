import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';
import { ScheduleFactory } from '../../domain/aggregates/schedule.factory';
import { ScheduleVO } from '../../domain/value-objects/schedule-id.vo';

export class CreateScheduleCommand implements ICommand {
  constructor(
    public readonly courseId: string,
    public readonly subject: string,
    public readonly status: string,
  ) {}
}

@CommandHandler(CreateScheduleCommand)
export class CreateScheduleCommandHandler
  implements ICommandHandler<CreateScheduleCommand, any>
{
  execute(command: CreateScheduleCommand): Promise<any> {
    const { courseId, subject, status } = command;
    const scheduleId = ScheduleVO.create(uuidv4());
    const schedule = new ScheduleFactory().create(
      scheduleId,
      courseId,
      subject,
      status,
    );

    console.log(schedule.properties());

    return Promise.resolve();
  }
}
