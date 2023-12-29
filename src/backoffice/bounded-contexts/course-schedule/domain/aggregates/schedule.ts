import { AggregateRoot } from '@nestjs/cqrs';
import { Requirement } from '../entities/requirement';
import { Goal } from '../entities/goal';
import { Syllabus } from '../entities/syllabus';
import { ScheduleVO } from '../value-objects/schedule-id.vo';

export type ScheduleEssential = {
  readonly scheduleId: ScheduleVO;
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
  private readonly scheduleId: ScheduleVO;
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
  private requirements: Requirement[] = [];
  private goals: Goal[] = [];
  private syllabus: Syllabus[] = [];

  constructor(properties: ScheduleProperties) {
    super();
    Object.assign(this, properties);
    this.createdAt = new Date();
    this.active = true;
  }

  properties() {
    return {
      id: this.scheduleId,
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
      requirements: this.requirements,
      goals: this.goals,
      syllabus: this.syllabus,
    };
  }

  addRequirements(requirement: string) {
    const newRequirement = new Requirement({
      scheduleId: this.scheduleId,
      text: requirement,
    });
    this.requirements.push(newRequirement);
  }
  addGoal(goal: string) {
    const newGoal = new Goal({
      scheduleId: this.scheduleId,
      text: goal,
    });
    this.goals.push(newGoal);
  }
  addSyllabus(syllabus: string) {
    const newSyllabus = new Syllabus({
      scheduleId: this.scheduleId,
      text: syllabus,
    });
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


