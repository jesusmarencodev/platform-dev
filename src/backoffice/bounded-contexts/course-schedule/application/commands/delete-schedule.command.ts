import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { ScheduleFactory } from '../../domain/aggregates/schedule.factory';

export class DeleteScheduleCommand implements ICommand {
  constructor(public readonly scheduleId: string) {}
}

@CommandHandler(DeleteScheduleCommand)
export class DeleteScheduleCommandHandler
  implements ICommandHandler<DeleteScheduleCommand, any>
{
  execute(command: DeleteScheduleCommand): Promise<any> {
    const { scheduleId } = command;

    console.log(scheduleId);

    // console.log(schedule.properties());

    return Promise.resolve();
  }
}
