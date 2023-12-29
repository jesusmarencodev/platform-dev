import { ScheduleVO } from '../value-objects/schedule-id.vo';
import { Schedule } from './schedule';

export class ScheduleFactory {
  create(
    scheduleId: ScheduleVO,
    courseId: string,
    subject: string,
    status: string,
  ) {
    if (status.trim() === '') throw new Error('Status cannot be empty');
    if (subject.trim() === '') throw new Error('Subject cannot be empty');
    if (subject.trim().split(' ').length < 5)
      throw new Error('Subject cannot be less than 5 characters');

    return new Schedule({ scheduleId, courseId, subject, status });
  }
}
