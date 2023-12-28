import { AggregateRoot } from '@nestjs/cqrs';

export type ScheduleEssential = {
  readonly id: string;
  readonly courseId: string;
  readonly subject: string;
  readonly status: string;
};

export type ScheduleOptional = {
  readonly frequency: string;
  readonly duration: string;
  readonly startDate: Date;
  readonly phrase: string;
  readonly timeStartAndEnd: string;
  readonly zoomId: string;
};

export type ScheduleUpdate = {
  readonly subject: string;
  readonly status: string;
  readonly frequency: string;
  readonly duration: string;
  readonly startDate: Date;
  readonly phrase: string;
  readonly timeStartAndEnd: string;
  readonly zoomId: string;
};

export type ScheduleProperties = Required<ScheduleEssential> &
  Partial<ScheduleOptional>;

export class Schedule extends AggregateRoot {
  private readonly id: string;
  private readonly courseId: string;
  private subject: string;
  private status: string;
  private frequency: string;
  private duration: string;
  private startDate: Date;
  private phrase: string;
  private timeStartAndEnd: string;
  private zoomId: string;
  private active: boolean;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private deleteAt: Date;

  constructor(properties: ScheduleProperties) {
    super();
    Object.assign(this, properties);
    this.createdAt = new Date();
    this.active = true;
  }

  properties() {
    return {
      id: this.id,
      courseId: this.courseId,
      subject: this.subject,
      status: this.status,
      frequency: this.frequency,
      duration: this.duration,
      startDate: this.startDate,
      phrase: this.phrase,
      timeStartAndEnd: this.timeStartAndEnd,
      zoomId: this.zoomId,
      active: this.active,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deleteAt: this.deleteAt,
    };
  }

  update(fields: Partial<ScheduleUpdate>) {
    Object.assign(this, fields);
    this.updatedAt = new Date();
  }

  delete() {
    this.active = false;
    this.deleteAt = new Date();
  }
}

const properties: ScheduleProperties = {
  id: 'abc',
  subject: 'abc',
  courseId: 'abc',
  status: 'q',
};
