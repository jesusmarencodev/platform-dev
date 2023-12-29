import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ScheduleFactory } from './backoffice/bounded-contexts/course-schedule/domain/aggregates/schedule.factory';
import { ScheduleVO } from './backoffice/bounded-contexts/course-schedule/domain/value-objects/schedule-id.vo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
/*     const courseId = 'd4900e82-3e24-4a68-abc9-8edf158dd659';
    const scheduleId = ScheduleVO.create(
      '8fda35b0-b20d-4692-92d8-396dfd8f760c',
    );
    const subject = 'example other thanks for all feedback';
    const status = 'running';
    const schedule = new ScheduleFactory().create(
      scheduleId,
      courseId,
      subject,
      status,
    );

    schedule.addRequirements('Requirement 1');
    schedule.addRequirements('Requirement 2');
    schedule.addRequirements('Requirement 3');
    schedule.addGoal('Goal 1');
    schedule.addGoal('Goal 2');
    schedule.addGoal('Goal 3');
    schedule.addSyllabus('Syllabus 1');
    schedule.addSyllabus('Syllabus 2');
    schedule.addSyllabus('Syllabus 3');

    console.log(schedule); */

    return 'ok';
  }
}
